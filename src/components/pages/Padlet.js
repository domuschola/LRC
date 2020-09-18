import React, { Component } from 'react';
import '../../style/Padlet.scss';

export class Padlet extends Component {
    render() {
        return (
            <div className="activity">
                <div className="activity_header">
                    <h1>ACTIVITY</h1>
                    <h6>CORNER</h6>
                </div>

                <div className="padlet_picture">
                    <img src="https://peregrinefund.org/sites/default/files/styles/raptor_banner_600x430/public/2019-11/project-philippine-eagle-portrait-casper-simon.jpg?itok=xElj0mX4" alt="eagle" />
                </div>

                <div className="padlet_embed">
                    <iframe className="padlet_iframe" 
                        title="padlet"
                        src="https://padlet.com/embed/h1is5nyosjiozjjh" 
                        frameborder="0" 
                    >
                    </iframe>
                </div>
            </div>
        )
    }
}

export default Padlet
