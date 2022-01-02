import { createGlobalStyle  } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
    body {
        height: 100%;
        color: #232323;
        font-family: 'Poppins', sans-serif!important;
    }
`;

export default GlobalStyle;
