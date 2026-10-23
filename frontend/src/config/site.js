/*
 * ------------------------------------------------------------------
 *  SITE CONTENT — edit this one file to update the whole website.
 * ------------------------------------------------------------------
 *  Anything marked  TODO  must be replaced with the client's real
 *  details before the site goes live. Empty values are hidden
 *  automatically (e.g. no address = no map, no clients = no logo strip).
 */

export const COMPANY = {
  name: 'Amit Engineering Co.',
  shortName: 'Amit Engineering',
  tagline: 'Industrial Fabrication & Mechanical Execution',
  logo: '/images/logo.jpg',
  // TODO: year the business started, e.g. 2009. Leave '' to hide.
  established: '',
  // TODO: GSTIN, shown in the footer. Leave '' to hide.
  gstin: '',
};

export const CONTACT = {
  // TODO: replace all of these with the real details
  phone: '+91 XXXXX XXXXX',
  phoneHref: 'tel:+91XXXXXXXXXX',
  phone2: '',
  email: 'info@yourdomain.com',
  whatsapp: '91XXXXXXXXXX', // digits only, with country code
  address: '', // full postal address, also used for the map
  hours: 'Mon – Sat, 9:30 AM – 6:30 PM',
};

/*
 * Contact form → EmailJS.
 * Create a free account at emailjs.com, then add these three values in
 * Vercel → Project → Settings → Environment Variables:
 *   VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
 * Until they are set, the form opens the visitor's email app instead.
 */
export const EMAILJS = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
};

/* Only real, client-confirmed numbers. Leave the array empty to hide. */
export const STATS = [
  // { value: '15+', label: 'Years in fabrication' },
  // { value: '200+', label: 'Projects completed' },
];

/* Client names / logos. Add { name, logo: '/images/clients/xyz.png' }. */
export const CLIENTS = [];

const img = (f) => `/images/${f}`;

export const PRODUCTS = [
  {
    slug: 'tanks-process-equipment',
    title: 'Tanks & Process Equipment',
    short: 'Tanks & Process Equipment',
    image: img('ss-reactor-installed.jpg'),
    gallery: [img('ss-reactors-workshop.jpg'), img('ss-storage-tanks.jpg'), img('reactor-agitator-assembly.jpg'), img('ss-reactor-lifting.jpg')],
    summary: 'MS and SS storage tanks, reactors, mixing vessels and receivers built to client drawings.',
    intro:
      'We fabricate storage tanks, process tanks, reactors, mixing vessels, receivers and custom equipment for chemical, pharmaceutical and process plants. Every job is made to the approved GA drawing, in the material the process calls for, and tested before it leaves the shop.',
    points: ['MS & SS storage tanks', 'Jacketed reactors & mixing vessels', 'Receivers & knock-out drums', 'Hydro / leak tested'],
    items: [
      { title: 'MS Storage Tanks', desc: 'Carbon steel tanks for water, chemicals and utility services.', material: 'MS (IS 2062)' },
      { title: 'SS Storage Tanks', desc: 'Stainless steel tanks for pharma, food and corrosive media.', material: 'SS304 / SS316' },
      { title: 'Process Tanks', desc: 'Process vessels with agitators, jackets and nozzles as per P&ID.', material: 'MS / SS' },
      { title: 'Reactors & Mixing Vessels', desc: 'Jacketed reactors with agitator assemblies.', material: 'SS304 / SS316' },
      { title: 'Receivers', desc: 'Receivers, condensate pots and knock-out drums for process lines.', material: 'MS / SS' },
      { title: 'Custom Equipment', desc: 'Fabrication to the client’s own drawings and specifications.', material: 'As specified' },
    ],
    scope: [
      'Drawing review and clarifications',
      'Material procurement and identification',
      'Cutting, rolling, fit-up and welding',
      'Nozzle and manway fabrication',
      'Dimensional and weld inspection',
      'Hydro / leak testing',
      'Surface preparation and dispatch',
      'Site erection and installation (if required)',
    ],
  },
  {
    slug: 'piping',
    title: 'Process & Utility Piping',
    short: 'Piping',
    image: img('ducting-inspection.jpg'),
    gallery: [img('plant-equipment-erection.jpg'), img('process-structure-plant.jpg'), img('reactor-installed-plant.jpg')],
    summary: 'MS and SS process lines, utility piping, spools, supports and site installation.',
    intro:
      'From isometric drawings to hydro-tested lines at site, we handle MS and SS process piping, utility lines, spool fabrication and pipe supports. Spools are made in our shop where possible and erected at site to cut down on shutdown time.',
    points: ['MS & SS process lines', 'Steam, air, water & N₂ utilities', 'Shop-fabricated spools', 'Hydro testing & flushing'],
    items: [
      { title: 'MS Process Piping', desc: 'Carbon steel process lines for chemical and utility services.', material: 'MS (IS 1239 / IS 3589)' },
      { title: 'SS Process Piping', desc: 'Stainless steel lines for pharma, food and corrosive media.', material: 'SS304 / SS316' },
      { title: 'Utility Piping', desc: 'Steam, compressed air, water, nitrogen and effluent lines.', material: 'MS / SS' },
      { title: 'Pipe Spool Fabrication', desc: 'Spools made to isometrics in the shop for quick site assembly.', material: 'MS / SS' },
      { title: 'Pipe Supports', desc: 'Shoes, guides, hangers and structural supports.', material: 'MS / Galvanised' },
      { title: 'Installation & Erection', desc: 'Site fit-up, alignment, welding and testing of piping.', material: '—' },
    ],
    scope: [
      'Isometric drawing review',
      'Material procurement and traceability',
      'Cutting, bevelling, fit-up and welding',
      'Spool fabrication in the workshop',
      'Dispatch with spool marking',
      'Site fit-up and welding',
      'Dimensional and weld inspection',
      'Hydro testing and flushing',
    ],
  },
  {
    slug: 'skids-assemblies',
    title: 'Skids & Equipment Assemblies',
    short: 'Skids & Assemblies',
    image: img('reactor-agitator-assembly.jpg'),
    gallery: [img('vessel-handling-shop.jpg'), img('hopper-installation.jpg'), img('equipment-structure-frame.jpg')],
    summary: 'Skid bases, equipment mounting frames and pre-assembled mechanical packages.',
    intro:
      'We build skid bases and mounting frames for pumps, blowers, filters and package units, and can deliver them as integrated assemblies with equipment and piping already fitted — ready to place on the foundation and hook up.',
    points: ['Pump & blower skids', 'Equipment mounting frames', 'Pre-piped assemblies', 'Ready to install'],
    items: [
      { title: 'Fabricated Skid Structures', desc: 'Skid bases for pumps, blowers, filters and packages.', material: 'MS / SS' },
      { title: 'Equipment Mounting Frames', desc: 'Frames for mounting equipment on foundations or platforms.', material: 'MS' },
      { title: 'Integrated Assemblies', desc: 'Packages with equipment and piping fitted in the shop.', material: 'MS / SS' },
    ],
    scope: [
      'Drawing review and layout planning',
      'Cutting, fit-up and welding',
      'Equipment mounting and alignment',
      'Piping integration',
      'Dimensional checks',
      'Surface preparation and painting',
      'Dispatch ready to install',
    ],
  },
  {
    slug: 'structural-fabrication',
    title: 'Structural Fabrication',
    short: 'Structural Fabrication',
    image: img('multi-level-structure.jpg'),
    gallery: [img('industrial-shed-columns.jpg'), img('structural-steel-frame.jpg'), img('fabricated-beams.jpg'), img('steel-structure-erection.jpg')],
    summary: 'Industrial sheds, equipment structures, platforms, pipe racks and staircases.',
    intro:
      'We fabricate and erect structural steel for process plants — industrial sheds, multi-level equipment structures, platforms and walkways, pipe racks and staircases. Members are cut, drilled and welded in the shop and bolted up at site.',
    points: ['Industrial sheds & trusses', 'Multi-level equipment structures', 'Platforms, walkways & ladders', 'Pipe racks'],
    items: [
      { title: 'Industrial Sheds', desc: 'Columns, rafters, trusses, purlins and bracing.', material: 'MS (IS 2062)' },
      { title: 'Platforms & Walkways', desc: 'Access platforms with grating, handrails and toe plates.', material: 'MS / Galvanised' },
      { title: 'Pipe Racks', desc: 'Single and multi-tier pipe racks and supports.', material: 'MS' },
      { title: 'Staircases & Ladders', desc: 'Industrial staircases, cage ladders and access structures.', material: 'MS / Galvanised' },
      { title: 'Equipment Structures', desc: 'Multi-level structures supporting reactors and vessels.', material: 'MS' },
    ],
    scope: [
      'Drawing and BOQ review',
      'Cutting, drilling and fit-up',
      'Welding to approved procedure',
      'Dimensional and weld inspection',
      'Surface preparation',
      'Painting / galvanising',
      'Dispatch and site erection',
    ],
  },
  {
    slug: 'mechanical-execution',
    title: 'Mechanical Execution',
    short: 'Mechanical Execution',
    image: img('vessel-erection-crane.jpg'),
    gallery: [img('tank-lifting-site.jpg'), img('vessel-crane-lift.jpg'), img('cyclone-unloading.jpg'), img('stack-erection-building.jpg')],
    summary: 'Equipment erection, installation, site fabrication, plant modification and shutdown jobs.',
    intro:
      'Our site teams handle rigging, lifting, alignment and installation of tanks, vessels, cyclones, stacks and package units. We also take up plant modification and shutdown work where the time window is tight and the job has to be finished right the first time.',
    points: ['Equipment erection & alignment', 'Rigging and crane lifts', 'Site fabrication', 'Shutdown & modification jobs'],
    items: [
      { title: 'Mechanical Erection', desc: 'Lifting, alignment and installation of equipment at site.', material: '—' },
      { title: 'Equipment Installation', desc: 'Pumps, vessels, exchangers, columns and package units.', material: '—' },
      { title: 'Site Fabrication', desc: 'Fabrication and modification carried out at site.', material: 'MS / SS' },
      { title: 'Plant Modifications', desc: 'Revamps, tie-ins and line re-routing.', material: 'MS / SS' },
      { title: 'Shutdown Jobs', desc: 'Fast-track fabrication and repair during shutdowns.', material: 'MS / SS' },
    ],
    scope: [
      'Site survey and work planning',
      'Manpower and tools mobilisation',
      'Rigging and lifting',
      'Alignment and fit-up',
      'Welding and inspection',
      'Testing and commissioning support',
      'Handover documentation',
    ],
  },
];

export const INDUSTRIES = [
  { title: 'Chemical Plants', desc: 'Tanks, reactors, piping and structures for bulk and fine chemical units, in materials matched to the process media.' },
  { title: 'Pharmaceutical Plants', desc: 'SS vessels, reactors and piping with finishes suited to clean, regulated production areas.' },
  { title: 'Specialty Chemicals', desc: 'Batch-process equipment where material selection and nozzle layout matter.' },
  { title: 'Process Manufacturing', desc: 'Sheds, platforms, structures and utility equipment for production lines.' },
  { title: 'Industrial Utilities', desc: 'Tanks, piping and stacks for water, steam, air and effluent services.' },
  { title: 'EPC Contractors', desc: 'Fabrication and erection packages delivered to the EPC’s drawings and schedule.' },
];

export const PROCESS = [
  { title: 'Drawing & Scope Review', desc: 'We go through GA drawings, specifications and BOQs and close open points before quoting.' },
  { title: 'Fabrication', desc: 'Material is procured to specification, then cut, rolled, fitted and welded in our shop.' },
  { title: 'Inspection & Testing', desc: 'Dimensional checks, weld inspection and hydro / leak testing as the job requires.' },
  { title: 'Dispatch & Erection', desc: 'Safe loading and transport, followed by erection and installation at site.' },
];

export const PROJECTS = [
  { image: img('vessel-erection-crane.jpg'), title: 'Vessel erection with crane', tag: 'Erection' },
  { image: img('ss-reactors-workshop.jpg'), title: 'SS reactors ready for dispatch', tag: 'Process Equipment' },
  { image: img('multi-level-structure.jpg'), title: 'Multi-level equipment structure', tag: 'Structural' },
  { image: img('cyclone-dispatch.jpg'), title: 'Cyclone separator on dispatch', tag: 'Fabrication' },
  { image: img('reactor-installed-plant.jpg'), title: 'Reactor installed in plant', tag: 'Installation' },
  { image: img('industrial-shed-columns.jpg'), title: 'Industrial shed — columns & rafters', tag: 'Structural' },
  { image: img('shell-tube-heat-exchanger.jpg'), title: 'Shell & tube heat exchanger', tag: 'Process Equipment' },
  { image: img('tank-lifting-site.jpg'), title: 'Rectangular tank lifting at site', tag: 'Erection' },
  { image: img('ss-storage-tanks.jpg'), title: 'SS storage tanks', tag: 'Process Equipment' },
  { image: img('process-structure-plant.jpg'), title: 'Process structure with platforms', tag: 'Structural' },
  { image: img('plate-rolling-site.jpg'), title: 'Plate rolling at site', tag: 'Fabrication' },
  { image: img('stack-erection-building.jpg'), title: 'Stack erected along building', tag: 'Erection' },
  { image: img('reactor-agitator-assembly.jpg'), title: 'Reactor with agitator drive', tag: 'Process Equipment' },
  { image: img('fabricated-beams.jpg'), title: 'Fabricated structural beams', tag: 'Structural' },
  { image: img('hopper-installation.jpg'), title: 'Hopper installation on frame', tag: 'Installation' },
  { image: img('ducting-inspection.jpg'), title: 'Ducting inspection at site', tag: 'Inspection' },
];

export const NAV = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  {
    label: 'Products & Services',
    path: '/products',
    children: PRODUCTS.map((p) => ({ label: p.short, path: `/products/${p.slug}` })),
  },
  { label: 'Industries', path: '/industries' },
  { label: 'Quality & Safety', path: '/quality-safety-infrastructure' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

export const whatsappLink = (text = '') =>
  `https://wa.me/${CONTACT.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
