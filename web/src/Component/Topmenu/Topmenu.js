import React, {Component} from 'react'

export default class Topmenu extends Component {
    render() {
        return (
            <div className="topmenu">
               
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 col-lg-6 d-flex">
                                <a href="index.html" className="site-logo">
                                    Blog Iot
                                </a>
                                <a
                                    href="#"
                                    className="ml-auto d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black"><span className="icon-menu h3"/></a>
                            </div>
                            {/* <div className="col-12 col-lg-6 ml-auto d-flex">
                                <div className="ml-md-auto top-social d-none d-lg-inline-block">
                                    <a href="#" className="d-inline-block p-3"><span className="icon-facebook"/></a>
                                    <a href="#" className="d-inline-block p-3"><span className="icon-twitter"/></a>
                                    <a href="#" className="d-inline-block p-3"><span className="icon-instagram"/></a>
                                </div>
                                <form action="#" className="search-form d-inline-block">
                                    <div className="d-flex">
                                        <input type="email" className="form-control" placeholder="Search..."/>
                                        <button type="submit" className="btn btn-secondary"><span className="icon-search"/></button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-6 d-block d-lg-none text-right"></div> */}
                        </div>
                    </div>
               
            </div>
        )
    }
}
