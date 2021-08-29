import '@testing-library/jest-dom/extend-expect';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import ContactUs from "../../pages/ContactUs";


configure({ adapter: new Adapter() });

test('should render ContactUs page', () => {
    const wrapper = mount(
        <ContactUs />
    );

    const h1 = wrapper.find('h1')
    const button = wrapper.find('MainButton')

    expect(h1.text()).toBe('Свяжитесь с нами')
    expect(button.text()).toBe('Отправить')
})

test('matches snapshot', () => {
    const tree = renderer
        .create(
            <ContactUs />
        ).toJSON()
    expect(tree).toMatchSnapshot()
})