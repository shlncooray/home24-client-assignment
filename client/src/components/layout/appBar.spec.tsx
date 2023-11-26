import renderer from 'react-test-renderer';
import Home24AppBar from './appBar';

describe('AppBar snapshot test', () => {
  const testData = {
    cartItems: 3,
    loginButtonLabel: 'Login',
    loginButtonPath: '/login',
    appBarMenuAction: () => {},
    navigateToCart: () => {},
  };
  const component = renderer.create(<Home24AppBar {...testData} />);

  it('render AppBar with required props', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
