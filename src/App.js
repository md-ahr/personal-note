import { useReducer } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import GlobalStyle from './styles/GlobalStyle';
import reducer from './reducer/noteReducer';
import { NoteContextState, NoteContextDispatch, initialState } from './context/noteContext';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <NoteContextState.Provider value={state}>
      <NoteContextDispatch.Provider value={dispatch}>
        <GlobalStyle />
        <div className="container">
          <Header />
          <MainContent />
        </div>
      </NoteContextDispatch.Provider>
    </NoteContextState.Provider>
  );

}

export default App;
