import React from 'react';
import Script from './Script';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Script />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});