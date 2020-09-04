import React, { Component } from 'react';
import ClipCarousel from './ClipCarousel';
import Padlet from './Padlet';
import Filler from './Filler';
import "../../style/Home.scss";

export class Home extends Component {
    render() {
        return (
            <div className="home">
                <section className="first_section">
                    <ClipCarousel />
                </section>

                <section className="padlet">
                    <Padlet />
                </section>

                <section className="idunno">
                    <Filler />
                </section>

                
            </div>
        )
    }
}

export default Home
