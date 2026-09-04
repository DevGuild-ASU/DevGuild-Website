// @ts-check

import { Link } from 'react-router-dom';
import Slider from '../components/Slider.jsx';
import styles from './Explore.module.css';

export default function Explore() {
  const tools = [
    { code: 'GH', name: 'GitHub' },
    { code: 'FG', name: 'Figma' },
    { code: 'VS', name: 'VS Code' },
    { code: 'DC', name: 'Discord' },
    { code: 'NT', name: 'Notion' },
    { code: 'VL', name: 'Vercel' },
    { code: 'LI', name: 'LinkedIn' },
    { code: 'YT', name: 'YouTube' },
    { code: 'SL', name: 'Slack' },
  ];

  const coverSlides = [
    {
      src: '/photos/featured-cover.jpg',
      alt: 'DevGuild DG event with student developers'
    },
    {
      src: '/photos/featured-cover-2.jpg',
      alt: 'DevGuild DG finalists at a technology event'
    }
  ];

  return (
    <div>
      {/* ── PAGE TITLE BAR ────────────────────────────────────── */}
      <div className={styles.pageTitleBar}>
        <h1>Explore</h1>
      </div>

      {/* ── MAIN BODY ─────────────────────────────────────────── */}
      <div className={styles.exploreBody}>
        {/* ══ LEFT COLUMN ══ */}
        <div className={styles.leftCol}>
          {/* WELCOME */}
          <section className={styles.panel} aria-labelledby="explore-welcome-heading">
            <div className={styles.pillHeader}>
              <span id="explore-welcome-heading">Welcome</span>
            </div>
            <div className={styles.welcomeBanner} />
            <nav className={styles.welcomeLinks} aria-label="Explore section shortcuts">
              <a href="#series" className={styles.welcomeLink}>Library</a>
              <a href="#series" className={styles.welcomeLink}>New Drops</a>
              <a href="#series" className={styles.welcomeLink}>Categories</a>
              <Link to="/contact" className={styles.welcomeLink}>Contact</Link>
            </nav>
            <p className={styles.welcomeDesc}>
              <strong>DevGuild DG</strong> offers a vast collection of high-quality programs and resources for
              builders to explore and grow. With an easy-to-navigate interface, members can quickly find their favorite
              series or discover new workshops. Regular updates ensure fresh content, keeping builders engaged with the
              latest sessions. Whether you're into dev, design, data, or product thinking — DevGuild provides the
              ultimate building experience for every maker!
            </p>
          </section>

          {/* PROJECTS */}
          <section className={styles.panel} aria-labelledby="explore-projects-heading">
            <div className={styles.pillHeader}>
              <span id="explore-projects-heading">Projects</span>
            </div>
            <div className={styles.projectsGrid}>
              <a
                className={styles.projectCard}
                href="#aquanons-story"
                aria-label="View the AQUANONS project story"
              >
                <div className={styles.projectBg}>
                  <img src="/photos/aquanons.png" alt="Aquanons logo" />
                </div>
                <div className={styles.projectLabel}>Aquanons</div>
              </a>

              <div className={styles.projectCard}>
                <div className={styles.projectBg}>
                  <img src="/photos/handa.webp" alt="Handa 360 logo" />
                </div>
                <div className={styles.projectLabel}>BFUR64/HANDA 360</div>
              </div>

              <div className={styles.projectCard}>
                <div className={styles.projectBg}>
                  <img src="/photos/tabang.png" alt="Tabang logo" />
                </div>
                <div className={styles.projectLabel}>TABANG</div>
              </div>

              <div className={styles.projectCard}>
                <div className={styles.projectBg}>
                  <img src="/photos/sigmanhwa.png" alt="Sigmanhwa logo" />
                </div>
                <div className={styles.projectLabel}>SIGMANHWA</div>
              </div>

              <div className={styles.projectCard}>
                <div className={styles.projectBg}>🌱</div>
                <div className={styles.projectLabel}>GURU.AI</div>
              </div>

              <div className={styles.projectCard}>
                <div className={styles.projectBg}>⭐</div>
                <div className={styles.projectLabel}>LETSCHECK</div>
              </div>
            </div>
          </section>

          {/* TOOLS */}
          <section className={styles.panel} aria-labelledby="explore-tools-heading">
            <div className={styles.pillHeader}>
              <span id="explore-tools-heading">Tools</span>
            </div>
            <div className={styles.toolsGrid}>
              {tools.map((tool) => (
                <div key={tool.code} className={styles.toolItem}>
                  <div className={styles.toolIcon}>{tool.code}</div>
                  <p>{tool.name}</p>
                </div>
              ))}
            </div>
            <p className={styles.toolNote}>
              READ MORE AT OUR WEBSITE. IF YOU WANT TO PARTNER WITH US PLEASE{' '}
              <Link to="/contact">CONTACT US DIRECTLY</Link> AT PAGE!!
            </p>
          </section>
        </div>

        {/* ══ RIGHT SIDEBAR ══ */}
        <div className={styles.rightCol}>
          {/* SERIES */}
          <section className={styles.panel} id="series" aria-labelledby="explore-series-heading">
            <div className={styles.pillHeader}>
              <span id="explore-series-heading">Series</span>
            </div>
            <div className={styles.seriesImg}>
              <img src="/photos/devguild-logo.png" alt="DevGuild DG logo" />
            </div>
            <p className={styles.seriesText}>
              <strong>DevGuild DG</strong> is written and built by <strong>ambitious makers</strong>.
              Programs are designed and published by the community, for the community.
              Every series is a <em>real project</em> with real people behind it.
            </p>
          </section>

          {/* COVERS */}
          <section className={styles.panel} aria-labelledby="explore-covers-heading">
            <div className={styles.pillHeader}>
              <span id="explore-covers-heading">Covers</span>
            </div>
            <Slider
              slides={coverSlides}
              aspectRatio="9 / 14"
              ariaLabel="Featured Covers Carousel"
            />
          </section>

          {/* SUPPORT */}
          <section className={styles.panel} aria-labelledby="explore-support-heading">
            <div className={styles.pillHeader}>
              <span id="explore-support-heading">Support</span>
            </div>
            <p className={styles.supportText}>
              This <span className={styles.hlRed}>community</span> has a lot of content. With your help, we can make it
              even better. We can also put your name and credits if you are willing to help us make this website even
              better and help the <span className={styles.hlGreen}>community</span> become even better with your skill.
              You may also consider creating a{' '}
              <Link to="/contact" className={styles.hlLink}>
                wanted page for our website.
              </Link>
            </p>
            <div className={styles.supportActions}>
              <a className={styles.btnRed} href="/#join">
                Create Account ↗
              </a>
              <Link className={styles.btnOutline} to="/contact">
                Contact Us
              </Link>
            </div>
            <div className={styles.supportSubtext}>
              Join our DevGuild community today and unlock a world of amazing stories! By creating an account,
              you'll not only enjoy exclusive features but also help support our site and keep it growing.
              Sign up now and be a part of the journey — your support means everything to us!
            </div>
          </section>

          {/* MORE */}
          <section className={styles.panel} aria-labelledby="explore-more-heading">
            <div className={styles.pillHeader}>
              <span id="explore-more-heading">More</span>
            </div>
            <div className={styles.readmoreBar}>
              READ MORE AT OUR WEBSITE, EXPLORE ALL PROGRAMS AND SESSIONS!
            </div>
            <div className={styles.moreFeatured}>
              <div className={styles.moreFeaturedLabel}>
                DevGuild Guild Projects — Join the Build
              </div>
            </div>
            <div className={styles.moreGridSmall}>
              <div className={styles.moreCardSm}>
                <div className={styles.mcTag}>Community</div>
                <h4>Meet the Guild</h4>
                <p>Find collaborators and build together.</p>
                <Link to="/#vision-mission">Explore →</Link>
              </div>
              <div className={styles.moreCardSm}>
                <div className={styles.mcTag}>Programs</div>
                <h4>Learning Library</h4>
                <p>Browse all sessions and workshops.</p>
                <Link to="/#programs">Browse →</Link>
              </div>
              <div className={styles.moreCardSm}>
                <div className={styles.mcTag}>FAQ</div>
                <h4>Got Questions?</h4>
                <p>Find answers to common questions.</p>
                <Link to="/#faq">Read FAQ →</Link>
              </div>
              <div className={styles.moreCardSm}>
                <div className={styles.mcTag}>Contact</div>
                <h4>Get in Touch</h4>
                <p>Partner with us or say hello.</p>
                <Link to="/contact">Contact →</Link>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ── PROJECT STORIES ───────────────────────────────────── */}
      <section className={styles.projectStories} aria-labelledby="project-stories-title">
        <div className={styles.projectStoriesHeading}>
          <h2 id="project-stories-title">PROJECT STORIES</h2>
        </div>

        <article className={styles.projectStory} id="aquanons-story">
          <div className={styles.projectStoryMedia}>
            <img src="/photos/aquanons-project.jpg" alt="AQUANONS team at AI Fest 2026" />
          </div>
          <div className={styles.projectStoryContent}>
            <span className={styles.projectStoryNumber}>01</span>
            <h3>AQUANONS</h3>
            <p>
              Aklan State University continues to make its mark in artificial intelligence and innovation as the
              AQUANONS team from the College of Computer Studies – ASU Kalibo secured 2nd Place in the School-Based
              Category of the 2026 AI Hackathon during AI Fest 2026, held at the Iloilo Convention Center from
              August 3–5, 2026.
            </p>
            <p>
              Competing against 47 teams from State Universities and Colleges (SUCs) across the country, the team first
              earned a coveted Top 10 spot before advancing to the final pitching round, where they ultimately emerged as
              the 2nd Place winner.
            </p>
            <p>
              The award-winning team is composed of Arnold R. Paghunasan, Daniel Joseph R. Orlina, Doreen Kay P. Lachica,
              Jade N. Salvador, and Lenard Angelo A. Olajay, under the guidance of their coaches, Miquel Von Oquendo and
              Edward Gumban.
            </p>
            <p>
              This remarkable achievement reflects Aklan State University's commitment to fostering innovation,
              developing future-ready talents, and empowering students to create AI-driven solutions that address
              real-world challenges.
            </p>
            <div className={styles.projectStoryLink}>
              <p>
                This is the AQUANONS project repository, where you can find the source code, documentation, and full project details.
              </p>
              <a
                className={styles.btnRed}
                href="https://github.com/Aquanons/AIHackathon2026_Aquanons_AqOne.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                View full project on GitHub ↗
              </a>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
