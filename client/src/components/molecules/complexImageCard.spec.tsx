import renderer from 'react-test-renderer';
import ComplexImageCard from './complexImageCard';

describe('ComplexImageCard snapshot test', () => {
  const testDataRequired = {
    image: '/imagePath.png',
    mainLabel: 'Product Name',
    secondaryLabel: 'Product Varient',
    priceLabel: '$450.00',
    mainActionLabel: 'Add to Cart',
    mainAction: () => {},
  };

  const testDataAll = {
    image: '/imagePath.png',
    mainLabel: 'Product Name',
    secondaryLabel: 'Product Varient',
    priceLabel: '$450.00',
    rating: {
      average: 4.0,
      count: 100,
    },
    mainActionLabel: 'Add to Cart',
    onClick: () => {},
    mainAction: () => {},
  };
  let component = renderer.create(<ComplexImageCard {...testDataRequired} />);

  it('render ComplexImageCard with required props', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('render ComplexImageCard with all props', () => {
    component = renderer.create(<ComplexImageCard {...testDataAll} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
