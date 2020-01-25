import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import TableCource from '../Component/TableCource.js';
import TableNew from '../Component/TableNew.js';
import TableProject from '../Component/TableProject';
import TableVideo from '../Component/TableVideo';

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
                    <Route   path="/khoa-hoc" component={TableCource}>
                        
                    </Route>
                    <Route path="/project" component={TableProject}>
                        
                    </Route>
                    <Route path="/video" component={TableVideo}>
                        
                    </Route>
                    <Route path="/bai-viet" component={TableNew}>
                        
                    </Route>
                  
                </Switch>
            </div>
        )
    }
}
