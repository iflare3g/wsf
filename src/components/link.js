import React from "react";

class Link extends React.Component {
  render() {
    return (
      <li class="wsf-grey">
        <a href={props.href}>{props.value}</a>
      </li>
    );
  }
}

export default Link;
