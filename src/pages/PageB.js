import React from "react";
import { Link } from "react-router-dom";

class PageB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h4>Page B</h4>
        <Link to="/">Back to Blue Pupy</Link>
      </div>
    );
  }
}

export default PageB;
