import { FaEdit, FaTrash } from 'react-icons/fa';
import { NoteStyle, NoteText, ButtonWrapper } from '../styles/Note';
import { Button } from '../styles/Button';

const Note = ({ note }) => {
    return (
        <>
        {note && <NoteStyle className="card">
          <NoteText className="mb-4">{note}</NoteText>
          <ButtonWrapper>
              <Button bgColor="#4ebe7d" bgHover="#34b46a" padding="0.5em 1em" className="btn"><FaEdit /></Button>
              <Button bgColor="#d84214" bgHover="#c93b10" padding="0.5em 1em" className="btn ms-4"><FaTrash /></Button>
          </ButtonWrapper>
        </NoteStyle>}
        </>
    );
};

export default Note;
