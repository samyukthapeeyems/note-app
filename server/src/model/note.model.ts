import { Schema, model } from 'mongoose';

interface INote {
    title?: string;
    tagline?: string;
    body?: string;
    author?: string;
    pinnedTime?: Date;
    color: "#FFFFFF" | "#F28B82" | "#FBBD33" | "#FEF175" | "#C8F08F" | 
    "#A5F8EA" | "#CBF0F8" | "#AECBFA" | "#D7AEFB" | "#F8CFE7" | "#E6C9A8" | "#E8EAED"
}

const noteSchema = new Schema<INote>({
    title: {
        type: String,
        required: false
    },
    tagline: {
        type: String,
        required: false
    },
    body: {
        type: String,
        required: false
    },
    author: {
        type: String,
        required: false
    },
    pinnedTime: {
        type: Date,
        required: false
    },
    color: {
        type: String,
        required : true,
        default : "#FFFFFF"
    }
}, { timestamps: true });

const Note = model<INote>('Note', noteSchema);
export default Note;