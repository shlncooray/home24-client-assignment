import { getMainCategory } from './product.helper';

describe('Test - Product related helper functions', () => {
  const testData = {
    imageUrl:
      'https://images.prismic.io/home24-production/95e21c70-4ded-4b42-9cc2-fd9224fd1cc5_hp-nav-sofas.jpg',
    title: 'Furniture',
    id: '156126',
  };
  it('should equal to founded MainCategory', () => {
    const actual = getMainCategory('Furniture');
    expect(actual).toEqual(testData);
  });
});
