import React, {Component} from 'react'
import DBkhoahoc from './../dulieu/dulieukhoahoc'

export default class CourceDetail extends Component {

    render() {
        console.log(this.props.match.params.theloai);
        console.log(this.props.match.params.id);

        return (
            <div>
                <div className="site-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 single-content">
                                <div className="section-title">
                                    <h2>Nội dung khóa học</h2>
                                </div>
                                {
                                    DBkhoahoc.map((DBkhoahoc, key) => {
                                        if (DBkhoahoc.id == this.props.match.params.id) {
                                            return (
                                                <div>

                                                    <h1 className="mb-4">
                                                        {DBkhoahoc.ten}
                                                    </h1>
                                                    <div className="post-meta d-flex mb-5">

                                                        <div className="vcard">
                                                            <span className="d-block">
                                                                <span>{DBkhoahoc.giangvien}</span>

                                                                <div>
                                                                    <span>{DBkhoahoc.theloai}</span>
                                                                </div>
                                                            </span>
                                                            <span className="date-read">{DBkhoahoc.thoigianpost}</span>

                                                            <div>
                                                                {DBkhoahoc.gia}
                                                            </div>
                                                            <div >
                                                                {DBkhoahoc.muctieu}
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <p>{DBkhoahoc.buoi1}</p>
                                                    <p>{DBkhoahoc.buoi2}</p>
                                                    <p>{DBkhoahoc.buoi3}</p>
                                                    <p>{DBkhoahoc.buoi4}</p>
                                                    <p>{DBkhoahoc.buoi5}</p>
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </div>
                            <div className="col-lg-3 ml-auto">
                                <div className="section-title">
                                    <h2>Khóa Học liên quan</h2>
                                </div>
                                {
                                    DBkhoahoc.map((DBkhoahoc, key) => {
                                        if (DBkhoahoc.theloai == this.props.match.params.theloai & DBkhoahoc.id != this.props.match.params.id) {
                                            return (
                                                <div class="trend-entry d-flex">
                                                    <div class="number align-self-start">
                                                        <span class="icon-star2"></span>
                                                    </div>
                                                    <div class="trend-contents">
                                                        <h2>
                                                            <a href="blog-single.html">{DBkhoahoc.ten}</a>
                                                        </h2>
                                                        <div class="post-meta">
                                                            <div class="d-block">
                                                                <span>{DBkhoahoc.giangvien}</span>
                                                                <div>{DBkhoahoc.theloai}</div>
                                                            </div>
                                                            <span class="date-read">{DBkhoahoc.thoigianpost}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })
                                }

                                <p>
                                    <a href="#" className="more">See All Cource
                                        <span className="icon-keyboard_arrow_right"/></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
