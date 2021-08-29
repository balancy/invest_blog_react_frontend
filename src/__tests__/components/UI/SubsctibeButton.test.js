import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import SubscribeButton from '../../../components/UI/buttons/SubscribeButton';


test('should render SubscribeButton component', () => {
    render(
        <SubscribeButton
            data-testid='subButton-1'
            name='firstButton'
            disabled
        >
            Button text
        </SubscribeButton>
    )
    const subscribeButton = screen.getByTestId('subButton-1')

    expect(subscribeButton).toBeDisabled()
    expect(subscribeButton).toBeInstanceOf(HTMLButtonElement)
    expect(subscribeButton).toBeInTheDocument()
    expect(subscribeButton).toContainHTML('button')
    expect(subscribeButton).toHaveAttribute('name')
    expect(subscribeButton).toHaveClass('SubscribeButton')
    expect(subscribeButton).toHaveTextContent('Button text')
})


test('matches snapshot', () => {
    const tree = renderer
        .create(
            <SubscribeButton
                data-testid='subButton-1'
                name='firstButton'
                disabled
            >
                Button text
            </SubscribeButton>
        ).toJSON()
    expect(tree).toMatchSnapshot()
})