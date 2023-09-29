export const notesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_NOTES':
            return { ...state, notes: action.payload };
        case 'SET_PINNED_NOTES':
            return { ...state, pinnedNotes: action.payload };
        case 'SET_CURRENT_PAGE':
            return { ...state, currentPage: action.payload };
        case 'SET_TOTAL_PAGES':
            return { ...state, totalPages: action.payload };
        default:
            return state;
    }
};
