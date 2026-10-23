import { useEffect, useState } from 'react';
import { COMPANY } from '../config/site';

/* Opening screen: logo + progress line, then the whole screen slides up and the page opens.
   Plays once per page load (not on every route change). */

const reduceMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let pending = typeof window !== 'undefined' && !reduceMotion;

// Lock the page right away, before the first paint, so nothing animates under the screen.
if (pending) document.documentElement.classList.add('intro-lock');

const SHOW_MS = 2000; // time the logo screen stays
const LIFT_MS = 1100; // time the slide-up takes

const IntroLoader = () => {
  const [phase, setPhase] = useState(pending ? 'show' : 'gone'); // show -> lift -> gone

  useEffect(() => {
    if (!pending) return undefined;
    const t1 = setTimeout(() => setPhase('lift'), SHOW_MS);
    const t2 = setTimeout(() => {
      pending = false;
      document.documentElement.classList.remove('intro-lock');
      window.dispatchEvent(new Event('intro:done'));
      setPhase('gone');
    }, SHOW_MS + LIFT_MS);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (phase === 'gone') return null;

  return (
    <div className={`intro ${phase === 'lift' ? 'lift' : ''}`} aria-hidden="true">
      <div className="intro-accent" />
      <div className="intro-panel">
        <div className="intro-logo">
          <img src={COMPANY.logo} alt="" />
        </div>
        <div className="intro-bar" />
        <div className="intro-text">Fabrication · Piping · Structures · Erection</div>
      </div>
    </div>
  );
};

export default IntroLoader;
