import { useState } from 'react';
import { NoteStyle, Textarea, P } from '../styles/Note';
import { Button } from '../styles/Button';
import { useGlobalDispatch } from '../context/noteContext';

const AddNote = () => {

    const [note, setNote] = useState({
        id: '',
        text: ''
    });

    const dispatch = useGlobalDispatch();

    const handleSave = () => {
        const randomId = Math.floor(Math.random() * 10000);
        dispatch({ type: 'add-note', value: { id: randomId, text: note } });
    }

    return (
        <NoteStyle className="card">
            <Textarea name="note" rows="6" className="form-control" value={note.text} onChange={(e) => setNote(e.target.value)} placeholder="Type your note here..." />
            <P>200 characters remain</P>
            <Button bgColor="#4ebe7d" bgHover="#34b46a" padding="0.5em 1em" className="btn" onClick={handleSave}>Save</Button>
        </NoteStyle>
    );

};

export default AddNote;
