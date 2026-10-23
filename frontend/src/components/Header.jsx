import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, Mail, Clock, ChevronDown, Menu, X } from 'lucide-react';
import { COMPANY, CONTACT, NAV } from '../config/site';

const TopBar = () => (
  <div className="enter-down bg-navy text-white/85 text-[13px] hidden md:block" style={{ '--d': '100ms' }}>
    <div className="wrap flex items-center justify-between h-10">
      <div className="flex items-center gap-6">
        <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
          <Mail size={14} className="text-orange" /> {CONTACT.email}
        </a>
        <a href={CONTACT.phoneHref} className="flex items-center gap-2 hover:text-white transition-colors">
          <Phone size={14} className="text-orange" /> {CONTACT.phone}
        </a>
      </div>
      <div className="flex items-center gap-2">
        <Clock size={14} className="text-orange" /> {CONTACT.hours}
      </div>
    </div>
  </div>
);

const Header = () => {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
    setSubOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkCls = ({ isActive }) =>
    `navlink font-heading text-[14px] font-semibold py-2 transition-colors ${
      isActive ? 'active text-orange' : 'text-navy hover:text-orange'
    }`;

  return (
    <>
      <TopBar />
      <header
        style={{ '--d': '0ms' }}
        className={`enter-down sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-line transition-shadow duration-300 ${
          scrolled ? 'shadow-[0_4px_18px_rgba(0,0,0,0.10)]' : ''
        }`}
      >
        <div className={`wrap flex items-center justify-between h-[72px] transition-[height] duration-300 ${scrolled ? 'lg:h-[70px]' : 'lg:h-[84px]'}`}>
          <Link to="/" className="flex items-center shrink-0" aria-label={COMPANY.name}>
            <img src={COMPANY.logo} alt={COMPANY.name} className={`h-12 w-auto transition-all duration-300 hover:scale-105 ${scrolled ? 'lg:h-12' : 'lg:h-14'}`} />
          </Link>

          <nav className="hidden xl:flex items-center gap-7">
            {NAV.map((item) =>
              item.children ? (
                <div key={item.path} className="relative group">
                  <NavLink to={item.path} end className={linkCls}>
                    <span className="inline-flex items-center gap-1">
                      {item.label} <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
                    </span>
                  </NavLink>
                  <div className="absolute left-0 top-full pt-3 invisible opacity-0 translate-y-3 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-300">
                    <ul className="w-64 bg-white border border-line border-t-[3px] border-t-orange shadow-lg py-2">
                      {item.children.map((c) => (
                        <li key={c.path}>
                          <NavLink
                            to={c.path}
                            className={({ isActive }) =>
                              `block px-5 py-2.5 text-[14px] transition-all duration-200 hover:pl-7 ${
                                isActive ? 'text-orange bg-soft' : 'text-ink hover:bg-soft hover:text-orange'
                              }`
                            }
                          >
                            {c.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <NavLink key={item.path} to={item.path} end={item.path === '/'} className={linkCls}>
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/contact" className="btn btn-primary hidden sm:inline-flex">
              Get a Quote
            </Link>
            <button
              className="xl:hidden p-2 text-navy active:scale-90 transition-transform"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              aria-expanded={open}
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="menu-in xl:hidden border-t border-line bg-white max-h-[calc(100vh-72px)] overflow-y-auto">
            <ul className="wrap py-2">
              {NAV.map((item, idx) => (
                <li key={item.path} className="enter-left border-b border-line last:border-0" style={{ '--d': `${idx * 45}ms` }}>
                  {item.children ? (
                    <>
                      <div className="flex items-center justify-between">
                        <NavLink to={item.path} end className="block py-3 font-heading font-semibold text-navy">
                          {item.label}
                        </NavLink>
                        <button
                          className="p-3 text-navy"
                          onClick={() => setSubOpen((v) => !v)}
                          aria-label="Show products"
                        >
                          <ChevronDown size={18} className={`transition-transform duration-300 ${subOpen ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                      {subOpen && (
                        <ul className="menu-in pb-2 pl-4">
                          {item.children.map((c) => (
                            <li key={c.path}>
                              <NavLink to={c.path} className="block py-2 text-[14px] text-muted active:text-orange">
                                {c.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <NavLink
                      to={item.path}
                      end={item.path === '/'}
                      className={({ isActive }) =>
                        `block py-3 font-heading font-semibold ${isActive ? 'text-orange' : 'text-navy'}`
                      }
                    >
                      {item.label}
                    </NavLink>
                  )}
                </li>
              ))}
              <li className="py-4 sm:hidden">
                <Link to="/contact" className="btn btn-primary w-full justify-center">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
