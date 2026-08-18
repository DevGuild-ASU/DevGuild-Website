// @ts-check

import { NavLink } from "react-router";

export default function Nav () {
    return (
        <header>
            <img src="" alt="" />

            <ul>
                <li>
                    <NavLink to="">Home</NavLink>
                </li>
                <li>
                    <NavLink to="">Explore</NavLink>
                </li>
                <li>
                    <NavLink to="">Album</NavLink>
                </li>
                <li>
                    <NavLink to="">About</NavLink>
                </li>
                <li>
                    <NavLink to="">Contacts</NavLink>
                </li>
                <li>
                    <NavLink to="">Privacy</NavLink>
                </li>
            </ul>
        </header>
    );
}
