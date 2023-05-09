import React, {Component} from "react";
import {Route, Redirect, HashRouter} from "react-router-dom";
import Navigation from "../Navigation";
import About from "../pages/About";
import Portfolio from "../Portfolio";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";

class Header extends Component {
  render(){
    return(
      <HashRouter>
        <header>
          <Navigation />
        </header>

        <div className ="content">
          <Route exact path="/" render={() => <Redirect to="/about" />} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact}/>
          <Route path="/resume" component={Resume}/>
        </div>
      </HashRouter>
    )
  }
}

export default Header;