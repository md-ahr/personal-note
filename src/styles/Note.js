import styled from 'styled-components';

export const AddNote = styled.div`
    margin-left: 1.75em;
    flex-basis: 22%;
`;

export const NoteWrapper = styled.div`
    margin-top: 2.5em;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 2.5em;
`;

export const NoteStyle = styled.div`
    padding: 0.9375em;
    height: 250px;
    flex-basis: 31%;
    background-color: #424653;
    border-radius: 0.25em;

    > ::-webkit-scrollbar {
        width: 5px;
        background-color: #303446;
        border-radius: 0.25em;
    }

    > ::-webkit-scrollbar-thumb {
        background-color: #60688b;
    }
`;

export const Textarea = styled.textarea`
    padding: 1em;
    border: 0;
    font-size: 0.875rem;
    color: #fff;
    background-color: #697086;
    resize: none;

    ::placeholder {
        color: #cfcfcf;
    }

    :focus {
        color: #fff;
        background-color: #697086;
        box-shadow: none;
    }
`;

export const P = styled.p`
    margin: 0.5em 0 0 0;
    color: #fff;
    font-size: 0.8125rem;
`;

export const NoteText = styled.div`
    height: 190px;
    padding: 0 0.5em;
    color: #fff;
    font-size: 0.9375rem;
    text-align: center;
    overflow: hidden;
    overflow-y: scroll;
`;

export const ButtonWrapper = styled.div`
    margin-left: auto;
`;
