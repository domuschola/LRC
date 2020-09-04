import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Popup from "reactjs-popup";
import Burger from "./Burger";
import Menu from "./Menu";
import Home from './pages/Home';

export class BurgerMenu extends Component {
    render() {
        const contentStyle = {
          background: "rgba(255,255,255,0)",
          width: "80%",
          border: "none"
        };
        return (
            <div>
                <Router>
                    <div>
                        <Popup
                            overlayStyle={{ background: "rgba(255,255,255,0.98" }}
                            contentStyle={contentStyle}
                            trigger={open => <Burger open={open} />}
                            modal
                            closeOnDocumentClick={false}
                            
                        >
                            {close => <Menu close={close} />}
                        </Popup>

                        <Route exact path="/" component={Home} />
                            {/* <Home /> */}
                        {/* </Route> */}
                        {/* <Route path="/about" component={About} /> */}
                        {/* <Route path="/contact" component={Contact} /> */}
                    </div>
                </Router>
            </div>
        )
    }
}

export default BurgerMenu
