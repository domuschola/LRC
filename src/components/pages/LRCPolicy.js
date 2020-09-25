import React, { Component } from 'react';
import '../../style/LRCPolicy.scss';

export class LRCPolicy extends Component {
    render() {
        return (
            <div className="lrc_policy">
                <div className="lrc_policy_header roboto" data-aos="zoom-in">
                    <h1>LRC DIStance Learning</h1>
                    <h6>Policies</h6>
                </div>
                {/* <iframe data-aos="zoom-in"
                    className="lrc_policy_iframe"
                    title="lrc_policy_iframe"
                    src="https://docs.google.com/document/d/e/2PACX-1vRAGU6vHx9Pl0NN5zN88UE0YLNtFPwC2LPq6jBOXiT2JEwJ857knfNc0FGWZahsCuGkTaScEaU2UMhO/pub?embed=true" 
                    width="100%"
                    height="100%"
                    frameBorder="0"
                >
                </iframe> */}

                <iframe className="lrc_policy_iframe" data-aos="zoom-in"
                    title="lrc_policy_iframe"
                    src="https://docs.google.com/document/d/e/2PACX-1vTkCedFTGQY6dmYus892ppU8StkNbN4JLADl8GD3DOSvCirpVA_HZN8p1k6sKuxuw/pub?embedded=true"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                >
                </iframe>

                <div className="instruction_box">
                    <h2>Login Instructions</h2>
                    <a href="https://docs.google.com/document/d/1Krw8eTzyR2r-PZVxrLLhk2dW2GdSy4xLufnsDAVRj-s"><h4>Getepic Online Library</h4></a>
                    <a href="https://docs.google.com/document/d/1q6yY0txKQmhlNTbTDEyIdGostsrW2Yos"><h4>Destiny Discover Library</h4></a>
                </div>

                <div className="ebsco_tutorial">
                    <h2>EBSCO Tutorials</h2>
                    <a href="https://docs.google.com/presentation/d/1-HoEwbMONJOl9T9wFS9wfxgGhpHgvH4wS5wLXCZjh9g"><h4>Explora Primary</h4></a>
                    <a href="https://docs.google.com/presentation/d/1pjzqWw9yNwvss6o6P6YhBWYMhA_iS2IBpnYXbmqmBug"><h4>secondary and IB Diploma</h4></a>
                </div>
            </div>
        )
    }
}

export default LRCPolicy
