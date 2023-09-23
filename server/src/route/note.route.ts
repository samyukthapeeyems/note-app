import express, {Request, Response, Router} from 'express';
import {getAllNote, createNote, deleteNote} from '../controller/note.controller';
import { paginate } from '../middleware/pagination';


const router: Router = express.Router();

router.get('/', paginate(4, 6), getAllNote);
router.post('/', createNote);
router.delete('/:id', deleteNote);


export default router;