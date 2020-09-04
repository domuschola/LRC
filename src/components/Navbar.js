import React, { Component } from 'react';
import CISM from './CISM';
import Destiny from './Destiny';
import DISLogo from './DISLogo';
import BurgerMenu from './BurgerMenu';
import '../style/Navbar.scss';

export class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <CISM />
                <DISLogo />
                <Destiny />
                <BurgerMenu />
            </div>
        )
    }
}

export default Navbar
