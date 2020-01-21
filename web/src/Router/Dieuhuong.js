import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route ,useParams} from "react-router-dom";

import Content from '../Component/Content/Content';
import Cource from '../Component/Content/CourceItem';
import Contact from '../Component/Content/Contact';
import NewPageDetail from '../Component/Content/NewPageDetail';
import CourceDetail from '../Component/Content/CourceDetail';
import ProjectDetail from '../Component/Content/ProjectDetail';

export default class Dieuhuong extends Component {
    render() {
        return (

            <Switch>
                <Route exact path="/" >
                    <Content/>
                </Route>
                <Route path="/khoa-hoc" >
                    <Cource tenkhoahoc =""/>
                </Route>
                <Route  path="/lien-he">
                    <Contact/>
                </Route>
                <Route  path="/chi-tiet-bai-viet/:theloai/:ten.:id.html" component={NewPageDetail}>
                   
                </Route>
                <Route  path="/chi-tiet-khoa-hoc/:theloai/:ten.:id.html" component={CourceDetail}>
                    
                </Route>
                <Route  path="/chi-tiet-project/:theloai/:ten.:id.html" component={ProjectDetail}>
                    
                </Route>
            </Switch>

        )
    }
}
