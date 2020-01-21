import React from 'react';
import './App.css';
import Sidebar from './Component/sidebar';
import Header from './Component/header';
import Form from './Component/Formkhoahoc';
import Footer from './Component/footer';
import Table from './Component/Table';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dieuhuong from './Router/Dieuhuong';

function App() {
  return (
    <Router>
      <div id="wrapper">
          <Sidebar/>
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <Header/>
                <div className="container-fluid" id="container-wrapper">                
                  <Dieuhuong></Dieuhuong>
                </div>
               
            </div>
            <Footer/>
          </div>
      </div>
    </Router>
  );
}

export default App;
