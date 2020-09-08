import React, { Component } from 'react';
import '../../style/Carousel.scss';

export class Padlet extends Component {
    render() {
        return (
            <div className="padlet-embed">
                <p>
                    <iframe title="padlet_iframe" src="https://padlet.com/embed/h1is5nyosjiozjjh" frameborder="0" allow="camera;microphone;geolocation">
                    </iframe>
                </p>
                padlet
            </div>
        )
    }
}

export default Padlet
