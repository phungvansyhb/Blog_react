import React, {Component} from 'react'

class Responsive extends Component {
    render() {
        return (
            <div>
                {/* response menu cho mobile */}
                <div className="site-mobile-menu site-navbar-target">
                    <div className="site-mobile-menu-header">
                        <div className="site-mobile-menu-close mt-3">
                            <span className="icon-close2 js-menu-toggle"/>
                        </div>
                    </div>
                    <div className="site-mobile-menu-body"/>
                </div>
            </div>
        )
    }
}
export default Responsive
