import React from 'react';
import Script from './Script';
import renderer from 'react-test-renderer';

it('renders correctly without any source code', () => {
  const tree = renderer
    .create(<Script />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with unquoted text as a child', () => {
  const tree = renderer
    .create(<Script>alert("Howdy")</Script>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});