import React from "react";
import { Link } from "react-router-dom";

class PageA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h4>Page A</h4>
        <Link to="/">Back to Blue Pupy</Link>
      </div>
    );
  }
}

export default PageA;
