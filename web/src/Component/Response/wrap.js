import React, { Component } from 'react'

export default class Wrap extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
                 <div className="site-section">
                    <div className="container">
                        <div className="row">
                            {this.props.content}
                        </div>
                    </div>
                </div>
        )
    }
}
