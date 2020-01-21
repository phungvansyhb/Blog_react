import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import NewItem from './NewItem';
import VideoItem from './videoItem';
import DBnew from './../dulieu/dulieubaiviet'
import DBvideo from './../dulieu/dulieuvideo'
import DBkhoahoc from './../dulieu/dulieukhoahoc'
import Cource from './CourceItem';

export default class Content extends Component {
    render() {
        
        return (
            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-12">
                                    <div className="section-title">
                                        <h2>VIDEO MỚI NHẤT</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-8">
                                {  
                                    DBvideo.map( (value,key)=>{
                                    return(
                                        <VideoItem key={key}  
                                        videoid={value.id}   
                                        mota={value.mota}   
                                        tieude={value.tieude} 
                                        anh={value.anh} 
                                        tacgia={value.tacgia}
                                        theloai = {value.theloai } 
                                        thoigianpost = {value.thoigianpost} 
                                        linkyoutube = {value.linkyoutube}>
                                        </VideoItem>
                                    )
                                
                                    })
                                 }
                                    <p>
                                         <a href="#" className="more">See All Video
                                        <span className="icon-keyboard_arrow_right"/></a>
                                    </p>
                                      
                               
                                </div>
                             </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="section-title">
                                <h2>BÀI VIẾT MỚI NHẤT</h2>
                            </div>
                            {  
                                DBnew.map( (value,key)=>{
                                return(
                                    <NewItem key = {key} 
                                     newId = {value.id}  
                                     mota = {value.mota} 
                                     tieude = {value.tieude} 
                                     tacgia={value.tacgia}
                                     theloai = {value.theloai }
                                    thoigianpost = {value.thoigianpost}>
                                      </NewItem>
                                )
                               
                                 })
                            }
                     
                            <p>
                                <a href="#" className="more">See All New
                                    <span className="icon-keyboard_arrow_right"/></a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="site-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-title">
                                    <h2>Khoá học</h2>
                                </div>
                                {
                                    DBkhoahoc.map((value,key)=> {
                                        return(
                                            <Cource key = {key} 
                                            courceId={value.id} 
                                            tenkhoahoc = {value.ten} 
                                            muctieu = {value.muctieu} 
                                            giangvien = {value.giangvien} 
                                            theloai = {value.theloai} 
                                            thoigianpost = {value.thoigianpost} 
                                            gia = {value.gia}
                                            ></Cource>
                                        )


                                    } )
                                }
                                

                             </div>    

                            <div className="col-lg-6">
                                <div className="section-title">
                                    <h2>Project</h2>
                                </div>
                                <div className="post-entry-2 d-flex">
                                    <div
                                        className="thumbnail"
                                        style={{
                                            backgroundImage: 'url("images/img_v_1.jpg")'
                                        }}/>
                                    <div className="contents">
                                        <h2>
                                            <a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a>
                                        </h2>
                                        <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                                        <div className="post-meta">
                                            <span className="d-block">
                                                <a href="#">Dave Rogers</a>
                                                in
                                                <a href="#">News</a>
                                            </span>
                                            <span className="date-read">Jun 14
                                                <span className="mx-1">•</span>
                                                3 min read
                                                <span className="icon-star2"/></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-entry-2 d-flex">
                                    <div
                                        className="thumbnail"
                                        style={{
                                            backgroundImage: 'url("images/img_v_2.jpg")'
                                        }}/>
                                    <div className="contents">
                                        <h2>
                                            <a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a>
                                        </h2>
                                        <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                                        <div className="post-meta">
                                            <span className="d-block">
                                                <a href="#">Dave Rogers</a>
                                                in
                                                <a href="#">News</a>
                                            </span>
                                            <span className="date-read">Jun 14
                                                <span className="mx-1">•</span>
                                                3 min read
                                                <span className="icon-star2"/></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-entry-2 d-flex">
                                    <div
                                        className="thumbnail"
                                        style={{
                                            backgroundImage: 'url("images/img_v_3.jpg")'
                                        }}/>
                                    <div className="contents">
                                        <h2>
                                            <a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a>
                                        </h2>
                                        <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                                        <div className="post-meta">
                                            <span className="d-block">
                                                <a href="#">Dave Rogers</a>
                                                in
                                                <a href="#">News</a>
                                            </span>
                                            <span className="date-read">Jun 14
                                                <span className="mx-1">•</span>
                                                3 min read
                                                <span className="icon-star2"/></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
