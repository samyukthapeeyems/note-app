import axios from 'axios';

const API_BASE_URL = 'https://note-app-assignment.onrender.com/api/notes';

export const getNotes = async (page) => {
    try {
        const response = await axios.get(`${API_BASE_URL}?page=${page}&pageSize=${pageSize}`);
     
    } catch (error) {
        console.error('Error fetching notes:', error);
    }
};

export const deleteNote = async (noteId) => {
    try {
        await axios.delete(`${API_BASE_URL}/${noteId}`);
        // Refresh the list of notes after deletion
    } catch (error) {
        console.error('Error deleting note:', error);
    }
};

export const editNote = async (noteId, newText) => {
    try {
        await axios.put(`${API_BASE_URL}/${noteId}`, { text: newText });
        // Refresh the list of notes after editing
 
    } catch (error) {
        console.error('Error editing note:', error);
    }
};

export const pinNote = async (noteId) => {
    try {
        await axios.put(`${API_BASE_URL}/${noteId}/pin`);
        // Refresh the list of notes after pinning
    } catch (error) {
        console.error('Error pinning note:', error);
    }
};

export const unpinNote = async (noteId) => {
    try {
        await axios.put(`${API_BASE_URL}/${noteId}/unpin`);
        // Refresh the list of notes after unpinning
    } catch (error) {
        console.error('Error unpinning note:', error);
    }
};