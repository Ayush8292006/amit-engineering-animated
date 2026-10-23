import { useEffect, useRef, useState } from 'react';

/* True while the opening screen is still covering the page. */
const introActive = () => document.documentElement.classList.contains('intro-lock');

/* Runs `start` once the opening screen is gone (or right away). Returns a cleanup. */
const afterIntro = (start) => {
  if (!introActive()) {
    start();
    return () => {};
  }
  window.addEventListener('intro:done', start, { once: true });
  return () => window.removeEventListener('intro:done', start);
};

/**
 * Scroll reveal. Wrap anything; it animates in once when it enters the screen.
 *   variant: up | left | right | zoom | fade | wipe
 *   delay:   ms, use it to stagger cards in a grid
 *   as:      the HTML tag to render (div, li, article, tr, ...)
 */
export const Reveal = ({
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  className = '',
  style,
  children,
  ...rest
}) => {
  const ref = useRef(null);
  // Very old browsers without IntersectionObserver just show everything.
  const [shown, setShown] = useState(() => typeof window !== 'undefined' && !('IntersectionObserver' in window));

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) return undefined;
    let io;
    const stopWaiting = afterIntro(() => {
      io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -6% 0px' }
      );
      io.observe(el);
    });
    return () => {
      stopWaiting();
      if (io) io.disconnect();
    };
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ '--rv-d': `${delay}ms`, ...style }}
      className={`rv rv-${variant} ${shown ? 'rv-in' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
};

/* Number that counts up when it scrolls into view. "15+" -> counts 0..15 then shows "+". */
export const CountUp = ({ value, duration = 1600 }) => {
  const text = String(value);
  const match = text.match(/^(\D*)([\d,.]+)(.*)$/);
  const ref = useRef(null);
  const [n, setN] = useState(0);

  const target = match ? parseFloat(match[2].replace(/,/g, '')) : 0;
  const decimals = match && match[2].includes('.') ? match[2].split('.')[1].length : 0;

  useEffect(() => {
    const el = ref.current;
    if (!el || !match || !('IntersectionObserver' in window)) return undefined;
    let raf;
    let io;
    const stopWaiting = afterIntro(() => {
      io = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          io.disconnect();
          const t0 = performance.now();
          const tick = (now) => {
            const p = Math.min((now - t0) / duration, 1);
            setN(target * (1 - Math.pow(1 - p, 3)));
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
        },
        { threshold: 0.4 }
      );
      io.observe(el);
    });
    return () => {
      stopWaiting();
      if (io) io.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);

  if (!match) return <span>{text}</span>;
  return (
    <span ref={ref}>
      {match[1]}
      {n.toLocaleString('en-IN', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {match[3]}
    </span>
  );
};

/* Writes scroll position to CSS variables (--sy px, --sp 0..1) and draws the top progress bar. */
export const ScrollEffects = () => {
  useEffect(() => {
    const root = document.documentElement;
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      root.style.setProperty('--sy', String(Math.round(y)));
      root.style.setProperty('--sp', max > 0 ? (y / max).toFixed(4) : '0');
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return <div className="scroll-bar" aria-hidden="true" />;
};
