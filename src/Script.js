import React, { Component } from "react";

export default class Script extends Component {
	render() {
		const src =
			this.props.children || this.props.body || "";
		const props = {
			...this.props,
			children: null,
			dangerouslySetInnerHTML: { __html: src }
		};
		return <script {...props} />;
	}
}
