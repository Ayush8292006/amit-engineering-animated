import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Check, ChevronLeft, ChevronRight,
  FileText, Layers, ClipboardCheck, HardHat,
  FlaskConical, Pill, TestTube, Factory, Droplets, Building2,
} from 'lucide-react';
import { COMPANY, PRODUCTS, PROCESS, INDUSTRIES, PROJECTS, CLIENTS, STATS } from '../config/site';
import { SectionTitle, CtaBand, usePageMeta } from '../components/common';
import { Reveal, CountUp } from '../components/motion';

const SLIDES = [
  {
    image: '/images/multi-level-structure.jpg',
    kicker: 'Structural Fabrication',
    title: 'Steel structures, platforms and pipe racks for process plants',
    text: 'Fabricated in our shop and erected at your site, to the approved drawings.',
  },
  {
    image: '/images/ss-reactors-workshop.jpg',
    kicker: 'Tanks & Process Equipment',
    title: 'MS & SS tanks, reactors and vessels built to your drawings',
    text: 'Storage tanks, jacketed reactors, receivers and custom equipment — inspected and tested before dispatch.',
  },
  {
    image: '/images/vessel-erection-crane.jpg',
    kicker: 'Mechanical Execution',
    title: 'Erection, installation and shutdown work at site',
    text: 'Rigging, lifting, alignment and site fabrication by our own teams.',
  },
];

const FEATURES = [
  { Icon: FileText, title: 'Drawing-Driven Work', text: 'Every job is made to the approved GA drawing, specification and BOQ.' },
  { Icon: Layers, title: 'MS & SS Fabrication', text: 'IS 2062 carbon steel, SS304, SS316 and SS316L, with material identification.' },
  { Icon: ClipboardCheck, title: 'Inspection & Testing', text: 'Dimensional checks, weld inspection and hydro testing before dispatch.' },
  { Icon: HardHat, title: 'Own Site Teams', text: 'Erection, installation and shutdown jobs handled by our own crew.' },
];

const INDUSTRY_ICONS = [FlaskConical, Pill, TestTube, Factory, Droplets, Building2];

const HeroSlider = () => {
  const [i, setI] = useState(0);
  const n = SLIDES.length;

  useEffect(() => {
    const t = setTimeout(() => setI((v) => (v + 1) % n), 6500);
    return () => clearTimeout(t);
  }, [i, n]);

  return (
    <section className="relative bg-navy-dark h-[560px] md:h-[620px] overflow-hidden">
      {SLIDES.map((s, idx) => (
        <div
          key={s.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === i ? 'hero-active opacity-100' : 'opacity-0 pointer-events-none'}`}
          aria-hidden={idx !== i}
        >
          <div className="parallax absolute inset-x-0 -top-[140px] bottom-0">
            <img src={s.image} alt={s.kicker} className="hero-img w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/75 to-navy-dark/30" />
          <div className="relative wrap h-full flex items-center">
            <div className="max-w-2xl pb-16 md:pb-10">
              <span className={`${idx === i ? 'enter-left' : ''} inline-block bg-orange text-white font-heading text-[13px] font-semibold uppercase tracking-wider px-3 py-1 mb-5`} style={{ '--d': '150ms' }}>
                {s.kicker}
              </span>
              <h1 className={`${idx === i ? 'enter' : ''} text-white text-[30px] sm:text-4xl md:text-[46px] leading-tight mb-5`} style={{ '--d': '300ms' }}>{s.title}</h1>
              <p className={`${idx === i ? 'enter' : ''} text-white/80 text-base md:text-lg mb-8 max-w-xl`} style={{ '--d': '480ms' }}>{s.text}</p>
              <div className={`${idx === i ? 'enter' : ''} flex flex-wrap gap-3`} style={{ '--d': '650ms' }}>
                <Link to="/products" className="btn btn-primary">
                  Our Services <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn btn-outline">Request a Quote</Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-24 md:bottom-28 left-0 right-0">
        <div className="enter-fade wrap flex items-center gap-3" style={{ '--d': '900ms' }}>
          <button onClick={() => setI((i - 1 + n) % n)} className="w-10 h-10 border border-white/40 text-white flex items-center justify-center hover:bg-orange hover:border-orange active:scale-90 transition-all duration-200" aria-label="Previous slide">
            <ChevronLeft size={18} />
          </button>
          <button onClick={() => setI((i + 1) % n)} className="w-10 h-10 border border-white/40 text-white flex items-center justify-center hover:bg-orange hover:border-orange active:scale-90 transition-all duration-200" aria-label="Next slide">
            <ChevronRight size={18} />
          </button>
          <div className="flex gap-2 ml-3">
            {SLIDES.map((s, idx) => (
              <button
                key={s.image}
                onClick={() => setI(idx)}
                className={`h-[3px] transition-all duration-500 ${idx === i ? 'w-9 bg-orange' : 'w-5 bg-white/50 hover:bg-white'}`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  usePageMeta(
    '',
    'Amit Engineering Co. — MS & SS tanks, reactors, process piping, structural steel and mechanical erection for chemical, pharmaceutical and process plants.'
  );

  return (
    <>
      <HeroSlider />

      {/* Feature boxes, overlapping the slider */}
      <section className="relative z-10 -mt-16 md:-mt-20">
        <div className="wrap">
         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
          {FEATURES.map(({ Icon, title, text }, idx) => (
            <Reveal
              key={title}
              delay={idx * 120}
              className="relative p-7 bg-white group hover:bg-navy active:bg-navy transition-colors duration-300 overflow-hidden"
            >
              <span className="bar-grow" />
              <span className="absolute top-5 right-6 font-heading font-bold text-[40px] leading-none text-soft group-hover:text-white/10 transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-110">
                0{idx + 1}
              </span>
              <Icon size={36} className="text-orange mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" strokeWidth={1.6} />
              <h3 className="text-[18px] mb-2 transition-colors group-hover:text-white">{title}</h3>
              <p className="text-muted text-[14px] transition-colors group-hover:text-white/70">{text}</p>
            </Reveal>
          ))}
         </div>
        </div>
      </section>

      {/* About */}
      <section className="section">
        <div className="wrap grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-5 gap-4">
            <Reveal variant="wipe" className="col-span-3 zoom-wrap">
              <img src="/images/reactor-installed-plant.jpg" alt="Reactor installed in plant" className="h-[380px] md:h-[440px] w-full object-cover" loading="lazy" />
            </Reveal>
            <div className="col-span-2 flex flex-col gap-4">
              <Reveal variant="wipe" delay={200} className="zoom-wrap">
                <img src="/images/fabricated-beams.jpg" alt="Fabricated beams" className="h-[182px] md:h-[212px] w-full object-cover" loading="lazy" />
              </Reveal>
              <Reveal variant="zoom" delay={450} className="lift bg-orange text-white p-5 flex-1 flex flex-col justify-center">
                <span className="font-heading font-bold text-xl leading-snug">Shop + Site</span>
                <span className="text-[13px] text-white/90 mt-1">Fabrication and erection under one team</span>
              </Reveal>
            </div>
          </div>

          <Reveal variant="right">
            <span className="kicker">About {COMPANY.shortName}</span>
            <h2 className="heading">Fabrication and mechanical work for chemical, pharma and process plants</h2>
            <span className="heading-line mb-6" />
            <div className="prose-body">
              <p>
                {COMPANY.name} takes up fabrication and site execution for process industries — storage tanks,
                reactors and vessels, process and utility piping, structural steel, and the erection of all of it at
                site.
              </p>
              <p>
                We work from the client’s or consultant’s drawings, keep the material traceable, inspect at every
                stage and plan our dispatch around the site schedule — whether it is a new plant or a shutdown with
                a fixed window.
              </p>
            </div>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 my-6">
              {['MS, SS304 & SS316 fabrication', 'In-house cutting, rolling & welding', 'Hydro & leak testing', 'Erection and shutdown teams'].map((t) => (
                <li key={t} className="group flex items-start gap-2 text-[14px] font-semibold text-navy">
                  <Check size={18} className="text-orange shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-125" /> {t}
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn btn-navy">
              More About Us <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-soft">
        <div className="wrap">
          <SectionTitle kicker="What We Do" title="Products & Services" center>
            Fabrication and erection services for plants that run on tanks, pipes and steel.
          </SectionTitle>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {PRODUCTS.map((p, idx) => (
              <Reveal as="article" key={p.slug} delay={(idx % 3) * 130} className="lift bg-white group flex flex-col">
                <Link to={`/products/${p.slug}`} className="zoom-wrap block h-56">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
                </Link>
                <div className="p-6 border-b-[3px] border-transparent group-hover:border-orange transition-colors flex-1 flex flex-col">
                  <h3 className="text-[19px] mb-2">
                    <Link to={`/products/${p.slug}`} className="hover:text-orange">{p.title}</Link>
                  </h3>
                  <p className="text-muted text-[14px] mb-4">{p.summary}</p>
                  <ul className="space-y-1.5 mb-5">
                    {p.points.slice(0, 3).map((pt) => (
                      <li key={pt} className="flex items-center gap-2 text-[14px]">
                        <span className="w-1.5 h-1.5 bg-orange shrink-0" /> {pt}
                      </li>
                    ))}
                  </ul>
                  <Link to={`/products/${p.slug}`} className="mt-auto inline-flex items-center gap-1.5 font-heading font-semibold text-[14px] text-orange hover:gap-3 transition-all duration-300">
                    Read More <ArrowRight size={15} />
                  </Link>
                </div>
              </Reveal>
            ))}

            <Reveal as="article" variant="zoom" delay={200} className="lift bg-navy text-white p-8 flex flex-col justify-center">
              <h3 className="text-white text-[22px] mb-3">Something not listed?</h3>
              <p className="text-white/75 mb-6">
                We also take up custom fabrication to client drawings — hoppers, ducting, cyclones, stacks, chutes and
                more. Share the drawing and we will review it.
              </p>
              <Link to="/contact" className="btn btn-primary self-start">
                Share Your Drawing <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Work process */}
      <section className="relative bg-navy">
        <div className="absolute inset-0 overflow-hidden">
          <img src="/images/plate-rolling-site.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" loading="lazy" />
        </div>
        <div className="relative wrap section">
          <SectionTitle kicker="How We Work" title="Our Work Process" light>
            A straightforward sequence, the same for a single tank or a full plant package.
          </SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((s, idx) => (
              <Reveal key={s.title} delay={idx * 140} className="lift group border border-white/15 hover:border-orange p-7 bg-navy-dark/40">
                <span className="pop flex items-center justify-center w-12 h-12 rounded-full bg-orange text-white font-heading font-bold text-lg mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[360deg]">
                  {idx + 1}
                </span>
                <h3 className="text-white text-[18px] mb-2">{s.title}</h3>
                <p className="text-white/70 text-[14px]">{s.desc}</p>
              </Reveal>
            ))}
          </div>

          {STATS.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 pt-10 border-t border-white/15">
              {STATS.map((s, idx) => (
                <Reveal key={s.label} delay={idx * 120}>
                  <div className="font-heading text-4xl font-bold text-orange"><CountUp value={s.value} /></div>
                  <div className="text-white/75 text-[14px] mt-1">{s.label}</div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Industries */}
      <section className="section">
        <div className="wrap">
          <SectionTitle kicker="Sectors" title="Industries We Serve" center />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
            {INDUSTRIES.map((ind, idx) => {
              const Icon = INDUSTRY_ICONS[idx % INDUSTRY_ICONS.length];
              return (
                <Reveal key={ind.title} delay={(idx % 3) * 110} className="group bg-white p-7 flex gap-5 hover:bg-soft transition-colors duration-300">
                  <span className="w-14 h-14 shrink-0 bg-orange/10 text-orange flex items-center justify-center transition-all duration-500 group-hover:bg-orange group-hover:text-white group-hover:-rotate-6 group-hover:scale-110">
                    <Icon size={28} strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="text-[17px] mb-1.5 transition-colors group-hover:text-orange">{ind.title}</h3>
                    <p className="text-muted text-[14px]">{ind.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent work */}
      <section className="section bg-soft">
        <div className="wrap">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <SectionTitle kicker="From Our Sites" title="Recent Work" />
            <Reveal variant="right" delay={200} className="self-start md:mb-12">
              <Link to="/projects" className="btn btn-navy">
                View All Projects <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {PROJECTS.slice(0, 8).map((p, idx) => (
              <Reveal as="figure" variant="zoom" key={p.image} delay={(idx % 4) * 100} className="relative group zoom-wrap aspect-square bg-navy">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
                <span className="absolute inset-0 bg-orange/0 group-hover:bg-orange/25 group-active:bg-orange/25 transition-colors duration-500" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-dark/90 to-transparent p-3 pt-10 text-white text-[13px] font-semibold transition-transform duration-500 group-hover:-translate-y-1">
                  {p.title}
                </figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {CLIENTS.length > 0 && (
        <section className="py-14 border-b border-line">
          <div className="wrap">
            <Reveal as="h3" className="text-center text-[20px] mb-8">Companies That Trust Our Work</Reveal>
            <Reveal delay={150} variant="fade" className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
              {CLIENTS.map((c) =>
                c.logo ? (
                  <img key={c.name} src={c.logo} alt={c.name} className="h-12 w-auto grayscale hover:grayscale-0 transition" loading="lazy" />
                ) : (
                  <span key={c.name} className="font-heading font-semibold text-muted">{c.name}</span>
                )
              )}
            </Reveal>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
};

export default Home;
