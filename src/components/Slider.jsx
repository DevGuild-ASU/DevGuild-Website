// @ts-check

import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './Slider.module.css';

/**
 * @typedef {{ src: string, alt?: string, title?: string }} SlideItem
 */

/**
 * @param {{
 *   slides: (string | SlideItem)[];
 *   autoplay?: boolean;
 *   interval?: number;
 *   aspectRatio?: string;
 *   showArrows?: boolean;
 *   showDots?: boolean;
 *   ariaLabel?: string;
 * }} props
 */
export default function Slider({
  slides,
  autoplay = true,
  interval = 4000,
  aspectRatio = '16 / 10',
  showArrows = true,
  showDots = true,
  ariaLabel = 'Image Carousel'
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef(0);
  const totalSlides = slides.length;

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (/** @type {number} */ index) => {
    setCurrentIndex(index);
  };

  // Autoplay
  useEffect(() => {
    if (!autoplay || isPaused || totalSlides <= 1) return;

    const timer = setInterval(() => {
      goToNext();
    }, interval);

    return () => clearInterval(timer);
  }, [autoplay, isPaused, interval, totalSlides, goToNext]);

  // Touch swipe handling
  const handleTouchStart = (/** @type {React.TouchEvent} */ e) => {
    touchStartXRef.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (/** @type {React.TouchEvent} */ e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartXRef.current;
    if (Math.abs(diff) > 40) {
      if (diff < 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    setIsPaused(false);
  };

  // Keyboard navigation
  const handleKeyDown = (/** @type {React.KeyboardEvent} */ e) => {
    if (e.key === 'ArrowLeft') {
      goToPrev();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  };

  if (!slides || totalSlides === 0) return null;

  return (
    <div
      className={styles.sliderContainer}
      style={{ aspectRatio }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label={ariaLabel}
      aria-roledescription="carousel"
    >
      <div className={styles.slidesWrapper}>
        {slides.map((item, index) => {
          const src = typeof item === 'string' ? item : item.src;
          const alt = (typeof item !== 'string' && item.alt) ? item.alt : `Slide ${index + 1}`;
          const isActive = index === currentIndex;

          return (
            <div
              key={`${src}-${index}`}
              className={`${styles.slide} ${isActive ? styles.slideActive : ''}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${index + 1} of ${totalSlides}`}
              aria-hidden={!isActive}
            >
              <img
                src={src}
                alt={alt}
                className={styles.slideImage}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          );
        })}
      </div>

      {showArrows && totalSlides > 1 && (
        <>
          <button
            type="button"
            className={`${styles.arrowBtn} ${styles.prevBtn}`}
            onClick={goToPrev}
            aria-label="Previous slide"
          >
            &#8249;
          </button>
          <button
            type="button"
            className={`${styles.arrowBtn} ${styles.nextBtn}`}
            onClick={goToNext}
            aria-label="Next slide"
          >
            &#8250;
          </button>
        </>
      )}

      {showDots && totalSlides > 1 && (
        <div className={styles.dotsWrapper} role="tablist" aria-label="Slides navigation">
          {slides.map((_, index) => (
            <button
              key={`dot-${index}`}
              type="button"
              className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={index === currentIndex}
              role="tab"
            />
          ))}
        </div>
      )}
    </div>
  );
}
