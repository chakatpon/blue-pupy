import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PageA from "./pages/PageA";
import PageB from "./pages/PageB";
import PageC from "./pages/PageC";
import BluePupy from "./pages/BluePupy";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/pageA" component={PageA}></Route>
            <Route path="/pageB" component={PageB}></Route>
            <Route path="/pageC" component={PageC}></Route>
            <Route path="/" component={BluePupy}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
