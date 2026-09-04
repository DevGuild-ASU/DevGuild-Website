// @ts-check

import { NavLink } from "react-router-dom";

export default function Nav () {
    return (
        <header>
            <img src="/photos/devguild-logo.png" alt="DevGuild DG Logo" />

            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/explore">Explore</NavLink>
                </li>
                <li>
                    <NavLink to="/album">Album</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contacts</NavLink>
                </li>
                <li>
                    <NavLink to="/privacy">Privacy</NavLink>
                </li>
            </ul>
        </header>
    );
}
