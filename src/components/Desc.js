import React from "react";

class Desc extends React.Component {
  render() {
    let title = this.props.title;
    let desc = this.props.desc;
    return (
      <article>
        <p>{title}</p>
        <p>{desc}</p>
      </article>
    );
  }
}

export default Desc;
