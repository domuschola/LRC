import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Burger from './Burger';
import '../style/Menu.scss';

export class Menu extends Component {
    
    openNav = () => {
        document.getElementById("popup_menu").style.width = "100%";
    }
    
    closeNav() {
        document.getElementById("popup_menu").style.width = "0%";
        console.log("click!");
    }
    
    render() {
        return (            
            <div>
                <div id="popup_menu" className="popup_menu">
                    <div className="close_btn" onClick={this.closeNav}>&times;</div>

                    <div className="menu_link">
                        <Link class="link_text" onClick={this.closeNav} to="/">Home</Link>
                        <Link class="link_text" onClick={this.closeNav} to="/padlet">Padlet</Link>
                        <Link class="link_text" onClick={this.closeNav} to="/policy1">Policy</Link>
                        <Link class="link_text" onClick={this.closeNav} to="/team">LRCTeam</Link>
                    </div>
                </div>

                 <div className="burger" onClick={this.openNav}>
                    <Burger />
                </div>
            </div>
        )
    }
}

export default Menu
