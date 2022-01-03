import styled from 'styled-components';

export const NoteWrapper = styled.div`
    margin-top: 2.5em;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    gap: 2.5em;
`;

export const NoteStyle = styled.div`
    padding: 0.9375em;
    height: 250px;
    flex-basis: 100%;
    background-color: ${props => props.theme.cardBackgroundColor};
    border: 0;
    border-radius: 0.25rem;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);

    > ::-webkit-scrollbar {
        width: 5px;
        background-color: ${props => props.theme.scrollbarBackgroundColor};
        border-radius: 0.25rem;
    }

    > ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.scrollbarThumbBackgroundColor};
    }

    @media screen and (min-width: 600px) {
        flex-basis: 46%;
    }

    @media screen and (min-width: 768px) {
        flex-basis: 47%;
    }

    @media screen and (min-width: 992px) {
        flex-basis: 30.35%;
    }

    @media screen and (min-width: 1200px) {
        flex-basis: 30.75%;
    }

    @media screen and (min-width: 1400px) {
        flex-basis: 31.25%;
    }
`;

export const CardAddNote = styled.button`
    height: 250px;
    flex-basis: 100%;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.cardBackgroundColor};
    border-radius: 0.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);

    @media screen and (min-width: 600px) {
        flex-basis: 46%;
    }

    @media screen and (min-width: 768px) {
        flex-basis: 47%;
    }

    @media screen and (min-width: 992px) {
        flex-basis: 30.35%;
    }

    @media screen and (min-width: 1200px) {
        flex-basis: 30.75%;
    }

    @media screen and (min-width: 1400px) {
        flex-basis: 31.25%;
    }
`;

export const Textarea = styled.textarea`
    padding: 1em;
    border: 0;
    font-size: 0.875rem;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.focusBackgroundColor};
    resize: none;

    ::placeholder {
        color: ${props => props.theme.placeholderBackgroundColor};
    }

    :focus {
        color: ${props => props.theme.color};
        background-color: ${props => props.theme.focusBackgroundColor};
        box-shadow: none;
    }
`;

export const P = styled.p`
    margin: 0.5em 0 0 0;
    color: ${props => props.theme.color};
    font-size: 0.8125rem;
`;

export const NoteText = styled.div`
    height: 190px;
    padding: 0 0.5em;
    color: ${props => props.theme.color};
    font-size: 0.9375rem;
    text-align: center;
    overflow: hidden;
    overflow-y: scroll;
`;

export const ButtonWrapper = styled.div`
    margin-left: auto;
`;
