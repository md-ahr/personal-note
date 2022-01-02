import styled from 'styled-components';

export const TopBarWrapper = styled.div`
    width: 50%;
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SearchWrapper = styled.div`
    flex-basis: 78%;
    position: relative;

    .icon-search {
        opacity: 0.6;
        position: absolute;
        top: 50%;
        right: 4%;
        transform: translateY(-50%);
    }
`;

export const Input = styled.input`
    padding: 0.75em 1.25em;

    :focus {
        border-color: #424653;
        box-shadow: none;
    }
`;