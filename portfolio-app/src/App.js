import React from 'react';
import PortfolioContainer from './components/PortfolioContainer';
import Header from './components/pages/Header';
import Footer from './components/pages/Footer';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return(
    <div>
      <Header/>
      <PortfolioContainer />
      <Footer/>
    </div>
  );
}

export default App;
