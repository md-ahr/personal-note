import { FaSearch } from 'react-icons/fa';
import { SearchWrapper, Input } from '../styles/Search';

const SearchInput = () => {
    return (
        <SearchWrapper>
            <Input type="search" className="form-control" placeholder="Search..." />
            <FaSearch className="icon-search" />
        </SearchWrapper>
    );
};

export default SearchInput;
