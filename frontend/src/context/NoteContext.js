import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { getNotes, deleteNote, editNote, pinNote, unpinNote } from '../api/notes';
import { notesReducer } from './NoteReducer';

const NotesContext = createContext();

export function useNotes() {
    return useContext(NotesContext);
}

export function NotesProvider({ children }) {
    const initialState = {
        notes: [],
        editedNote: null,
        currentPage: 1,
        totalPages: 1,
    };

    const [state, dispatch] = useReducer(notesReducer, initialState);
    const { notes, editedNote, currentPage, totalPages } = state;

    useEffect(() => {
        fetchNotes(currentPage);
    }, [currentPage]);

    const fetchNotes = async (page) => {
        try {
            const data = await getNotes(page, pageSize);
            dispatch({ type: 'SET_NOTES', payload: data.notes });
            dispatch({ type: 'SET_TOTAL_PAGES', payload: data.totalPages });
        } catch (error) {
            console.error(error.message);
        }
    };

    const handleDeleteNote = async (noteId) => {
        try {
            await deleteNote(noteId);
            fetchNotes(currentPage);
        } catch (error) {
            console.error(error.message);
        }
    };

    const handleEditNote = async (noteId, newText) => {
        try {
            await editNote(noteId, newText);
            fetchNotes(currentPage);
            dispatch({ type: 'SET_NOTES', payload: data.notes });
        } catch (error) {
            console.error(error.message);
        }
    };

    const handlePinNote = async (noteId) => {
        try {
            await pinNote(noteId);
            fetchNotes(currentPage);
        } catch (error) {
            console.error(error.message);
        }
    };

    const handleUnpinNote = async (noteId) => {
        try {
            await unpinNote(noteId);
            fetchNotes(currentPage);
        } catch (error) {
            console.error(error.message);
        }
    };

    const contextValue = {
        notes,
        editedNote,
        currentPage,
        totalPages,
        fetchNotes,
        handleDeleteNote,
        handleEditNote,
        handlePinNote,
        handleUnpinNote,
        dispatch,
    };

    return <NotesContext.Provider value={contextValue}>{children}</NotesContext.Provider>;
}
