import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import MainInput from '../../../components/UI/input/MainInput';


test('should render MainInput component', () => {
  render(
    <MainInput
      data-testid='mainInput-1'
      placeholder='test'
      defaultValue='5'
    />
  )
  const mainInput = screen.getByTestId('mainInput-1')

  expect(mainInput).toBeEnabled()
  expect(mainInput).toBeInstanceOf(HTMLInputElement)
  expect(mainInput).toBeInTheDocument()
  expect(mainInput).toContainHTML('input')
  expect(mainInput).toHaveAttribute('placeholder')
  expect(mainInput).toHaveClass('MainInput')
  expect(mainInput).toHaveValue('5')
})


test('matches snapshot', () => {
  const tree = renderer
    .create(
      <MainInput
        placeholder='test'
        defaultValue='5'
      />
    ).toJSON()
  expect(tree).toMatchSnapshot()
})