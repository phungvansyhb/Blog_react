import React, { Component } from 'react'
import './App.css';
import Responsive from './Component/Response/responsive.js'
import Topmenu from './Component/Topmenu/Topmenu.js'
import Content from './Component/Content/Content.js'
import Footer from './Component/Footer/footer.js'
import TopFooter from './Component/Footer/topfooter.js'
import Mainmenu from './Component/Mainmenu/Mainmenu';
import Cource from './Component/Content/CourceItem';
import Contact from './Component/Content/Contact';
import Dieuhuong from './Router/Dieuhuong';
import {BrowserRouter as Router} from "react-router-dom";
import NewPageDetail from './Component/Content/NewPageDetail';


export default class App extends Component {
     
  render() {
    return (
      <Router>
          <div className="site-wrap">
            <Responsive/>
            <div className="header-top">
                <Topmenu/>          
            </div>
            <Mainmenu/>
            {/* <Content></Content> */}
            {/* <Cource></Cource> */}
            {/* <Contact></Contact> */}
            <Dieuhuong></Dieuhuong>
            {/* <NewPageDetail></NewPageDetail> */}
            <TopFooter/>
            <Footer/>
        </div>
      </Router>
    )
  }
}

