import AddButton from './AddButton';
import AddNote from './AddNote';
import Note from './Note';
import { NoteWrapper } from '../styles/Note';
import { useGlobalState } from '../context/noteContext';

const NoteList = () => {

    const { isAdding, notes } = useGlobalState();

    return (
        <NoteWrapper>
            {!isAdding && <AddButton />}
            {isAdding && <AddNote />}
            {notes.length ? (notes.reverse().map(note => (
                <Note key={note.id} note={note} />
            ))) : ''}
        </NoteWrapper>
    );

};

export default NoteList;
