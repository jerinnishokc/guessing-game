import GuessedWords from "./GuessedWords";
import { shallow } from "enzyme";
import { checkProps, findTestByAttr } from "../test/testUtils";

const defaultProps = {
  guessedWords: [
    {
      guessedWord: 'train',
      letterMatchCount: 1
    }
  ]
};
/**
 * Factory function to create a ShallowWrapper for the GuessedWords Component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props) => {
  const setupProps = {...defaultProps, ...props}
  return shallow(<GuessedWords {...setupProps} />);
};

test('renders without error', () => {
  checkProps(GuessedWords, defaultProps);
});

describe('when there are no guessed words', () => {
  test('renders without error', () => {
    const wrapper = setup();
    const component = findTestByAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });
  test('renders guessing instructions when there are no guessed words', () => {
    const localProps = {
      guessedWords: []
    };
    const wrapper = setup(localProps);
    const guessedWords = findTestByAttr(wrapper, 'guessing-instructions');
    expect(guessedWords.text().length).not.toBe(0);
  });
});

describe('when there are some guessed words', () => {
  const localProps = {
    guessedWords: [
      {
        guessedWord: 'trees',
        letterMatchCount: 1
      },
      {
        guessedWord: 'woods',
        letterMatchCount: 3
      },
      {
        guessedWord: 'plants',
        letterMatchCount: 3
      }
    ]
  };

  let wrapper;
  beforeEach(() => {
    wrapper = setup(localProps);
  });

  test('renders without error', () => {
    const component = findTestByAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });
  test('does not display the instructions if there are guessed words', () => {
    const guessedWords = findTestByAttr(wrapper, 'guessing-instructions');
    expect(guessedWords.length).toBe(0);
  });
  test('displays the guessed words section', () => {
    const guessedWords = findTestByAttr(wrapper, 'guessed-words');
    expect(guessedWords.length).toBe(1);
  });
  test('renders the correct number of guessed words', () => {
    const guessedWords = findTestByAttr(wrapper, 'guessed-word');
    expect(guessedWords.length).toBe(localProps.guessedWords.length);
  });
});

