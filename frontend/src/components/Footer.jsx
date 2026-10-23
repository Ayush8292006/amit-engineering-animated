import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ChevronRight } from 'lucide-react';
import { COMPANY, CONTACT, NAV, PRODUCTS } from '../config/site';
import { Reveal } from './motion';

const FooterHeading = ({ children }) => (
  <h4 className="text-white text-[17px] mb-5 pb-3 relative">
    {children}
    <span className="heading-line !mt-0 absolute left-0 bottom-0 !w-10 !h-[2px]" />
  </h4>
);

const Footer = () => {
  const year = new Date().getFullYear();
  const mapSrc = CONTACT.address
    ? `https://www.google.com/maps?q=${encodeURIComponent(CONTACT.address)}&output=embed`
    : '';

  return (
    <footer className="bg-navy-dark text-white/70 text-[14px]">
      <div className="wrap pt-14 pb-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <Reveal delay={0}>
          <div className="bg-white inline-block p-2 rounded-sm mb-5">
            <img src={COMPANY.logo} alt={COMPANY.name} className="h-12 w-auto" />
          </div>
          <p className="leading-relaxed">
            Fabrication and mechanical execution for chemical, pharmaceutical and process plants — tanks,
            piping, structures and site erection, made to your drawings.
          </p>
          {COMPANY.gstin && <p className="mt-3 text-white/50">GSTIN: {COMPANY.gstin}</p>}
        </Reveal>

        <Reveal delay={110}>
          <FooterHeading>Quick Links</FooterHeading>
          <ul className="space-y-2">
            {NAV.map((n) => (
              <li key={n.path}>
                <Link to={n.path} className="inline-flex items-center gap-1.5 hover:text-orange hover:translate-x-1.5 transition-all duration-200">
                  <ChevronRight size={14} /> {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={220}>
          <FooterHeading>Our Services</FooterHeading>
          <ul className="space-y-2">
            {PRODUCTS.map((p) => (
              <li key={p.slug}>
                <Link to={`/products/${p.slug}`} className="inline-flex items-center gap-1.5 hover:text-orange hover:translate-x-1.5 transition-all duration-200">
                  <ChevronRight size={14} /> {p.short}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={330}>
          <FooterHeading>Contact Us</FooterHeading>
          <ul className="space-y-4">
            {CONTACT.address && (
              <li className="flex gap-3">
                <MapPin size={18} className="text-orange shrink-0 mt-0.5" />
                <span>{CONTACT.address}</span>
              </li>
            )}
            <li className="flex gap-3">
              <Phone size={18} className="text-orange shrink-0 mt-0.5" />
              <span>
                <a href={CONTACT.phoneHref} className="hover:text-orange">{CONTACT.phone}</a>
                {CONTACT.phone2 && <><br />{CONTACT.phone2}</>}
              </span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="text-orange shrink-0 mt-0.5" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-orange break-all">{CONTACT.email}</a>
            </li>
            <li className="flex gap-3">
              <Clock size={18} className="text-orange shrink-0 mt-0.5" />
              <span>{CONTACT.hours}</span>
            </li>
          </ul>
        </Reveal>
      </div>

      {mapSrc && (
        <Reveal className="wrap pb-10">
          <iframe
            title="Location map"
            src={mapSrc}
            className="w-full h-56 border-0 rounded-sm grayscale-[30%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      )}

      <div className="border-t border-white/10">
        <div className="wrap py-5 flex flex-col sm:flex-row gap-2 justify-between text-[13px] text-white/50">
          <span>© {year} {COMPANY.name}. All rights reserved.</span>
          <span>Industrial Fabrication · Piping · Structures · Erection</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
