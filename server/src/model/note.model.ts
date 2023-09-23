import { Date, Schema, model } from 'mongoose';

interface INote {
    title: string;
    tagline: string;
    body: string;
    author: string;
    pinnedTime?: Date;
}

const noteSchema = new Schema<INote>({
    title: {
        type: String,
        required: true
    },
    tagline: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    pinnedTime: {
        type: Date,
        required: false
    },
}, { timestamps: true });

const Note = model<INote>('Note', noteSchema);
export default Note;