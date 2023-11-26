import renderer from 'react-test-renderer';
import AppFooter from './footer';

describe('Footer snapshot test', () => {
  const testData = {
    mainLabel: 'Home24',
    description: 'Some description',
  };
  const component = renderer.create(<AppFooter {...testData} />);

  it('render Footer with required props', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
