import styled from 'styled-components';

export const TopBarWrapper = styled.div`
    width: 100%;
    margin-inline: auto;

    @media screen and (min-width: 768px) {
        width: 75%;
    }

    @media screen and (min-width: 992px) {
        width: 50%;
    }
`;

export const SearchWrapper = styled.div`
    flex-basis: 78%;
    position: relative;

    .icon-search {
        color: #232323;
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