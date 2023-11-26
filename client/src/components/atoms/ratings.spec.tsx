import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import Ratings from './ratings';

describe('Ratings snapshot test', () => {
  const testData = {
    count: 0,
    rate: 4.7,
  };
  const component = renderer.create(<Ratings {...testData} />);

  it('render Ratings with required props', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render text value in the component', () => {
    render(<Ratings {...testData} />);
    expect(
      screen.getByTestId(`rating-text-${testData.count}-${testData.rate}`),
    ).toBeInTheDocument();
  });

  it('should not match text value of Ratings with required props', () => {
    render(<Ratings {...testData} />);
    expect(screen.queryByTestId('rating-text-')).not.toBeInTheDocument();
  });

  it('should call onClick when pressed', () => {
    const mockOnClick = jest.fn();
    render(<Ratings {...testData} onClick={mockOnClick} />);
    fireEvent.click(screen.getByTestId(`rating-comp-${testData.count}-${testData.rate}`));
    expect(mockOnClick).toHaveBeenCalled();
  });
});
