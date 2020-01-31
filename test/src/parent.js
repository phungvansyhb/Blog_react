import React, { Component } from 'react'
import Children from './children'

export default class parent extends Component {
    constructor(props) {
        super(props);
        this.state={
            message: "hello",
            status : false
        }
    }
    ChangeStatus = () => {
        this.setState({
           status : !(this.state.status)
        })
    }
    getValuefromChild =(item) =>{
        console.log("ban da nhap "+item)
    }
    CallChild = () => {
        var message1 = {
            ten: "sy",
            tuoi:"19"

        };
        if(this.state.status === true){
            return(
                <Children thongbao = {message1}  getvalue = {this.getValuefromChild}/>
            )
        }
       
    }
    render() {
        return (
            <div>
                <h3>xin chao</h3>
                <button onClick ={() => this.ChangeStatus()} > click</button>
                {this.CallChild()}
            </div>
        )
    }
}
