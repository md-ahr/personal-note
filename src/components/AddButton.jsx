import { FaPlus } from 'react-icons/fa';
import { CardAddNote } from '../styles/Note';
import { useGlobalDispatch } from '../context/noteContext';

const AddButton = () => {

    const dispatch = useGlobalDispatch();

    const handleAddNoteButton = () => {
        dispatch({ type: 'trigger-add', value: true });
    };

    return (
        <CardAddNote className="card display-6" onClick={handleAddNoteButton}>
            <FaPlus className="mb-3"/> Add Note
        </CardAddNote>
    );
};

export default AddButton;
