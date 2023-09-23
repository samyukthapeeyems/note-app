import mongoose, { ConnectOptions } from 'mongoose';

interface IOnConnectedCallback {
    (mongoUrl: string): void;
}

interface MongooseConnectionOptions {
    mongoUrl: string;
    mongooseConnectionOptions?: ConnectOptions;
    retryDelayMs?: number
    debugCallback?: (collectionName: string, method: string, query: any, doc: string) => void;
    onStartConnection?: (mongoUrl: string) => void;
    onConnectionError?: (error: Error, mongoUrl: string) => void;
    onConnectionRetry?: (mongoUrl: string) => void;
}

const defaultMongooseConnectionOptions: ConnectOptions = {
    autoCreate: true,
    autoIndex: true
};

export default class MongooseConnection {
    private readonly options: MongooseConnectionOptions;
    private onConnectedCallback?: IOnConnectedCallback;
    private isConnectedBefore: boolean = false;
    private shouldCloseConnection: boolean = false;
    private retryDelayMs: number = 2000;
    private readonly mongoConnectionOptions: ConnectOptions = defaultMongooseConnectionOptions;
    private connectionTimeout?: NodeJS.Timeout;
    constructor(options: MongooseConnectionOptions) {
        this.options = options;
        mongoose.connection.on('error', this.onError);
        mongoose.connection.on('connected', this.onConnected);
        mongoose.connection.on('disconnected', this.onDisconnected);
        mongoose.connection.on('reconnected', this.onReconnected);

        if (options.debugCallback) {
            mongoose.set('debug', options.debugCallback);
        }
        if (options.retryDelayMs) {
            this.retryDelayMs = options.retryDelayMs;
        }
    }
    public async close(force: boolean = false) {
        if (this.connectionTimeout) {
            clearTimeout(this.connectionTimeout);
        }
        this.shouldCloseConnection = true;
        await mongoose.connection.close(force);
    }
    public connect(onConnectedCallback: IOnConnectedCallback) {
        this.onConnectedCallback = onConnectedCallback;
        this.startConnection();
    }

    private startConnection = () => {
        if (this.options.onStartConnection) {
            this.options.onStartConnection(this.options.mongoUrl);
        }
        mongoose.connect(this.options.mongoUrl, this.mongoConnectionOptions).catch(() => { });
    }
    private onConnected = () => {
        this.isConnectedBefore = true;
        this.onConnectedCallback?.(this.options.mongoUrl);
    };
    private onReconnected = () => {
        this.onConnectedCallback?.(this.options.mongoUrl);
    };
    private onError = () => {
        if (this.options.onConnectionError) {
            const error = new Error(`Could not connect to MongoDB at ${this.options.mongoUrl}`);
            this.options.onConnectionError(error, this.options.mongoUrl);
        }
    };
    private onDisconnected = () => {
        if (!this.isConnectedBefore && !this.shouldCloseConnection) {
            this.connectionTimeout = setTimeout(() => {
                this.startConnection();
                this.connectionTimeout && clearTimeout(this.connectionTimeout);
            }, this.retryDelayMs);
            if (this.options.onConnectionRetry) {
                this.options.onConnectionRetry(this.options.mongoUrl);
            }
        }
    };
}