import SearchInput from './SearchInput';
import AddButton from './AddButton';
import { TopBarWrapper } from '../styles/Search';

const SearchBar = () => {
    return (
        <TopBarWrapper>
            <SearchInput />
            <AddButton />
        </TopBarWrapper>
    );
};

export default SearchBar;
