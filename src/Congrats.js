import PropTypes from 'proptypes';

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props. 
 * @returns 
 */
const Congrats = ({ success }) => {
  return (
    <div data-test="component-congrats" className='alert alert-success'>
      {
        success && (
          <span data-test="congrats-message">
            Congratulations! You guessed the word!
          </span>
        )
      }
    </div>
  );
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};

export default Congrats;