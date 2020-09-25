import React, { Component } from 'react';
import Librarian1 from '../../images/Librarian1.jpg';
import Librarian2 from '../../images/Librarian2.jpg';
import Librarian3 from '../../images/Librarian3.jpg';
import "../../style/LRCTeam.scss";

export class LRCTeam extends Component {
    render() {
        return (
            <div className="lrc_team">
                <div className="team_header roboto" data-aos="zoom-in">
                    <h6>MEET THE</h6>
                    <h1>LIBRARIANS</h1>
                </div>
                <div data-aos="zoom-in">
                    <div className="librarian_img">
                        <img src={Librarian1} alt="Librarian1" />
                        <h3>Nikki Miranda</h3>
                        <h6><a href="mailto:dominique.miranda@domuschola.edu.ph">dominique.miranda@domuschola.edu.ph</a></h6>
                    </div>
                    
                    <div className="librarian_img">
                        <img src={Librarian2} alt="Librarian2" />
                        <h3>Mersha Calamba</h3>
                        <h6><a href="mailto:mersha.calamba@domuschola.edu.ph">mersha.calamba@domuschola.edu.ph</a></h6>
                    </div>
                    
                    <div className="librarian_img">
                        <img src={Librarian3} alt="Librarian3" />
                        <h3>Eloisa Santos</h3>
                        <h6><a href="mailto:eloisa.santos@domuschola.edu.ph">eloisa.santos@domuschola.edu.ph</a></h6>
                    </div>
                </div>
            </div>
        )
    }
}

export default LRCTeam
