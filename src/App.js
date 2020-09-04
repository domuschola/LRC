import React from 'react';
// import { BrowserRouter as Router } from "react-router-dom";
// import Links from './components/Links';
// import Switches from './components/Switches';
import Navbar from './components/Navbar';
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navbar />
                {/* <Router>
                    <Links />
                    <Switches />
                </Router> */}
            </header>
        </div>
    );
}

export default App;
