import React from 'react';
import Home from './pages/Home';
import Padlet from './pages/Padlet';
import LRCPolicy from './pages/LRCPolicy';
// import Policy1 from './pages/Policy1';
import LRCTeam from './pages/LRCTeam';
import Gallery from './pages/Lightbox';
import ContactUs from './pages/ContactUs';

export const routes = [
    {
        path: "/",
        exact: true,
        main: () => <Home />
    },
    {
        path: "/home",
        exact: true,
        main: () => <Home />
    },
    {
        path: "/padlet",
        main: () => <Padlet />
    },
    {
        path: "/lrcpolicy",
        main: () => <LRCPolicy />
    },
    // {
    //     path: "/policy1",
    //     main: () => <Policy1 />
    // },
    {
        path: "/team",
        main: () => <LRCTeam />
    },
    {
        path: "/gallery",
        main: () => <Gallery />
    },
    {
        path: "/contactus",
        main: () => <ContactUs />
    }
]