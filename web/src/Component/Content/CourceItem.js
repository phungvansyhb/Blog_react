import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route, Link , useParams} from "react-router-dom";

export default class Cource extends Component {
    constructor(props) {
        super(props)
    }
    toSlug=(str)=>
        {
            // Chuyển hết sang chữ thường
            str = str.toLowerCase();     
        
            // xóa dấu
            str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
            str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
            str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
            str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
            str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
            str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
            str = str.replace(/(đ)/g, 'd');
        
            // Xóa ký tự đặc biệt
            str = str.replace(/([^0-9a-z-\s])/g, '');
        
            // Xóa khoảng trắng thay bằng ký tự -
            str = str.replace(/(\s+)/g, '-');
        
            // xóa phần dự - ở đầu
            str = str.replace(/^-+/g, '');
        
            // xóa phần dư - ở cuối
            str = str.replace(/-+$/g, '');
        
            // return
            return str;
        }
    render() {
        return (
                            <div className="post-entry-2 d-flex">
                                <div
                                    className="thumbnail"
                                    style={{
                                        backgroundImage: 'url("images/img_v_1.jpg")'
                                    }}/>
                                <div className="contents ">
                                    <h2>
                                    <Link to={"/chi-tiet-khoa-hoc/"+this.toSlug(this.props.theloai)+"/"+this.toSlug(this.props.tenkhoahoc)+"."+this.props.courceId+".html"}>{this.props.tenkhoahoc}</Link>
                                    </h2>
                                    <p className="mb-3">{this.props.muctieu}</p>
                                    <div className="post-meta">
                                        <span className="d-block">
                                            <span>{this.props.giangvien}</span>
                                            -
                                            <a href="#">{this.props.theloai}</a>
                                        </span>
                                        <span className="date-read">{this.props.thoigianpost}
                                            <span className="mx-1">•</span>
                                            {this.props.gia}
                                            <span className="icon-star2"/></span>
                                    </div>
                                </div>
                            </div>
           
        )
    }
}