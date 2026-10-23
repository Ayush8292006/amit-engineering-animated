import { FlaskConical, Pill, TestTube, Factory, Droplets, Building2, Check } from 'lucide-react';
import { INDUSTRIES } from '../config/site';
import { PageBanner, SectionTitle, CtaBand, usePageMeta } from '../components/common';
import { Reveal } from '../components/motion';

const ICONS = [FlaskConical, Pill, TestTube, Factory, Droplets, Building2];

const WHY = [
  { title: 'Material discipline', text: 'MS, SS304 and SS316 chosen to suit the process media, with identification kept from receipt to dispatch.' },
  { title: 'Drawing-driven execution', text: 'Work is done against approved GA drawings and specifications, with clarifications closed before fabrication.' },
  { title: 'Shutdown-ready planning', text: 'Fabrication and dispatch sequenced around erection windows and shutdown dates.' },
  { title: 'Safe working', text: 'PPE, hot-work control and housekeeping for every worker, in the shop and at site.' },
];

const Industries = () => {
  usePageMeta('Industries We Serve', 'Fabrication and erection for chemical, pharmaceutical, specialty chemical, process manufacturing, utilities and EPC projects.');

  return (
    <>
      <PageBanner title="Industries We Serve" image="/images/process-plant-night.jpg" />

      <section className="section">
        <div className="wrap">
          <SectionTitle kicker="Sectors" title="Where our equipment and structures go to work">
            Most of our work is for plants that handle chemicals, solvents, water and steam — where the right
            material and sound welding matter.
          </SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {INDUSTRIES.map((ind, idx) => {
              const Icon = ICONS[idx % ICONS.length];
              return (
                <Reveal key={ind.title} delay={(idx % 3) * 120} className="lift group relative overflow-hidden border border-line p-8 hover:border-orange bg-white">
                  <span className="bar-grow" />
                  <span className="w-16 h-16 bg-navy text-white flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-orange group-hover:-rotate-6 group-hover:scale-110">
                    <Icon size={30} strokeWidth={1.5} />
                  </span>
                  <h3 className="text-[19px] mb-2 transition-colors group-hover:text-orange">{ind.title}</h3>
                  <p className="text-muted text-[14px]">{ind.desc}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-soft">
        <div className="wrap grid lg:grid-cols-2">
          <Reveal variant="wipe" className="zoom-wrap">
            <img src="/images/distillation-columns.jpg" alt="Process plant columns" className="w-full h-[320px] lg:h-full object-cover" loading="lazy" />
          </Reveal>
          <Reveal variant="right" delay={150} className="py-14 lg:py-20 lg:pl-14">
            <span className="kicker">Why Choose Us</span>
            <h2 className="heading">Built for process plant conditions</h2>
            <span className="heading-line mb-8" />
            <ul className="space-y-6">
              {WHY.map((w, idx) => (
                <Reveal as="li" key={w.title} delay={250 + idx * 130} variant="left" className="group flex gap-4">
                  <span className="pop w-9 h-9 shrink-0 rounded-full bg-orange text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-125">
                    <Check size={18} />
                  </span>
                  <div>
                    <h3 className="text-[17px] mb-1">{w.title}</h3>
                    <p className="text-muted text-[14px]">{w.text}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
};

export default Industries;
