import { Check, ShieldCheck, Ruler, CalendarClock } from 'lucide-react';
import { COMPANY, PROCESS, STATS } from '../config/site';
import { PageBanner, SectionTitle, CtaBand, usePageMeta } from '../components/common';
import { Reveal, CountUp } from '../components/motion';

const VALUES = [
  { Icon: Ruler, title: 'Quality you can inspect', text: 'Dimensional checks, weld inspection and material identification at every stage — open to client and TPI inspection.' },
  { Icon: ShieldCheck, title: 'Safety on every job', text: 'PPE, controlled hot work and clean housekeeping, in the shop and at site.' },
  { Icon: CalendarClock, title: 'Work to the schedule', text: 'Fabrication and dispatch planned around the site’s erection dates and shutdown windows.' },
];

const About = () => {
  usePageMeta('About Us', 'About Amit Engineering Co. — fabrication and mechanical execution for chemical, pharmaceutical and process plants.');

  return (
    <>
      <PageBanner title="About Us" image="/images/industrial-shed-columns.jpg" />

      <section className="section">
        <div className="wrap grid lg:grid-cols-2 gap-12 items-center">
          <Reveal variant="left">
            <span className="kicker">Who We Are</span>
            <h2 className="heading">{COMPANY.name}</h2>
            <span className="heading-line mb-6" />
            <div className="prose-body">
              <p>
                {COMPANY.name} is a fabrication and mechanical execution company working with chemical,
                pharmaceutical, specialty chemical and process manufacturing plants, and with the EPC contractors who
                build them.
                {COMPANY.established && ` We have been in this work since ${COMPANY.established}.`}
              </p>
              <p>
                Our work covers storage tanks and process equipment, process and utility piping, skids and
                assemblies, structural steel, and the erection and installation of all of it at site. We also take
                up plant modifications and shutdown jobs where the time window is fixed.
              </p>
              <p>
                We work from the client’s drawings and specifications. Open points are cleared before fabrication
                starts, materials are kept traceable, and each item is inspected and tested before dispatch.
              </p>
            </div>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mt-6">
              {['Tanks, reactors & vessels', 'Process & utility piping', 'Structural steel & sheds', 'Erection & shutdown work'].map((t) => (
                <li key={t} className="group flex items-start gap-2 text-[14px] font-semibold text-navy">
                  <Check size={18} className="text-orange shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-125" /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            <Reveal variant="wipe" className="zoom-wrap">
              <img src="/images/ss-reactor-lifting.jpg" alt="SS reactor being lifted" className="w-full h-[300px] md:h-[420px] object-cover" loading="lazy" />
            </Reveal>
            <div className="flex flex-col gap-4 pt-10">
              <Reveal variant="wipe" delay={200} className="zoom-wrap">
                <img src="/images/process-structure-plant.jpg" alt="Process structure" className="w-full h-[200px] md:h-[260px] object-cover" loading="lazy" />
              </Reveal>
              <Reveal variant="wipe" delay={400} className="zoom-wrap">
                <img src="/images/plate-rolling-site.jpg" alt="Plate rolling" className="w-full h-[120px] md:h-[150px] object-cover" loading="lazy" />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {STATS.length > 0 && (
        <section className="bg-orange">
          <div className="wrap py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((s, idx) => (
              <Reveal key={s.label} delay={idx * 120}>
                <div className="font-heading text-4xl font-bold text-white"><CountUp value={s.value} /></div>
                <div className="text-white/90 text-[14px] mt-1">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className="section bg-soft">
        <div className="wrap">
          <SectionTitle kicker="Our Commitment" title="What clients can expect from us" center />
          <div className="grid md:grid-cols-3 gap-7">
            {VALUES.map(({ Icon, title, text }, idx) => (
              <Reveal key={title} delay={idx * 140} className="lift group bg-white p-8 border-t-[3px] border-orange">
                <Icon size={38} strokeWidth={1.5} className="text-orange mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" />
                <h3 className="text-[19px] mb-2">{title}</h3>
                <p className="text-muted text-[14px]">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionTitle kicker="How We Work" title="From drawing to installation" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-line">
            {PROCESS.map((s, idx) => (
              <Reveal key={s.title} delay={idx * 120} className="group p-7 border-b md:border-r border-line last:border-r-0 hover:bg-soft transition-colors duration-300">
                <span className="font-heading font-bold text-[44px] leading-none text-orange/25 block mb-4 transition-all duration-500 group-hover:text-orange group-hover:translate-x-2">0{idx + 1}</span>
                <h3 className="text-[18px] mb-2">{s.title}</h3>
                <p className="text-muted text-[14px]">{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
};

export default About;
