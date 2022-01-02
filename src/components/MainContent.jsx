import SearchBar from './SearchBar';
import NoteList from './NoteList';
import { Main } from '../styles/Main';

const MainContent = () => {
    return (
        <Main>
            <SearchBar />
            <NoteList />
        </Main>
    );
};

export default MainContent;
