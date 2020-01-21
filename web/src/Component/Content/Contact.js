import React, {Component} from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div className="site-section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title mb-5">
                                <h2>Contact Us</h2>
                            </div>
                            <form method="post">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <label htmlFor="fname">First Name</label>
                                        <input type="text" id="fname" className="form-control form-control-lg"/>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label htmlFor="lname">Last Name</label>
                                        <input type="text" id="lname" className="form-control form-control-lg"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <label htmlFor="eaddress">Email Address</label>
                                        <input type="text" id="eaddress" className="form-control form-control-lg"/>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label htmlFor="tel">Tel. Number</label>
                                        <input type="text" id="tel" className="form-control form-control-lg"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea
                                            name="name"
                                            id="message"
                                            cols={30}
                                            rows={10}
                                            className="form-control"
                                            defaultValue={""}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <input
                                            type="submit"
                                            defaultValue="Send Message"
                                            className="btn btn-primary py-3 px-5"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
