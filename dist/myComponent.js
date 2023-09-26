import React from 'react';
import 'styles.css';
const myComponent = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "styled-component"
  }, props.children);
};
export default myComponent;