import React from "react";

//global styling
import GlobalStyle from "./components/GlobalStyle";

//importing components
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";

//react routing & switching
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
