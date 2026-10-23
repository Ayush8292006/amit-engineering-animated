import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS, CLIENTS } from '../config/site';
import { PageBanner, SectionTitle, CtaBand, usePageMeta } from '../components/common';
import { Reveal } from '../components/motion';

const Projects = () => {
  usePageMeta('Projects', 'Photos of tanks, reactors, structures and erection work carried out by Amit Engineering Co.');

  const tags = ['All', ...Array.from(new Set(PROJECTS.map((p) => p.tag)))];
  const [tag, setTag] = useState('All');
  const [open, setOpen] = useState(-1);
  const list = tag === 'All' ? PROJECTS : PROJECTS.filter((p) => p.tag === tag);

  useEffect(() => {
    if (open < 0) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(-1);
      if (e.key === 'ArrowRight') setOpen((v) => (v + 1) % list.length);
      if (e.key === 'ArrowLeft') setOpen((v) => (v - 1 + list.length) % list.length);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, list.length]);

  return (
    <>
      <PageBanner title="Projects" image="/images/steel-structure-erection.jpg" />

      <section className="section">
        <div className="wrap">
          <SectionTitle kicker="Our Work" title="Photos from the shop and site">
            A selection of equipment, structures and erection jobs we have carried out.
          </SectionTitle>

          <Reveal className="flex flex-wrap gap-2 mb-8">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setTag(t)}
                className={`px-4 py-2 text-[14px] font-heading font-semibold border transition-all duration-300 active:scale-95 ${
                  tag === t ? 'bg-orange border-orange text-white' : 'border-line text-navy hover:border-orange hover:text-orange'
                }`}
              >
                {t}
              </button>
            ))}
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {list.map((p, idx) => (
              <Reveal as="button" variant="zoom" key={`${tag}-${p.image}`} delay={(idx % 4) * 90} onClick={() => setOpen(idx)} className="text-left group">
                <div className="zoom-wrap relative aspect-[4/3] bg-soft">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
                  <span className="absolute inset-0 bg-navy-dark/0 group-hover:bg-navy-dark/30 group-active:bg-navy-dark/30 transition-colors duration-500" />
                  <span className="absolute left-0 bottom-0 h-[3px] w-full bg-orange scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                </div>
                <div className="pt-3 pb-1">
                  <span className="text-[12px] font-semibold uppercase tracking-wide text-orange">{p.tag}</span>
                  <h3 className="text-[15px] mt-0.5 transition-colors group-hover:text-orange">{p.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {CLIENTS.length > 0 && (
        <section className="section bg-soft">
          <div className="wrap">
            <SectionTitle kicker="Clientele" title="Companies we have worked with" center />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {CLIENTS.map((c) => (
                <Reveal key={c.name} variant="zoom" className="lift bg-white h-28 flex items-center justify-center p-4 border border-line">
                  {c.logo ? <img src={c.logo} alt={c.name} className="max-h-16 w-auto" loading="lazy" /> : <span className="font-heading font-semibold text-navy text-center">{c.name}</span>}
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {open >= 0 && list[open] && (
        <div className="lb-bg fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4" onClick={() => setOpen(-1)}>
          <button className="absolute top-4 right-4 text-white p-2" aria-label="Close" onClick={() => setOpen(-1)}>
            <X size={30} />
          </button>
          <button
            className="absolute left-2 md:left-6 text-white p-2"
            aria-label="Previous"
            onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + list.length) % list.length); }}
          >
            <ChevronLeft size={36} />
          </button>
          <figure key={open} className="lb-img max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img src={list[open].image} alt={list[open].title} className="max-h-[80vh] w-auto mx-auto" />
            <figcaption className="text-white text-center mt-3">{list[open].title}</figcaption>
          </figure>
          <button
            className="absolute right-2 md:right-6 text-white p-2"
            aria-label="Next"
            onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % list.length); }}
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}

      <CtaBand />
    </>
  );
};

export default Projects;
