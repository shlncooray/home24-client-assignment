import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import SimpleImageCard from './simpleImageCard';

describe('SimpleImageCard Snapshot Tests', () => {
  const testData = {
    image: 'https://example.com/image.jpg',
    title: 'Sample Title',
    onClick: () => {},
  };
  const testData2 = {
    image: 'https://example.com/image2.jpg',
    title: 'Sample Title 2',
    onClick: () => {},
  };
  let component = renderer.create(<SimpleImageCard {...testData} />);

  it('renders SimpleImageCard with required props', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders SimpleImageCard with required other props', () => {
    component = renderer.create(<SimpleImageCard {...testData2} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should call onPress when pressed', () => {
    const mockOnClick = jest.fn();
    render(<SimpleImageCard {...testData} onClick={mockOnClick} />);
    fireEvent.click(screen.getByTestId(`simple-card-id${testData.title}`));
    expect(mockOnClick).toHaveBeenCalled();
  });
});
