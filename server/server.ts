import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors'
import MongooseConnection from './src/utils/db';
import logger from './src/utils/logger';
import NoteRoutes from './src/route/note.route';

dotenv.config({ path: '.env' });
const app = express();
const PORT = process.env.PORT || 3000;

//cors
let corsOptions = {
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200 
}
// app.use(cors(corsOptions));
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/notes', NoteRoutes)

let debugCallback;




const mongooseConnection = new MongooseConnection({
  mongoUrl: process.env.MONGO_URL ?? '',
  debugCallback,
  onStartConnection: () => { },
  onConnectionError: (error, mongoUrl) => logger.log({
    level: 'error',
    message: `Could not connect to MongoDB at ${mongoUrl}`,
    error
  }),
  onConnectionRetry: mongoUrl => logger.info(`Retrying to MongoDB at ${mongoUrl}`)
});

const serve = () => app.listen(PORT, () => {
  logger.info(`server started at http://localhost:${PORT}`);
});

// Close the Mongoose connection, when receiving SIGINT
process.on('SIGINT', async () => {
  logger.info('Gracefully shutting down');
  logger.info('Closing the MongoDB connection');
  try {
    await mongooseConnection.close(true);
    logger.info('Mongo connection closed successfully');
  } catch (err) {
    logger.log({
      level: 'error',
      message: 'Error shutting closing mongo connection',
      error: err
    });
  }
  process.exit(0);
});

//start server
mongooseConnection.connect(mongoUrl => {
  logger.info(`Connected to MongoDB at ${mongoUrl}`);
  serve();
});