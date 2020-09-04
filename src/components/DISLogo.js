import React, { Component } from 'react';
import '../style/DISLogo.scss';

export class DISLogo extends Component {
    render() {
        return (
            <div className="dis_logo">
                <a href="http://domuschola.edu.ph/">
                    <img id="dis" src="https://domuschola.edu.ph/assets/img/logos/DISlogo-IB.png" alt="Domuschola International School" />
                </a>
            </div>
        )
    }
}

export default DISLogo
