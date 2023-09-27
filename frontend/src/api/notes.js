import axios from 'axios';

const API_BASE_URL = 'https://note-app-assignment.onrender.com/notes';

// Function to fetch notes with pagination
export const getNotes = async (page, pageSize) => {
    try {
        const response = await axios.get(`${API_BASE_URL}?page=${page}&pageSize=${pageSize}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching notes:', error);
    }
};

// Function to delete a note
export const deleteNote = async (noteId) => {
    try {
        await axios.delete(`${API_BASE_URL}/${noteId}`);
    } catch (error) {
        throw new Error('Error deleting note:', error);
    }
};

// Function to edit a note
export const editNote = async (noteId, newText) => {
    try {
        await axios.put(`${API_BASE_URL}/${noteId}`, { text: newText });
    } catch (error) {
        throw new Error('Error editing note:', error);
    }
};

// Function to pin a note
export const pinNote = async (noteId) => {
    try {
        await axios.put(`${API_BASE_URL}/${noteId}/pin`);
    } catch (error) {
        throw new Error('Error pinning note:', error);
    }
};

// Function to unpin a note
export const unpinNote = async (noteId) => {
    try {
        await axios.put(`${API_BASE_URL}/${noteId}/unpin`);
    } catch (error) {
        throw new Error('Error unpinning note:', error);
    }
};
