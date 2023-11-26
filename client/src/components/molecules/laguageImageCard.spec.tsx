import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import LanguageSwitcher from './languageSwitcher';

const languages = [
  { value: 'en', label: 'English' },
  { value: 'de', label: 'German' },
];

jest.mock('react-i18next', () => ({
  ...jest.requireActual('react-i18next'),
  useTranslation: () => ({
    t: (key: String) => key,
    i18n: { language: 'en', changeLanguage: jest.fn() },
  }),
}));

test('renders LanguageSwitcher with default language', () => {
  const component = renderer.create(<LanguageSwitcher languages={languages} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
