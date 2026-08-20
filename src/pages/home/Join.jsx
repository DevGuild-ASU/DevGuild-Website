// @ts-check

import { NavLink } from "react-router-dom";

export default function Join () {
    return (
        <section id="join">
        <p className="section-subtext">YOUR NEXT CHAPTER STARTS HERE</p>

        <h1>
            Ready to build <br />
            <span className="highlight-text">without limits?</span>
        </h1>
        <p>Join DevGuild DG and find a community that helps you keep moving.</p>

        <div className="button-group">
            <NavLink
                to="/contacts"
                className="btn active"
            >Join the guild ↗</NavLink>
        </div>
    </section>
    );
}
