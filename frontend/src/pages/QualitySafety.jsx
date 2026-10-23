import { Check } from 'lucide-react';
import { PageBanner, SectionTitle, CtaBand, usePageMeta } from '../components/common';
import { Reveal } from '../components/motion';

const INFRA = [
  { title: 'Workshop & Fabrication Bays', text: 'Bays for plate work, structural fabrication and vessel assembly.', image: '/images/vessel-handling-shop.jpg' },
  { title: 'Machinery', text: 'Plate rolling, cutting, welding and forming equipment kept in working order.', image: '/images/plate-rolling-site.jpg' },
  { title: 'Material Handling', text: 'Overhead and mobile lifting for moving heavy components in the shop.', image: '/images/ss-reactor-lifting.jpg' },
  { title: 'SS & MS Work Areas', text: 'Separate areas for stainless and carbon steel, plus assembly and dispatch.', image: '/images/ss-reactors-workshop.jpg' },
];

const QUALITY = [
  ['Material identification', 'Material identified and traceable from receipt to dispatch, where specified.'],
  ['Dimensional checks', 'Fit-up, dimensional and visual checks against approved GA drawings.'],
  ['Welding control', 'Qualified welders, controlled procedures and inspection of weld quality.'],
  ['Testing & records', 'Hydro / leak testing as specified, with inspection records kept.'],
  ['Third-party inspection', 'Client or TPI inspection accommodated at agreed stages.'],
];

const SAFETY = [
  ['PPE', 'Helmets, safety shoes, gloves and eye protection on the shop floor and at site.'],
  ['Hot-work safety', 'Controlled welding, cutting and grinding with fire prevention.'],
  ['Lifting & rigging', 'Supervised lifts with checked slings, shackles and cranes.'],
  ['Housekeeping', 'Clean work areas and safe material storage, every day.'],
  ['Toolbox talks', 'Safety briefings for the crew before work starts.'],
];

const List = ({ items }) => (
  <ul className="space-y-4">
    {items.map(([t, d], idx) => (
      <Reveal as="li" variant="left" delay={250 + idx * 100} key={t} className="group flex gap-3">
        <Check size={20} className="text-orange shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-125" />
        <div>
          <span className="font-heading font-semibold text-navy transition-colors group-hover:text-orange">{t}</span>
          <p className="text-muted text-[14px]">{d}</p>
        </div>
      </Reveal>
    ))}
  </ul>
);

const QualitySafety = () => {
  usePageMeta('Quality, Safety & Infrastructure', 'Workshop infrastructure, quality checks and safety practice at Amit Engineering Co.');

  return (
    <>
      <PageBanner title="Quality & Safety" image="/images/ducting-inspection.jpg" />

      <section className="section">
        <div className="wrap">
          <SectionTitle kicker="Infrastructure" title="Our workshop and facilities" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INFRA.map((f, idx) => (
              <Reveal key={f.title} delay={idx * 120} className="lift group bg-soft">
                <div className="zoom-wrap">
                  <img src={f.image} alt={f.title} className="w-full h-48 object-cover" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="text-[17px] mb-2 transition-colors group-hover:text-orange">{f.title}</h3>
                  <p className="text-muted text-[14px]">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="wrap grid lg:grid-cols-2 gap-12">
          <Reveal variant="left" className="bg-white p-8 md:p-10 border-t-[3px] border-orange">
            <span className="kicker">Quality</span>
            <h2 className="heading">Checked before it leaves the shop</h2>
            <span className="heading-line mb-8" />
            <List items={QUALITY} />
          </Reveal>
          <Reveal variant="right" delay={150} className="bg-white p-8 md:p-10 border-t-[3px] border-navy">
            <span className="kicker">Safety</span>
            <h2 className="heading">Safe work, in the shop and at site</h2>
            <span className="heading-line mb-8" />
            <List items={SAFETY} />
          </Reveal>
        </div>
      </section>

      <CtaBand title="Want to visit our workshop?" text="Get in touch to fix a date for a shop visit or inspection." />
    </>
  );
};

export default QualitySafety;
