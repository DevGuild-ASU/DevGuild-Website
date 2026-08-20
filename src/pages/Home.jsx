// @ts-check
/// <reference types="vite/client" />

import { NavLink } from 'react-router-dom';
import './css/home.css';

import Hero from './home/Hero.jsx';
import WhyDevGuild from './home/WhyDevGuild.jsx';
import Requirements from './home/Requirements.jsx';
import Join from './home/Join.jsx';

export default function Home () {
    return (
        <>
            <Hero />
            <WhyDevGuild />
            <Requirements />
            <Join />
        </>
    );
}
