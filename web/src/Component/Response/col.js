import React, { Component } from 'react'

export default class Column extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div className={this.props.col}>
                {this.props.content}
            </div>
        )
    }
}
