const reducer = (state, action) => {
    switch(action.type) {
        case 'theme':
            return {...state, theme: action.mode};
        case 'add-note':
            if (!localStorage.getItem('notes') || !localStorage.getItem('notes')[0].note) {
                localStorage.setItem('notes', JSON.stringify([...state.notes, action.value]));
            }
            return {...state, notes: [...state.notes, action.value]};
        default:
            return state;
    }
};

export default reducer;