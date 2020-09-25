import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import TopNav from './components/TopNav';
import DISLogo from './components/DISLogo';
import Destiny from './components/Destiny';
import Epic from './components/Epic';
import Menu from './components/Menu';
import Routes from './components/Routes';
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
    
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });
    
    return (
        <div className="App">
            <header className="App-header">
                <TopNav />
                <DISLogo />
                <Destiny />
                <Epic />
                <Router>
                    <Menu />
                    <Routes />
                </Router>
            </header>
        </div>
    );
}

export default App;
