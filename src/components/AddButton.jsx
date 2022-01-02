import { FaPlus } from 'react-icons/fa';
import { Button } from '../styles/Button';
import { AddNote } from '../styles/Note';

const AddButton = () => {
    return (
        <AddNote>
            <Button bgColor="#4ebe7d" bgHover="#34b46a" padding="0.75em 1.25em" className="btn"><FaPlus /></Button>
        </AddNote>
    );
};

export default AddButton;
