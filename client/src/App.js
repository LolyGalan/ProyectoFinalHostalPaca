import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import Portada from './components/Portada';
import Routers from './containers/Routers';
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="centrar">
        <Header/>
        <BrowserRouter>
        {/* poner aquí una barra de navegacion */}
            <Routers/>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;