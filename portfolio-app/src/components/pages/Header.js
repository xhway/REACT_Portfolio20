import React, {Component} from "react";
import {Route, redirect,Routes, HashRouter} from "react-router-dom";

//import Navigation from "../Navigation";
import About from "./About";
import Portfolio from "../Portfolio";
import Contact from "./Contact";
import Resume from "./Resume";
import ProjectCards from "../Project";
class Header extends Component {
  render(){
    return(
      <HashRouter>
        <header>
       
        </header>

        <div className ="content">
          <Routes>
          <Route path="/about" element={About} />
          <Route path="/portfolio" element={Portfolio} />
          <Route path="/contact" element={Contact}/>
          <Route path="/resume" element={Resume}/>
          <Route path="/projects" element={ProjectCards}/>
          </Routes>
        </div>
      </HashRouter>
    )
  }
}

export default Header;