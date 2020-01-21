import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Table from '../Component/Table';
import Formkhoahoc from '../Component/Formkhoahoc';
import Formbaiviet from '../Component/Formbaiviet';
import Formvideo from '../Component/Formvideo';
import Formproject from '../Component/Formproject';

export default class Dieuhuong extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route  path="/edit-khoa-hoc" >
                            <Formkhoahoc/>
                    </Route>
                    <Route  path="/edit-bai-viet" >
                            <Formbaiviet/>
                    </Route>
                    <Route  path="/edit-video" >
                            <Formvideo/>
                    </Route>
                    <Route  path="/edit-project" >
                            <Formproject/>
                    </Route>
                    <Route   path="/:ten" component={Table}>
                        
                    </Route>
                    <Route path="/:ten" component={Table}>
                        
                    </Route>
                    <Route path="/:ten" component={Table}>
                        
                    </Route>
                    <Route path="/:ten" component={Table}>
                        
                    </Route>
                    <Route path="/" >
                        
                    </Route>
                    
                </Switch>
            </div>
        )
    }
}
