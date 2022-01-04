import { useReducer } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import MainContent from './components/MainContent';
import GlobalStyle from './styles/GlobalStyle';
import { Container } from './styles/Main';
import { reducer, initialState } from './reducer/noteReducer';
import { NoteContextState, NoteContextDispatch } from './context/noteContext';
import { lightTheme, darkTheme } from './styles/Theme';


function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <NoteContextState.Provider value={state}>
      <NoteContextDispatch.Provider value={dispatch}>
        <ThemeProvider theme={state.theme === 'dark' ? darkTheme : lightTheme}>
          <GlobalStyle />
          <Container className="container">
            <Header />
            <MainContent />
          </Container>
        </ThemeProvider>
      </NoteContextDispatch.Provider>
    </NoteContextState.Provider>
  );

}

export default App;
