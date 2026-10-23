import { Link, NavLink, useParams } from 'react-router-dom';
import { Check, ChevronRight, Phone, Mail, MessageCircle } from 'lucide-react';
import { PRODUCTS, CONTACT, INDUSTRIES, whatsappLink } from '../config/site';
import { PageBanner, CtaBand, usePageMeta } from '../components/common';
import { Reveal } from '../components/motion';
import NotFound from './NotFound';

const ProductDetail = () => {
  const { slug } = useParams();
  const p = PRODUCTS.find((x) => x.slug === slug);
  usePageMeta(p?.title || 'Not Found', p?.summary);

  if (!p) return <NotFound />;

  return (
    <>
      <PageBanner title={p.title} image={p.image} crumbs={[{ label: 'Products & Services', to: '/products' }]} />

      <section className="section">
        <div className="wrap grid lg:grid-cols-[1fr_320px] gap-12">
          {/* Main column */}
          <div>
            <Reveal variant="wipe" className="zoom-wrap mb-8">
              <img src={p.image} alt={p.title} className="w-full h-[280px] md:h-[420px] object-cover" />
            </Reveal>
            <Reveal delay={100}>
              <h2 className="heading">{p.title}</h2>
              <span className="heading-line mb-6" />
              <p className="text-muted mb-10">{p.intro}</p>
            </Reveal>

            <Reveal as="h3" className="text-[22px] mb-5">Our Range</Reveal>
            <Reveal className="overflow-x-auto mb-12">
              <table className="w-full text-[14px] border border-line">
                <thead>
                  <tr className="bg-navy text-white text-left">
                    <th className="px-4 py-3 font-heading font-semibold">Item</th>
                    <th className="px-4 py-3 font-heading font-semibold">Description</th>
                    <th className="px-4 py-3 font-heading font-semibold whitespace-nowrap">Material</th>
                  </tr>
                </thead>
                <tbody>
                  {p.items.map((it, i) => (
                    <tr key={it.title} className={`${i % 2 ? 'bg-soft' : 'bg-white'} hover:bg-orange/10 transition-colors duration-200`}>
                      <td className="px-4 py-3 font-semibold text-navy align-top whitespace-nowrap">{it.title}</td>
                      <td className="px-4 py-3 text-muted align-top">{it.desc}</td>
                      <td className="px-4 py-3 align-top whitespace-nowrap">{it.material}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-10 mb-12">
              <div>
                <Reveal as="h3" className="text-[22px] mb-5">Scope of Work</Reveal>
                <ul className="space-y-2.5">
                  {p.scope.map((s, idx) => (
                    <Reveal as="li" variant="left" delay={idx * 70} key={s} className="group flex items-start gap-2.5 text-[15px]">
                      <Check size={18} className="text-orange shrink-0 mt-1 transition-transform duration-300 group-hover:scale-125" /> {s}
                    </Reveal>
                  ))}
                </ul>
              </div>
              <div>
                <Reveal as="h3" delay={100} className="text-[22px] mb-5">Used In</Reveal>
                <ul className="space-y-2.5">
                  {INDUSTRIES.map((ind, idx) => (
                    <Reveal as="li" variant="left" delay={150 + idx * 70} key={ind.title} className="group flex items-start gap-2.5 text-[15px]">
                      <ChevronRight size={18} className="text-orange shrink-0 mt-1 transition-transform duration-300 group-hover:translate-x-1.5" /> {ind.title}
                    </Reveal>
                  ))}
                </ul>
              </div>
            </div>

            {p.gallery?.length > 0 && (
              <>
                <Reveal as="h3" className="text-[22px] mb-5">Photos</Reveal>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {p.gallery.map((g, idx) => (
                    <Reveal key={g} variant="zoom" delay={(idx % 4) * 100} className="zoom-wrap aspect-square">
                      <img src={g} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
                    </Reveal>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8 lg:sticky lg:top-28 self-start">
            <Reveal variant="right" className="bg-soft">
              <h4 className="bg-navy text-white px-6 py-4 text-[17px]">Our Services</h4>
              <ul>
                {PRODUCTS.map((x) => (
                  <li key={x.slug} className="border-b border-line last:border-0">
                    <NavLink
                      to={`/products/${x.slug}`}
                      className={({ isActive }) =>
                        `group flex items-center justify-between px-6 py-3.5 text-[14px] font-semibold transition-all duration-200 ${
                          isActive ? 'bg-orange text-white' : 'text-navy hover:text-orange hover:pl-8'
                        }`
                      }
                    >
                      {x.short} <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </NavLink>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal variant="right" delay={150} className="relative bg-navy text-white p-7 overflow-hidden">
              <img src="/images/plant-equipment-erection.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" />
              <div className="relative">
                <h4 className="text-white text-[19px] mb-3">Need a quotation?</h4>
                <p className="text-white/75 text-[14px] mb-5">Send us the drawing, BOQ or a short description of the job.</p>
                <a href={CONTACT.phoneHref} className="flex items-center gap-2.5 mb-2.5 font-semibold hover:text-orange">
                  <Phone size={17} className="text-orange" /> {CONTACT.phone}
                </a>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2.5 mb-5 text-[14px] hover:text-orange break-all">
                  <Mail size={17} className="text-orange shrink-0" /> {CONTACT.email}
                </a>
                <Link to="/contact" className="btn btn-primary w-full justify-center mb-3">Send Enquiry</Link>
                <a
                  href={whatsappLink(`Hello, I need a quotation for ${p.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn w-full justify-center bg-[#25D366] text-white hover:bg-[#1ebe5a]"
                >
                  <MessageCircle size={17} /> WhatsApp
                </a>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  );
};

export default ProductDetail;
