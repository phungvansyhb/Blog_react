import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";

export default class Formkhoahoc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false,
           

        }
    }
    

    submitForm = (event) =>{
        event.preventDefault()
        this.setState({
            isRedirect:true
        })

    }
    getValue =(event)=>{
        const key = event.target.name;
        const value = event.target.value; 
        this.setState({
            [key]:value
        })
       
    }
    sentValue = () =>{
        var noidungform = "noi dung :";
        noidungform += "ten khoa hoc: " +this.state.tenkhoahoc;
        noidungform += "/the loai: " +this.state.theloai;
        noidungform += "/so buoi day: " +this.state.sobuoiday;
        noidungform += "/muc tieu khoa hoc: " +this.state.muctieu;
        noidungform += "/gia: "+ this.state.gia;
        noidungform += "/giang vien: " +this.state.giangvien;
        return noidungform;
    }

    render() {
        if(this.state.isRedirect){
            console.log(this.sentValue());
            return <Redirect to="/khoa-hoc"/>
        }
        return (
                <div className="col-lg-12">
                    {/* General Element */}
                    <div className="card mb-4">
                        <div
                            className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">Form edit khoa hoc</h6>
                        </div>
                        <div className="card-body">
                            <form name="form" >
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Tên khóa học</label>
                                    <input
                                        onChange={(event) => this.getValue(event)}
                                        required
                                        name="tenkhoahoc"
                                        
                                        className="form-control"
                                        id="exampleFormControlInput1"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Thể loại</label>
                                    <select className="form-control" id="exampleFormControlSelect1" name="theloai"  onChange={(event) => this.getValue(event)}>
                                        <option>lập trình c</option>
                                        <option>web-co-ban</option>
                                        <option>ardruino</option>
                                        <option>proteus</option>
                                        <option>altium</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Số buổi dạy</label>
                                    <input
                                        onChange={(event) => this.getValue(event)}
                                        name="sobuoiday"
                                        required
                                        className="form-control"
                                        id="exampleFormControlInput1"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Mục tiêu khóa học</label>
                                    <textarea
                                     onChange={(event) => this.getValue(event)}
                                        name="muctieu"
                                        required
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows={3}
                                        defaultValue={""}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Giá</label>
                                    <input
                                        name="gia"
                                        required
                                        onChange={(event) => this.getValue(event)}
                                        className="form-control"
                                        id="exampleFormControlInput1"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Người dạy</label>
                                    <input
                                         required
                                        name="giangvien"
                                        onChange={(event) => this.getValue(event)}
                                        className="form-control"
                                        id="exampleFormControlInput1"/>
                                </div>
                                <div>
                                    <button type="submit" onClick = {(event) => this.submitForm(event)} className="btn btn-info">Xác nhận</button>
                                    <Link to ="/khoa-hoc">
                                        <button type="button" className="btn btn-warning">
                                        Hủy
                                        
                                        </button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            
        )
    }
}
