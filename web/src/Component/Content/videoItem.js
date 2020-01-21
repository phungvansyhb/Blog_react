import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
export default class VideoItem extends Component {
    render() {
        return (
            <div>
                <div className="post-entry-1">
                    <a href={this.props.linkyoutube} target="_blank"><img src={this.props.anh} alt="Image" className="img-fluid"/></a>
                    <h2>
                        <a href = {this.props.linkyoutube} target="_blank">{this.props.tieude}</a>
                    </h2>
                    <p>{this.props.mota}</p>
                    <div className="post-meta">
                        <span className="d-block">
                            <span>{this.props.tacgia}</span>
                            <span className="mx-1">•</span>
                            <span>{this.props.theloai}</span>
                        </span>
                        <span className="date-read">{this.props.thoigianpost}
                        </span>
                                                     
                    </div>
                </div>
            </div>
        )
    }
}
