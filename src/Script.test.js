import React from 'react';
import Script from './Script';
import renderer from 'react-test-renderer';

it('renders correctly without any source code', () => {
  const tree = renderer
    .create(<Script />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with a src property and without any source code', () => {
  const tree = renderer
    .create(<Script src="https://localhost/some-script.js" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with unquoted singleline text as a child', () => {
  const tree = renderer
    .create(<Script>alert("Howdy")</Script>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with quoted multiline text as a child', () => {
  const tree = renderer
    .create(
	<Script>
		{`
			alert("Howdy")
			console.log("how is it going")
		`}
	</Script>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with complex, quoted multiline text as a child', () => {
  const tree = renderer
    .create(
	<Script>
		{`
			const test = true
			if (true)
				alert("Howdy")
		`}
	</Script>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});