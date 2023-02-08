import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import './App.css';

function App() {
  return (
    <div className='container'>
      <h1>Jotto</h1>
      <Congrats success />
      <GuessedWords 
        guessedWords={[
          {
            guessedWord: 'woods',
            letterMatchCount: 3
          },
          {
            guessedWord: 'woods',
            letterMatchCount: 3
          },
          {
            guessedWord: 'woods',
            letterMatchCount: 3
          }
        ]} 
      />
    </div>
  );
}

export default App;
