import axios from 'axios';

const API_BASE_URL = 'https://note-app-assignment.onrender.com/notes';

// Function to fetch notes with pagination
export const getNotes = async (page, pageSize) => {
    try {
        const response = await axios.get(`${API_BASE_URL}?page=${page}&limit=${pageSize}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching notes:', error);
    }
};


// Function to fetch notes with pagination
export const getPinnedNotes = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/pinned`);
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
export const editNote = async (noteId, data) => {
    try {
        await axios.patch(`${API_BASE_URL}/${noteId}`, data);
    } catch (error) {
        throw new Error('Error editing note:', error);
    }
};

//Function to create a note
export const createNote = async (data) => {
    try{
        await axios.post(`${API_BASE_URL}`, data);
    } catch (error) {
        throw new Error('Error creating note:', error);
    }
}

// Function to pin a note
export const pinNote = async (noteId) => {
    try {
        await axios.patch(`${API_BASE_URL}/${noteId}/togglePin`);
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
