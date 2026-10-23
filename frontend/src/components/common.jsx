import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Phone, MessageCircle } from 'lucide-react';
import { COMPANY, CONTACT, whatsappLink } from '../config/site';
import { Reveal } from './motion';

/* Sets the browser tab title and meta description for each page. */
export const usePageMeta = (title, description) => {
  useEffect(() => {
    document.title = title ? `${title} | ${COMPANY.name}` : `${COMPANY.name} | ${COMPANY.tagline}`;
    if (description) {
      const m = document.querySelector('meta[name="description"]');
      if (m) m.setAttribute('content', description);
    }
  }, [title, description]);
};

/* Inner-page banner with breadcrumb — photo background, dark overlay. */
export const PageBanner = ({ title, image, crumbs = [] }) => (
  <section className="relative bg-navy overflow-hidden">
    <div className="parallax absolute inset-x-0 -top-[80px] bottom-0" style={{ '--max': '80px', '--k': 0.3 }}>
      <img src={image} alt="" className="zoom-in-load w-full h-full object-cover" />
    </div>
    <div className="absolute inset-0 bg-navy-dark/80" />
    <div className="relative wrap py-16 md:py-24">
      <h1 className="enter text-white text-3xl md:text-[42px] mb-4" style={{ '--d': '200ms' }}>{title}</h1>
      <nav className="enter flex flex-wrap items-center gap-1.5 text-[14px] text-white/75" style={{ '--d': '380ms' }} aria-label="Breadcrumb">
        <Link to="/" className="hover:text-orange transition-colors">Home</Link>
        {crumbs.map((c) => (
          <span key={c.label} className="inline-flex items-center gap-1.5">
            <ChevronRight size={14} />
            {c.to ? <Link to={c.to} className="hover:text-orange transition-colors">{c.label}</Link> : <span className="text-orange">{c.label}</span>}
          </span>
        ))}
        <span className="inline-flex items-center gap-1.5">
          <ChevronRight size={14} />
          <span className="text-orange">{title}</span>
        </span>
      </nav>
    </div>
  </section>
);

export const SectionTitle = ({ kicker, title, center = false, light = false, children }) => (
  <Reveal className={`mb-10 md:mb-12 ${center ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}`}>
    {kicker && <span className="kicker">{kicker}</span>}
    <h2 className={`heading ${light ? '!text-white' : ''}`}>{title}</h2>
    <span className={`heading-line ${center ? 'mx-auto' : ''}`} />
    {children && <p className={`mt-5 ${light ? 'text-white/75' : 'text-muted'}`}>{children}</p>}
  </Reveal>
);

/* Orange call-to-action strip used at the bottom of most pages. */
export const CtaBand = ({
  title = 'Have a drawing or BOQ ready?',
  text = 'Send it across — we will study the scope and come back with a quotation.',
}) => (
  <section className="bg-orange overflow-hidden">
    <div className="wrap py-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
      <Reveal variant="left">
        <h3 className="text-white text-2xl md:text-[28px] mb-1">{title}</h3>
        <p className="text-white/90">{text}</p>
      </Reveal>
      <Reveal variant="right" delay={150} className="flex flex-wrap gap-3">
        <Link to="/contact" className="btn btn-navy">Send Enquiry</Link>
        <a href={CONTACT.phoneHref} className="btn btn-outline">
          <Phone size={16} /> Call Us
        </a>
      </Reveal>
    </div>
  </section>
);

export const WhatsAppFloat = () => (
  <a
    href={whatsappLink('Hello, I have an enquiry regarding fabrication work.')}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="wa-float fixed bottom-5 right-5 z-40 w-[52px] h-[52px] rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform"
  >
    <MessageCircle size={26} />
  </a>
);
