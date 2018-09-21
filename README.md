# react-inline-script

Inject arbitrary javascript and inline ```<script>``` tags into your DOM and React app without any hassles.

## Usage

```javascript
import React from 'react'
import Script from "react-inline-script"

export default class PageLayout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="some-content">
        <Script>alert("hi there!")</Script>
      </div>)
    }
}
```

For multiline scripts, just wrap your contents in ```{` /* Your script */ `}```:

```javascript
import React from 'react'
import Script from "react-inline-script"

export default class PageLayout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="some-content">
        <Script>
        	{`
        		const test = true
        		if (test)
        			alert("howdy!")
        	`}
        </Script>
      </div>)
    }
}
```