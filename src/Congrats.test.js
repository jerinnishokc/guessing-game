import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Congrats from './Congrats';
import { findTestByAttr } from '../test/testUtils';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {
  return shallow(<Congrats {...props} />);
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findTestByAttr(wrapper, 'component-congrats');
  console.log(component);
  console.log(component.length);
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