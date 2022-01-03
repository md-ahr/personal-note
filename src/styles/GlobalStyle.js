import { createGlobalStyle  } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
    body {
        min-height: 100%;
        color: ${props => props.theme.color};
        background-color: ${props => props.theme.backgroundColor};
        font-family: 'Poppins', sans-serif!important;
    }
`;

export default GlobalStyle;
