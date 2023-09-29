import express, { Router } from 'express';
import { getAllNote, createNote, deleteNote, getPinnedNotes ,editNote, toggleNotePin } from '../controller/note.controller';
import { paginate } from '../middleware/pagination';


const router: Router = express.Router();

router.get('/pinned', getPinnedNotes)
router.get('/', paginate(Number(process.env.PAGINATION_LIMIT), Number(process.env.PAGINATION_MAX)), getAllNote);
router.post('/', createNote);
router.patch('/:id/togglePin', toggleNotePin);
router.patch('/:id', editNote)
router.delete('/:id', deleteNote);


export default router;