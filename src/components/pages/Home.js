import React, { Component } from 'react';
import ClipCarousel from './ClipCarousel';
import TextCarousel from './TextCarousel';
import Padlet from './Padlet';
import LRCTeam from './LRCTeam';
// import Filler from './Filler';
import "../../style/Home.scss";

export class Home extends Component {
    render() {
        return (
            <div className="home">
                <section className="carousel_section">
                    <TextCarousel />
                    <ClipCarousel />
                </section>

                <section className="padlet_section">
                    <Padlet />
                </section>

                {/* <section className="idunno"> */}
                    {/* <iframe title="sampleDoc" 
                        src="https://docs.google.com/document/d/e/2PACX-1vQyR8feuqQcW_JdkUYYhtt9aoFgWVAHCOuK6b9L95uRC2_wu-vpHZg5wqDLWkhkiDmW3c2u_QWF_BPo/pub?embedded=true"
                        frameBorder="0">
                    </iframe> */}
                    {/* <Filler />
                </section> */}

                <section className="team_section">
                    <LRCTeam />
                </section>

                
            </div>
        )
    }
}

export default Home
