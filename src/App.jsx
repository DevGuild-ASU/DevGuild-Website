// @ts-check
/// <reference types="vite/client" />

import './index.css';
import './colors.css';

import { Route, Routes } from "react-router";

import Home from "./pages/Home.jsx";
import Explore from "./pages/Explore.jsx";
import Album from "./pages/Album.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Privacy from "./pages/Privacy.jsx";

export default function App () {
    return (
        <main>
            <Routes>
                <Route path="" element={<Home />}></Route>
                <Route path="/explore" element={<Explore />}></Route>
                <Route path="/album" element={<Album />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/privacy" element={<Privacy />}></Route>
            </Routes>
        </main>
    );
}
