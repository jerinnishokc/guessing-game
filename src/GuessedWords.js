import PropTypes from 'proptypes';

/**
 * Functional react component to display guessed words.
 * @function
 * @param {object} props - React props. 
 * @returns 
 */
const GuessedWords = ({ guessedWords }) => {
  return (
    <div data-test="component-guessed-words">
      {
        guessedWords.length === 0 && (
          <div data-test="guessing-instructions">
            Try to guess the secret word!
          </div>
        )
      }
      {
        guessedWords.length > 0 && (
          <div data-test="guessed-words">
            <h2>Guessed Words</h2>
            <table className='table table-sm table-striped'>
              <thead className='table-dark'>
                <tr>
                  <th>Guessed Word</th>
                  <th>Letter Match Count</th>
                </tr>
              </thead>
              <tbody>
                {
                  guessedWords.map((x, i) => (
                    <tr key={i} data-test="guessed-word">
                      <td>{x.guessedWord}</td>
                      <td>{x.letterMatchCount}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        )
      }
    </div>
  );
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default GuessedWords;