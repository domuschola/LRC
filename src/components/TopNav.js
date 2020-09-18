import React, { Component } from 'react';
import '../style/TopNav.scss';

export class TopNav extends Component {
    render() {
        return (
            <div className="top_nav">
                <div className="cism_container">
                    <a className="cism_link" href="https://www.cismanila.org/">
                        CISM
                    </a>
                </div>
                <div className="dis_container">
                    <a className="dis_link" href="http://domuschola.edu.ph/">
                        DIS
                    </a>
                </div>
            </div>
        )
    }
}

export default TopNav
