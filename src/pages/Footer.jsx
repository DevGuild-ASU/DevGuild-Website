// @ts-check
/// <reference types="vite/client" />

import { NavLink } from 'react-router-dom';
import './css/footer.css';

export default function Footer() {
    return (
        <footer>
            <p>© 2026 DevGuild DG - Built with curiosity.</p>
            <NavLink
                to="/privacy"
            >Privacy Policy</NavLink>
        </footer>
    )
}
