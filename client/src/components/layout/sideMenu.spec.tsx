import renderer from 'react-test-renderer';
import SideMenu from './sideMenu';

describe('SideMenu snapshot test', () => {
  const testData = {
    title: 'Main Categories',
    items: [
      {
        title: 'Category 1',
        imageUrl: '/someImagePath1.png',
        id: '111111',
      },
      {
        title: 'Category 2',
        imageUrl: '/someImagePath2.png',
        id: '222222',
      },
    ],
    isOpen: false,
    onClose: () => {},
    onItemClick: () => {},
  };
  const component = renderer.create(<SideMenu {...testData} />);

  it('render SideMenu with required props', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
