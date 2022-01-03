export const initialState = {
    theme: 'light',
    isAdding: false,
    editedId: '',
    searchText: '',
    notes: JSON.parse(localStorage.getItem('notes')) || []
};

export const reducer = (state, action) => {
    let items = [];
    switch(action.type) {
        case 'theme':
            return {...state, theme: action.mode};
        case 'trigger-add':
            return {...state, isAdding: action.value};
        case 'add-note':
            items.push(action.value);
            localStorage.setItem('notes', JSON.stringify([...state.notes, ...items]));
            return {...state, notes: [...state.notes, ...items]};
        case 'edit-note':
            return {...state, editedId: action.value };
        case 'save-note':
            items = state.notes.map(item => {
                if (item.id === action.value.id) {
                    return { ...item, text: action.value.text };
                }
                return item;
            });
            localStorage.setItem('notes', JSON.stringify([...items]));
            return {...state, notes: [...items]};
        case 'delete-note':
            items = state.notes.filter(note => note.id !== action.value[0].id);
            localStorage.setItem('notes', JSON.stringify([...items]));
            return {...state, notes: [...items]};
        case 'search-note':
            items = state.notes.filter(item => item.text.toLowerCase().includes(action.value.toLowerCase()));
            return {...state, searchText: action.value, notes: action.value !== '' ? [...items] : JSON.parse(localStorage.getItem('notes'))};
        default:
            return state;
    }
};
