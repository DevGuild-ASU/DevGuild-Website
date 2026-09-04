// @ts-check

import Slider from '../components/Slider.jsx';
import styles from './Album.module.css';

export default function Album() {
  const featuredSlides = [
    { src: '/photos/featured-cover.jpg', alt: 'DevGuild DG featured cover 1' },
    { src: '/photos/featured-cover-2.jpg', alt: 'DevGuild DG featured cover 2' },
    { src: '/photos/featured-cover-3.jpg', alt: 'DevGuild DG featured cover 3' }
  ];

  const libraryItems = [
    { src: '/photos/acquaintance-party.png', alt: 'DevGuild DG members collaborating outdoors', label: 'Community sessions' },
    { src: '/photos/featured-cover.jpg', alt: 'Students presenting a project', label: 'Project showcases' },
    { src: '/photos/featured-cover-2.jpg', alt: 'Technology event finalists', label: 'Milestones' },
    { src: '/photos/acquaintance-party.png', alt: 'Guild members learning together', label: 'Build days' },
    { src: '/photos/handa360/finalists-photo.jpg', alt: 'Developer event', label: 'Partners and events' },
    { src: '/photos/featured-cover.jpg', alt: 'DevGuild community', label: 'Guild memories' },
    { src: '/photos/handa/handa-presentation.jpg', alt: 'Handa 360 project presentation', label: 'Handa 360', href: '#handa-album' }
  ];

  const aquanonsSlides = [
    { src: '/photos/aquanons/team-laptop.jpg', alt: 'AQUANONS team presenting the AqOne project on a laptop' },
    { src: '/photos/aquanons/team-collaboration.jpg', alt: 'AQUANONS team collaborating during AI Fest 2026' },
    { src: '/photos/aquanons/doreen-presentation.jpg', alt: 'AQUANONS team member presenting on stage' },
    { src: '/photos/aquanons/team-demo.jpg', alt: 'AQUANONS team demonstrating their project' },
    { src: '/photos/aquanons/team-pitch.jpg', alt: 'AQUANONS team pitching at AI Fest 2026' },
    { src: '/photos/aquanons/ai-fest-selfie.jpg', alt: 'AQUANONS team selfie at AI Fest 2026' },
    { src: '/photos/aquanons/ai-fest-team.jpg', alt: 'AQUANONS team at the AI Fest venue' },
    { src: '/photos/aquanons/team-portrait.jpg', alt: 'AQUANONS team portrait' },
    { src: '/photos/aquanons/project-poster.jpg', alt: 'AQUANONS project poster at AI Fest 2026' }
  ];

  const tabangSlides = [
    { src: '/photos/tabang/presentation.jpg', alt: 'TABANG project presentation at Komsai HackReady 2026' },
    { src: '/photos/tabang/team-discussion.jpg', alt: 'TABANG team discussing their project' },
    { src: '/photos/tabang/team-session.jpg', alt: 'TABANG team attending a hackathon session' },
    { src: '/photos/tabang/finalists.jpg', alt: 'TABANG team finalists at Komsai HackReady 2026' }
  ];

  const handaSlides = [
    { src: '/photos/handa/vibe-coders.jpg', alt: 'Handa 360 event presentation with The Vibe Coders 67' },
    { src: '/photos/handa/question-and-answer.jpg', alt: 'Handa 360 question and answer session' },
    { src: '/photos/handa/handa-presentation.jpg', alt: 'Handa 360 disaster preparedness presentation' }
  ];

  return (
    <div>
      {/* ── FEATURED COVER CAROUSEL ───────────────────────────── */}
      <section className={styles.featuredSection} aria-label="Featured Cover Carousel">
        <Slider
          slides={featuredSlides}
          aspectRatio="1.46 / 1"
          ariaLabel="Featured covers"
        />
      </section>

      {/* ── ALBUM LIBRARY ─────────────────────────────────────── */}
      <section className={styles.librarySection} aria-labelledby="library-heading">
        <h1 id="library-heading" className={styles.libraryTitle}>
          Album <em>library.</em>
        </h1>

        <div className={styles.galleryGrid}>
          {libraryItems.map((item, idx) => {
            const CardTag = item.href ? 'a' : 'div';
            const linkProps = item.href ? { href: item.href } : {};

            return (
              <CardTag
                key={`${item.label}-${idx}`}
                className={styles.galleryCard}
                {...linkProps}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className={styles.galleryImage}
                  loading="lazy"
                />
                <span className={styles.galleryLabel}>{item.label}</span>
              </CardTag>
            );
          })}
        </div>
      </section>

      {/* ── AQUANONS ALBUM ────────────────────────────────────── */}
      <section className={styles.projectAlbumSection} aria-labelledby="aquanons-album-title">
        <div className={`${styles.albumHeading} ${styles.headingBlue}`}>
          <h2 id="aquanons-album-title">AQUANONS</h2>
        </div>
        <Slider
          slides={aquanonsSlides}
          aspectRatio="1.46 / 1"
          ariaLabel="AQUANONS project photo gallery"
        />
      </section>

      {/* ── TABANG ALBUM ──────────────────────────────────────── */}
      <section className={styles.projectAlbumSection} aria-labelledby="tabang-album-title">
        <div className={`${styles.albumHeading} ${styles.headingGreen}`}>
          <h2 id="tabang-album-title">TABANG</h2>
        </div>
        <Slider
          slides={tabangSlides}
          aspectRatio="1.46 / 1"
          ariaLabel="TABANG project photo gallery"
        />
      </section>

      {/* ── HANDA 360 ALBUM ───────────────────────────────────── */}
      <section
        className={styles.projectAlbumSection}
        id="handa-album"
        aria-labelledby="handa-album-title"
      >
        <div className={`${styles.albumHeading} ${styles.headingGreen}`}>
          <h2 id="handa-album-title">HANDA 360</h2>
        </div>
        <Slider
          slides={handaSlides}
          aspectRatio="1.46 / 1"
          ariaLabel="HANDA 360 project photo gallery"
        />
      </section>
    </div>
  );
}