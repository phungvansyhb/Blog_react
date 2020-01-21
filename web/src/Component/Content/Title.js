import React, { Component } from 'react'

export default class Title extends Component {
    render() {
        return (
            <div>
                <div className="section-title">
                        <h2>{this.props.content}</h2>
                </div>
            </div>
        )
    }
}
