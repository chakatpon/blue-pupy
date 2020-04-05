import React from "react";
import { Link } from "react-router-dom";

class PageC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h4>Page C</h4>
        <Link to="/">Back to Blue Pupy</Link>
      </div>
    );
  }
}

export default PageC;
