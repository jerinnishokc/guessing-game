import { shallow } from 'enzyme';
import Congrats from './Congrats';
import { checkProps, findTestByAttr } from '../test/testUtils';

const defaultProps = {
  success: false
};

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {
  const setupProps = {...defaultProps, ...props};
  return shallow(<Congrats {...setupProps} />);
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findTestByAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});

test('renders empty if `success` prop is false', () => {
  const wrapper = setup({ success: false });
  const component = findTestByAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});

test('renders non-empty congrats text if `success prop is true`', () => {
  const wrapper = setup({ success: true });
  const message = findTestByAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
});

test('does not throw warning with expected props', () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});