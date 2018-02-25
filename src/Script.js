import { Component } from "react";

export default class Script extends Component {
  render() {
    let src = this.props.children || "";
    let props = {...this.props, children: null, dangerouslySetInnerHTML: {__html: src} };
    return <script {...props} /> 
  }
}