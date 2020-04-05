import React from "react";
import { Link } from "react-router-dom";

class BluePupy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h4>Hello Blue Pupy</h4>
        <div>
          <Link to="/pageA">Go to Page A</Link>
        </div>
        <div>
          <Link to="/pageB">Go to Page B</Link>
        </div>
        <div>
          <Link to="/pageC">Go to Page C</Link>
        </div>
      </div>
    );
  }
}

export default BluePupy;
