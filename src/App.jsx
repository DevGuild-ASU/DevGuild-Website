// @ts-check

import { Route, Routes, Navigate } from "react-router-dom";

import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Explore from "./pages/Explore.jsx";
import Album from "./pages/Album.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Privacy from "./pages/Privacy.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App () {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Navigate to="/" replace />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/album" element={<Album />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}
