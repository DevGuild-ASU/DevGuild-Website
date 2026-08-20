// @ts-check
/// <reference types="vite/client" />

import './css/nav.css';

import logo from '../assets/logo.png';

import { NavLink } from "react-router";

export default function Nav () {
    return (
        <header>
            <div className="logo-container">
                <img src={logo} />
                <h2>DevGuild DG</h2>
            </div>

            <ul>
                <li>
                    <NavLink
                        to=""
                        className={({ isActive }) => isActive ? "nav-active" : ""}
                    >Home</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => isActive ? "nav-active" : ""}
                    >About</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/explore"
                        className={({ isActive }) => isActive ? "nav-active" : ""}
                    >Explore</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contacts"
                        className={({ isActive }) => isActive ? "nav-active" : ""}
                    >Contacts</NavLink>
                </li>
                <li>
                    <NavLink
                        to="/faq"
                        className={({ isActive }) => isActive ? "nav-active" : ""}
                    >FAQ</NavLink>
                </li>
            </ul>
        </header>
    );
}
