import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Burger from './Burger';
import '../style/Menu.scss';

export class Menu extends Component {
    
    openNav = () => {
        // document.getElementById("popup_menu").style.width = "100%";
        // document.getElementById("popup_menu").style.height = "100%";
        document.getElementById("popup_menu").style.display = "block";
    }
    
    closeNav() {
        // document.getElementById("popup_menu").style.width = "0%";
        // document.getElementById("popup_menu").style.height = "0%";
        document.getElementById("popup_menu").style.display = "none";
    }
    
    render() {
        return (            
            <div>
                <div id="popup_menu" className="popup_menu">
                    <div className="close_btn" onClick={this.closeNav}>&times;</div>

                    <div className="menu_link">
                        <Link class="link_text" onClick={this.closeNav} to="/">Home</Link>
                        <Link class="link_text" onClick={this.closeNav} to="/lrcpolicy">Policy</Link>
                        <Link class="link_text" onClick={this.closeNav} to="/gallery">Gallery</Link>
                        <Link class="link_text" onClick={this.closeNav} to="/contactus">ContactUs</Link>
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
