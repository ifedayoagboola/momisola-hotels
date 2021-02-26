import React from "react";

//global styling
import GlobalStyle from "./components/GlobalStyle";

//importing components
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";

//react routing & switching
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
