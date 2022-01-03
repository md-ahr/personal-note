import { FaEdit, FaTrash } from 'react-icons/fa';
import EditNote from './EditNote';
import { NoteStyle, NoteText, ButtonWrapper, P } from '../styles/Note';
import { Button } from '../styles/Button';
import { useGlobalState, useGlobalDispatch } from '../context/noteContext';

const Note = ({ note }) => {

    const { notes, editedId } = useGlobalState();
    const dispatch = useGlobalDispatch();

    const handleNoteEdit = (id) => {
        dispatch({ type: 'edit-note', value: id });
    };

    const handleNoteDelete = (id) => {
        const deletedNote = notes.filter(note => note.id === id);
        dispatch({ type: 'delete-note', value: deletedNote });
    };

    return (
        <>
            {(editedId !== note.id) ? (<NoteStyle className="card">
                <NoteText className="mb-4">{note.text}</NoteText>
                <ButtonWrapper>
                    <Button bgColor="#4ebe7d" bgHover="#34b46a" padding="0.5em 1em" className="btn" onClick={() => handleNoteEdit(note.id)}>
                        <FaEdit />
                    </Button>
                    <Button bgColor="#d84214" bgHover="#c93b10" padding="0.5em 1em" className="btn ms-4" onClick={() => handleNoteDelete(note.id)}>
                        <FaTrash />
                    </Button>
                </ButtonWrapper>
                <P className="fw-bold">{note.createdAt}</P>
            </NoteStyle>) : <EditNote item={note} /> }
        </>
    );
};

export default Note;
