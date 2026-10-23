import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { PRODUCTS } from '../config/site';
import { PageBanner, SectionTitle, CtaBand, usePageMeta } from '../components/common';
import { Reveal } from '../components/motion';

const Products = () => {
  usePageMeta(
    'Products & Services',
    'Tanks and process equipment, process piping, skids, structural fabrication and mechanical erection by Amit Engineering Co.'
  );

  return (
    <>
      <PageBanner title="Products & Services" image="/images/ss-storage-tanks.jpg" />

      <section className="section">
        <div className="wrap">
          <SectionTitle kicker="Our Range" title="What we fabricate and erect">
            Five lines of work, all made to the client’s drawings and carried through from the shop floor to
            installation at site.
          </SectionTitle>

          <div className="space-y-10">
            {PRODUCTS.map((p, idx) => (
              <article key={p.slug} className="grid md:grid-cols-2 gap-0 bg-soft overflow-hidden">
                <Reveal variant="wipe" className={`zoom-wrap relative h-64 md:h-auto min-h-[300px] ${idx % 2 ? 'md:order-2' : ''}`}>
                  <Link to={`/products/${p.slug}`} className="absolute inset-0 block">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
                  </Link>
                </Reveal>
                <Reveal variant={idx % 2 ? 'left' : 'right'} delay={150} className="p-7 md:p-10 flex flex-col justify-center">
                  <span className="font-heading font-bold text-orange text-sm mb-2">0{idx + 1}</span>
                  <h3 className="text-2xl mb-3">{p.title}</h3>
                  <p className="text-muted mb-5">{p.summary}</p>
                  <ul className="grid sm:grid-cols-2 gap-2 mb-6">
                    {p.points.map((pt) => (
                      <li key={pt} className="group flex items-start gap-2 text-[14px] font-semibold text-navy">
                        <Check size={17} className="text-orange shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-125" /> {pt}
                      </li>
                    ))}
                  </ul>
                  <Link to={`/products/${p.slug}`} className="btn btn-primary self-start">
                    View Details <ArrowRight size={16} />
                  </Link>
                </Reveal>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
};

export default Products;
