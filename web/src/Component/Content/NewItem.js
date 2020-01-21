import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export default class NewItem extends Component {
    render() {
        return (
            <div className="trend-entry d-flex">
                <div className="number align-self-start">
                    <span className="mx-1">•</span>
                </div>
                <div className="trend-contents">
                     <h2>
                        <Link to ="/chi-tiet-bai-viet">{this.props.tieude}</Link>
                    </h2>
                    <h2>
                        {this.props.mota}
                    </h2>
                    <div className="post-meta">
                        <span className="d-block">
                            <span>
                                {this.props.theloai}
                            </span>
                            -
                            <span>{this.props.thoigianpost}</span>
                           
                           
                        </span>
                        <span className="date-read">
                            <span className="mx-1">•</span>{this.props.tacgia}

                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
