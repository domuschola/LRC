import React, { Component } from 'react';
import MiniLogo from "../images/mini-logo.png";
import '../style/DISLogo.scss';

export class DISLogo extends Component {
    
    componentDidMount() {
        this.listener = document.addEventListener("scroll", e => {
            var scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= 100) {
                // this.setState({ domuscholaLogo: MiniLogo });
                document.getElementById("dis_short_logo").style.display = "block";
                document.getElementById("dis_full_logo").style.display = "none";
            } else {
                // this.setState({ domuscholaLogo: "https://domuschola.edu.ph/assets/img/logos/DISlogo-IB.png" });
                document.getElementById("dis_short_logo").style.display = "none";
                document.getElementById("dis_full_logo").style.display = "block";
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
                    {/* <img id="dis" src={this.state.domuscholaLogo} alt="Domuschola International School" /> */}
                    <img id="dis_full_logo" src="https://domuschola.edu.ph/assets/img/logos/DISlogo-IB.png" alt="Domuschola International School" />
                    <img id="dis_short_logo" src={MiniLogo} alt="Domuschola International School" />
                    
                    {/* <img id="dis" src="https://domuschola.edu.ph/assets/img/logos/DISlogo-IB.png" alt="Domuschola International School" /> */}
                    {/* <img id="dis" src={ MiniLogo } alt="Domuschola International School" /> */}
                </a>
            </div>
        )
    }
}

export default DISLogo
