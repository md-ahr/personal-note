import { FaSync } from 'react-icons/fa';
import { useState } from 'react';
import { NoteStyle, Textarea, P, ButtonWrapper } from '../styles/Note';
import { Button } from '../styles/Button';
import { useGlobalDispatch } from '../context/noteContext';

const AddNote = () => {

    const [note, setNote] = useState({
        id: '',
        text: '',
        createdAt: new Date().toLocaleDateString(undefined, {year: 'numeric', month: 'long', day: 'numeric'})
    });

    const [count, setCount] = useState(10);

    const dispatch = useGlobalDispatch();

    const handleChange = (e) => {
        const randomId = Math.floor(Math.random() * 1000000000000000);
        setNote({...note, id: randomId, text: e.target.value});
        setCount(10 - e.target.value.length);
    };


    const handleSave = () => {
        dispatch({ type: 'add-note', value: note });
        dispatch({ type: 'trigger-add', value: false });
    };

    const handleReset = () => {
        dispatch({ type: 'trigger-add', value: false });
    };

    return (
        <NoteStyle className="card">
            <Textarea name="note" rows="6" className="form-control" value={note.text} onChange={handleChange} placeholder="Type your note here..." />
            <P>{count > 0 && `${count} characters remain`}</P>
            <ButtonWrapper className="d-flex justify-content-end mt-2">
                <Button bgColor="#d8a129" bgHover="#c4932b" padding="0.5em 1em" className="btn" onClick={handleReset}><FaSync /></Button>
                <Button bgColor="#4ebe7d" bgHover="#4cb678" padding="0.5em 1em" className="btn ms-3" onClick={handleSave} disabled={count > 0}>Save</Button>
            </ButtonWrapper>
        </NoteStyle>
    );

};

export default AddNote;
