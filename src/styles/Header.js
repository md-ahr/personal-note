import styled from 'styled-components';

export const HeaderSection = styled.header`
    margin-top: 2.25em;
    padding-bottom: 1.25em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #c2c2c2;
`;

export const H1 = styled.h1`
    margin-bottom: 0;
    font-size: 1.75rem;
    color: ${props => props.theme.color};
`;

export const ToggleWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const Label = styled.label`
    margin-right: 3.25em;
    padding-top: 0.25em;
`;

export const Input = styled.input`
    width: 60px!important;
    height: 28px!important;
    cursor: pointer;

    :checked {
        background-color: #424653;
        border-color: #424653;
    }

    :focus {
        box-shadow: none;
    }
`;
