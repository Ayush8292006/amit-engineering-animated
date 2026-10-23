import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { CONTACT, EMAILJS, PRODUCTS, whatsappLink } from '../config/site';
import { PageBanner, usePageMeta } from '../components/common';
import { Reveal } from '../components/motion';

const emailReady = EMAILJS.serviceId && EMAILJS.templateId && EMAILJS.publicKey;

const InfoBox = ({ Icon, title, delay = 0, children }) => (
  <Reveal variant="left" delay={delay} className="lift group flex gap-4 p-6 bg-white border border-line hover:border-orange">
    <span className="w-12 h-12 shrink-0 bg-orange text-white flex items-center justify-center transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
      <Icon size={22} />
    </span>
    <div className="text-[14px]">
      <h3 className="text-[16px] mb-1">{title}</h3>
      {children}
    </div>
  </Reveal>
);

const Contact = () => {
  usePageMeta('Contact Us', 'Contact Amit Engineering Co. for fabrication, piping, structural and erection enquiries.');
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const onSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData(formRef.current);

    if (!emailReady) {
      // Fallback until EmailJS keys are added: open the visitor's mail app.
      const body = [
        `Name: ${fd.get('name')}`,
        `Company: ${fd.get('company') || '-'}`,
        `Phone: ${fd.get('phone')}`,
        `Email: ${fd.get('email') || '-'}`,
        `Service: ${fd.get('service')}`,
        '',
        fd.get('message'),
      ].join('\n');
      window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Enquiry from website')}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus('sending');
    try {
      await emailjs.sendForm(EMAILJS.serviceId, EMAILJS.templateId, formRef.current, { publicKey: EMAILJS.publicKey });
      setStatus('sent');
      formRef.current.reset();
    } catch {
      setStatus('error');
    }
  };

  const mapSrc = CONTACT.address ? `https://www.google.com/maps?q=${encodeURIComponent(CONTACT.address)}&output=embed` : '';

  return (
    <>
      <PageBanner title="Contact Us" image="/images/cyclone-unloading.jpg" />

      <section className="section bg-soft">
        <div className="wrap grid lg:grid-cols-[380px_1fr] gap-10">
          <div className="space-y-4">
            <Reveal className="mb-6">
              <span className="kicker">Get in Touch</span>
              <h2 className="heading">We’d like to hear about your project</h2>
              <span className="heading-line" />
            </Reveal>
            <InfoBox Icon={Phone} title="Phone" delay={100}>
              <a href={CONTACT.phoneHref} className="text-muted hover:text-orange">{CONTACT.phone}</a>
              {CONTACT.phone2 && <div className="text-muted">{CONTACT.phone2}</div>}
            </InfoBox>
            <InfoBox Icon={Mail} title="Email" delay={200}>
              <a href={`mailto:${CONTACT.email}`} className="text-muted hover:text-orange break-all">{CONTACT.email}</a>
            </InfoBox>
            {CONTACT.address && (
              <InfoBox Icon={MapPin} title="Address" delay={300}>
                <span className="text-muted">{CONTACT.address}</span>
              </InfoBox>
            )}
            <InfoBox Icon={Clock} title="Working Hours" delay={400}>
              <span className="text-muted">{CONTACT.hours}</span>
            </InfoBox>
            <Reveal delay={500}>
              <a
                href={whatsappLink('Hello, I have an enquiry regarding fabrication work.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-full justify-center bg-[#25D366] text-white hover:bg-[#1ebe5a]"
              >
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            </Reveal>
          </div>

          <Reveal variant="right" delay={150} className="bg-white p-7 md:p-10 border-t-[3px] border-orange">
            <h3 className="text-[24px] mb-2">Send an Enquiry</h3>
            <p className="text-muted text-[14px] mb-7">
              Tell us what you need. If you have a drawing or BOQ, mention it and we will ask for it by email.
            </p>

            {status === 'sent' ? (
              <div className="enter bg-green-50 border border-green-200 text-green-800 p-6">
                <h4 className="!text-green-800 text-lg mb-1">Thank you — your enquiry has been sent.</h4>
                <p className="text-[14px]">We will get back to you within one working day.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-5">
                <label className="block">
                  <span className="text-[14px] font-semibold text-navy">Name *</span>
                  <input name="name" required className="field mt-1.5" autoComplete="name" />
                </label>
                <label className="block">
                  <span className="text-[14px] font-semibold text-navy">Company</span>
                  <input name="company" className="field mt-1.5" autoComplete="organization" />
                </label>
                <label className="block">
                  <span className="text-[14px] font-semibold text-navy">Phone *</span>
                  <input name="phone" type="tel" required className="field mt-1.5" autoComplete="tel" />
                </label>
                <label className="block">
                  <span className="text-[14px] font-semibold text-navy">Email</span>
                  <input name="email" type="email" className="field mt-1.5" autoComplete="email" />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-[14px] font-semibold text-navy">Service required</span>
                  <select name="service" className="field mt-1.5" defaultValue="">
                    <option value="" disabled>Select a service</option>
                    {PRODUCTS.map((p) => <option key={p.slug}>{p.title}</option>)}
                    <option>Other / Custom fabrication</option>
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-[14px] font-semibold text-navy">Message *</span>
                  <textarea name="message" required rows={5} className="field mt-1.5 resize-y" placeholder="Equipment, size, material, quantity, site location…" />
                </label>
                <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
                  <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                    <Send size={16} /> {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
                  </button>
                  {status === 'error' && (
                    <span className="text-red-600 text-[14px]">
                      Could not send. Please call or email us directly.
                    </span>
                  )}
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      {mapSrc && (
        <iframe title="Location map" src={mapSrc} className="w-full h-[380px] border-0 block" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      )}
    </>
  );
};

export default Contact;
