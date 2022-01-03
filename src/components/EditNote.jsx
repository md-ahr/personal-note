import { FaSync } from 'react-icons/fa';
import { useState } from 'react';
import { NoteStyle, Textarea, P, ButtonWrapper } from '../styles/Note';
import { Button } from '../styles/Button';
import { useGlobalDispatch } from '../context/noteContext';

const EditNote = ({ item }) => {

    const [note, setNote] = useState({
        id: item.id,
        text: item.text,
        isEditing: false
    });

    const [count, setCount] = useState(10);

    const dispatch = useGlobalDispatch();

    const handleChange = (e) => {
        setNote({...note, id: note.id, text: e.target.value, isEditing: true});
        setCount(10 - e.target.value.length);
    };

    const handleUpdate = () => {
        dispatch({ type: 'edit-note', value: '' });
        dispatch({ type: 'save-note', value: { id: note.id, text: note.text } });
    };

    const handleReset = () => {
        dispatch({ type: 'edit-note', value: '' });
    };

    return (
        <NoteStyle className="card">
            <Textarea name="note" rows="6" className="form-control" value={note.text} onChange={handleChange} placeholder="Type your note here..." />
            {note.isEditing && <P>{count > 0 && `${count} characters remain`}</P>}
            <ButtonWrapper className="d-flex justify-content-end mt-3">
                <Button bgColor="#d8a129" bgHover="#c4932b" padding="0.5em 1em" className="btn" onClick={handleReset}><FaSync /></Button>
                <Button bgColor="#4ebe7d" bgHover="#4cb678" padding="0.5em 1em" className="btn ms-3" onClick={handleUpdate} disabled={count > 0}>Update</Button>
            </ButtonWrapper>
        </NoteStyle>
    );

};

export default EditNote;
