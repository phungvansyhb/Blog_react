import React, { Component } from 'react'

export default class Children extends Component {
    Getinputvalue = () => {
        return document.getElementById('aa').value;
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <h3>xin chao bo {this.props.message}</h3>
                <form>
                    <input type="input" id="aa"></input>
                    <input type="reset" onClick= {() => this.props.getvalue(this.Getinputvalue())}/>
                </form>
            </div>
        )
    }
}
