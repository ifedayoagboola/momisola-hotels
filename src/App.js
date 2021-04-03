import React, { useState } from "react";

//global styling
import GlobalStyle from "./components/GlobalStyle";

//importing components
import Navbar from "./components/Navbar";
import Dropdown from "./components/Dropdown";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Forms from "./pages/Forms";

//Scroll top
import ScrollTop from "./components/ScrollTop";

//Framer Motion
import { AnimatePresence } from "framer-motion";

//react routing & switching
import { Route, Switch, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  console.log(location);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <ScrollTop />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/bookings">
            <Forms />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
