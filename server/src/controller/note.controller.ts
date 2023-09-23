import Note from '../model/note.model';
import {Request, Response} from 'express';
import { CRequest } from '../middleware/pagination';






// export const NoteDetails = (req: Request, res: Response) => {
//     const id = req.params.id;
//     Note.findById(id)
//         .then(result => {
//             res.render('details', { title: 'Note details' , Note: result })
//         })
//         .catch(e => {
//             res.render('404', { title: 'Note not found' });
//         });
// }

export const getAllNote = async (req: CRequest, res: Response) => {
    try{
        let result = await Note.find({});
        res.status(200).json(result);
    }
    catch(e){
        res.status(500).json({
            message: "Unable to fetch notes"
        });
    }
}


export const createNote = async (req: Request, res: Response) => {
    try{
        const note = new Note(req.body);
        await note.save();
        res.status(201).json({
            message: "Note created successfully"
        });
    }
    catch(e){
        res.status(500).json({
            message: "Unable to create note"
        });
    }
}


export const deleteNote = async (req: Request, res: Response) => {
    try{
        const id = req.params.id;
        await Note.findByIdAndDelete(id);
        res.status(200).json({
            message: "Note deleted successfully"
        });
    }
    catch(e){
        res.status(500).json({
            message: "Unable to delete note"
        });
    }
}



