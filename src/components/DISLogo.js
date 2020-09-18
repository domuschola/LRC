import React, { Component } from 'react';
import MiniLogo from "../images/mini-logo.png";
import '../style/DISLogo.scss';

export class DISLogo extends Component {
    constructor(props) {
        super(props);
    
        this.listener = null;
        this.state = {
          domuscholaLogo: "https://domuschola.edu.ph/assets/img/logos/DISlogo-IB.png"
        };
    }
    
    componentDidMount() {
        this.listener = document.addEventListener("scroll", e => {
            var scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= 100) {
                this.setState({ domuscholaLogo: MiniLogo });
            } else {
                this.setState({ domuscholaLogo: "https://domuschola.edu.ph/assets/img/logos/DISlogo-IB.png" });
            }
        });
    }
    
    componentDidUpdate() {
        document.removeEventListener("scroll", this.listener);
    }

    render() {  
        return (
            <div className="dis_logo">
                <a href="http://domuschola.edu.ph/">
                    <img id="dis" src={this.state.domuscholaLogo} alt="Domuschola International School" />
                    
                    {/* <img id="dis" src="https://domuschola.edu.ph/assets/img/logos/DISlogo-IB.png" alt="Domuschola International School" /> */}
                    {/* <img id="dis" src={ MiniLogo } alt="Domuschola International School" /> */}
                </a>
            </div>
        )
    }
}

export default DISLogo
