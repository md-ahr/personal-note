import { FaSearch } from 'react-icons/fa';
import { useGlobalDispatch } from '../context/noteContext';
import { SearchWrapper, Input } from '../styles/Search';

const SearchInput = () => {

    const dispatch = useGlobalDispatch();

    const handleSearch = (e) => {
        dispatch({ type: 'search-note', value: e.target.value})
    };

    return (
        <SearchWrapper>
            <Input type="search" className="form-control" placeholder="Search..." onChange={handleSearch} />
            <FaSearch className="icon-search" />
        </SearchWrapper>
    );

};

export default SearchInput;
