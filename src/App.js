import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
// import Links from './components/Links';
// import Switches from './components/Switches';
// import Navbar from './components/Navbar';
import TopNav from './components/TopNav';
import DISLogo from './components/DISLogo';
import Destiny from './components/Destiny';
import Menu from './components/Menu';
import Routes from './components/Routes';
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <TopNav />
                <DISLogo />
                <Destiny />
                <Router>
                    <Menu />
                    <Routes />
                </Router>
            </header>
        </div>
    );
}

export default App;
