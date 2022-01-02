import AddNote from './AddNote';
import Note from './Note';
import { NoteWrapper } from '../styles/Note';

const NoteList = () => {

    const nostLists = JSON.parse(localStorage.getItem('notes'));

    console.log({nostLists});

    return (
        <NoteWrapper>
            <AddNote />
            {nostLists.map(note => (
                <Note key={note.id} note={note.text} />
            ))}
        </NoteWrapper>
    );

};

export default NoteList;
