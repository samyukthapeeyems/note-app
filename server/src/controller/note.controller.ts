import Note from '../model/note.model';
import { Request, Response } from 'express';
import { CRequest } from '../middleware/pagination';

export const getAllNote = async (req: CRequest, res: Response) => {
    try {
        let result = await Note.find({});
        res.status(200).json(result);
    }
    catch (e) {
        res.status(500).json({
            message: "Unable to fetch notes"
        });
    }
}

export const createNote = async (req: Request, res: Response) => {
    try {
        const note = new Note(req.body);
        await note.save();
        res.status(201).json({
            message: "Note created successfully"
        });
    }
    catch (e: any) {
        console.log(e)
        res.status(500).json({
            status: "Unable to create note",
            message: e.message
        });
    }
}

export const getPinnedNotes = async (req: Request, res: Response) => {
    try {
        const limit: number = parseInt(req.query.limit! as string, 10) || 2
        let result = await Note.find({ pinnedTime: { $exists: true } })
            .sort({ pinnedTime: 'desc' })
            .limit(limit)

        res.json(result)
    } catch (error) {
        res.status(500).json({
            message: "Unable to get pinned notes"
        });
    }
}

export const editNote = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        let result = await Note.findOneAndUpdate({ _id: id }, req.body, {
            new: true
        });
        res.json({
            status: "note updated",
            doc: result?.toJSON()
        })

    } catch (error) {
        res.status(500).json({
            status: "Unable to delete note",
            message: error
        });
    }
}

export const deleteNote = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        await Note.findByIdAndDelete(id);
        res.status(200).json({
            message: "Note deleted successfully"
        });
    }
    catch (e) {
        res.status(500).json({
            message: "Unable to delete note"
        });
    }
}



