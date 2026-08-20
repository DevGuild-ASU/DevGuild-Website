// @ts-check

import { NavLink } from "react-router-dom";

export default function Hero () {
    return (
        <section>
            <p className="section-subtext">A COMMUNITY FOR THE AGE OF AI</p>

            <h1>
                Build for the <br />
                <span className="highlight-text">future of <br /> technology.</span>
            </h1>
            <p>
                Learn by building real projects, collaborate with ambitious people,
                and turn your ideas into useful technology with DevGuild DG.
                Open to beginners, curious learners, and experienced builders.
            </p>

            <div className="button-group">
                <a className="btn active" href="#join">Start Building ↗</a>
                <NavLink className="btn"
                    to="/explore"
                >Explore →</NavLink>
            </div>
        </section>
    );
}
