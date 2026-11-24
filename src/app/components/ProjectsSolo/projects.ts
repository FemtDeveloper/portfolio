// Las descripciones se renderizan con html-react-parser: usar `class` (no
// `className`) y enlaces absolutos con https://, si no el navegador los trata
// como rutas relativas.

const link = (url: string, label: string, color: string) =>
  `<a href="${url}" target="_blank" rel="noopener noreferrer" class="${color} underline-offset-4 hover:underline">${label}</a>`;

const reevolucion = link(
  "https://www.reevoluciontech.com/",
  "Reevolución Tech",
  "text-greenRevolution dark:text-mintRevolution"
);
const momsGuide = link(
  "https://themomsguide.com/",
  "The Moms Guide",
  "text-coralMoms"
);
const efrain = link(
  "https://efraincaicedo.com/",
  "efraincaicedo.com",
  "text-primaryOrange"
);
const madrugon = link(
  "https://www.madrugononline.com/",
  "Madrugón",
  "text-primaryOrange"
);
const aviva = link("https://aviva.pe/", "aviva.pe", "text-primaryOrange");
const up = link(
  "https://up-capacitaciones.com/",
  "Up e-learning",
  "text-primaryOrange"
);

export const SOLO_PROJECTS: MainProps[] = [
  {
    id: 1,
    title: "Reevolución Tech",
    description: `Proyecto ${reevolucion}. Estudio digital de diseño web y video con IA. Sitio bilingüe con hero animado, laboratorio de IA y casos de estudio, construido para convertir visitas en proyectos: sitios a medida, anuncios y videos generados con inteligencia artificial para marcas que quieren crecer.`,
    englishDescription: `Project ${reevolucion}. A digital studio for web design and AI video. Bilingual site with an animated hero, an AI lab and case studies, built to turn visits into projects: custom websites plus AI-generated ads and videos for brands that want to grow.`,
    mobileDescription: `Proyecto ${reevolucion}. Estudio de diseño web y video con IA: sitio bilingüe, animado y enfocado en conversión.`,
    mobileEnglishDescription: `Project ${reevolucion}. Web design and AI video studio: a bilingual, animated, conversion-focused site.`,
    bgButtonColor: "bg-greenRevolution",
    img: "/images/projects/revolution-mockup.webp",
    titleButton: "Web + IA",
    url: "https://www.reevoluciontech.com/",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Generative AI", "i18n"],
  },
  {
    id: 2,
    title: "Madrugón",
    description: `Proyecto ${madrugon}. Tienda en línea para Colombia con catálogo por categorías (ropa, accesorios, salud y belleza, eléctricos, herramientas y juguetes), buscador, favoritos, pago contra entrega, envío gratis y pedidos por WhatsApp. Desarrollada con Next.js, Tailwind CSS y Supabase, pensada para cargar rápido en móvil y comprar en pocos pasos.`,
    englishDescription: `Project ${madrugon}. An online store for Colombia with a category catalog (clothing, accessories, health & beauty, electronics, tools and toys), search, wishlist, cash on delivery, free shipping and WhatsApp ordering. Built with Next.js, Tailwind CSS and Supabase, designed to load fast on mobile and check out in a few steps.`,
    mobileDescription: `Proyecto ${madrugon}. E-commerce para Colombia con pago contra entrega, envío gratis y pedidos por WhatsApp. Next.js, Tailwind CSS y Supabase.`,
    mobileEnglishDescription: `Project ${madrugon}. E-commerce for Colombia with cash on delivery, free shipping and WhatsApp ordering. Next.js, Tailwind CSS and Supabase.`,
    bgButtonColor: "bg-black",
    img: "/images/projects/madrugon-online.webp",
    titleButton: "E-commerce",
    url: "https://www.madrugononline.com/",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "E-commerce"],
  },
  {
    id: 3,
    title: "The Moms Guide",
    description: `Proyecto ${momsGuide}. Blog para padres sobre salud, crecimiento y crianza desde recién nacidos hasta adolescentes, con buscador, contenido por etapas y modo noche. Desarrollado con Next.js, NestJS y PostgreSQL: cada publicación, con sus imágenes, se genera con IA a partir de un único prompt.`,
    englishDescription: `Project ${momsGuide}. A parenting blog on health, growth and guidance from newborns to teens, with search, content by stage and night mode. Built with Next.js, NestJS and PostgreSQL: every post, images included, is generated with AI from a single prompt.`,
    mobileDescription: `Proyecto ${momsGuide}. Blog de crianza con Next.js, NestJS y PostgreSQL; cada publicación se genera con IA desde un único prompt.`,
    mobileEnglishDescription: `Project ${momsGuide}. Parenting blog built with Next.js, NestJS and PostgreSQL; every post is AI-generated from a single prompt.`,
    bgButtonColor: "bg-coralMoms",
    img: "/images/projects/the-moms-guidee.webp",
    titleButton: "Blog con IA",
    url: "https://themomsguide.com/",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Generative AI"],
  },
  {
    id: 4,
    title: "Web Portafolio",
    description: `Proyecto ${efrain}. Página web desarrollada en colaboración estrecha con el cliente, quien creó el diseño, utilizando Next.js y Tailwind CSS. El resultado es un sitio con excelente rendimiento, buenas prácticas, accesibilidad y SEO.`,
    englishDescription: `Project ${efrain}. Website developed in close collaboration with the client, who created the design, using Next.js and Tailwind CSS. The result is a site with excellent performance, good practices, accessibility and SEO.`,
    mobileDescription: `Proyecto ${efrain}. Desarrollada en colaboración con el cliente, quien creó el diseño, con Next.js y Tailwind CSS.`,
    mobileEnglishDescription: `Project ${efrain}. Developed in collaboration with the client, who created the design, using Next.js and Tailwind CSS.`,
    bgButtonColor: "bg-primaryGreen",
    img: "/images/projects/efra-portfolio.webp",
    titleButton: "Web - Portfolio",
    url: "https://efraincaicedo.com/",
    tags: ["Next.js", "Tailwind CSS", "SEO"],
  },
];

export const PROJECTS_AS_EMPLOYEE: MainProps[] = [
  {
    id: 1,
    title: "Aviva Web",
    description: `Proyecto ${aviva}. Combina Next.js, SASS y Django para crear un sitio dinámico, con un diseño elegante y una gestión de contenido eficiente: Next.js para una experiencia fluida, SASS para estilos avanzados y Django como CMS para el backend.`,
    englishDescription: `Project ${aviva}. Merges Next.js, SASS and Django into a dynamic website with sleek design and efficient content management: Next.js for a seamless experience, SASS for styling and Django as the backend CMS.`,
    mobileDescription: `Proyecto ${aviva}. Sitio dinámico con Next.js, SASS y Django como CMS.`,
    mobileEnglishDescription: `Project ${aviva}. Dynamic website with Next.js, SASS and Django as the CMS.`,
    bgButtonColor: "bg-primaryBlue",
    img: "/images/projects/aviva.webp",
    titleButton: "Web",
    url: "https://aviva.pe/",
    tags: ["Next.js", "SASS", "Django"],
  },
  {
    id: 2,
    title: "Up",
    description: `Proyecto ${up}. Plataforma de e-learning que integra Next.js, SASS y Django para ofrecer una experiencia educativa interactiva y personalizable: navegación rápida, una interfaz visual rica y un backend que gestiona el contenido de forma eficaz.`,
    englishDescription: `Project ${up}. An e-learning platform built with Next.js, SASS and Django, offering an interactive, customizable learning experience: fast navigation, a rich interface and a backend that manages course content efficiently.`,
    mobileDescription: `Proyecto ${up}. Plataforma de e-learning con Next.js, SASS y Django.`,
    mobileEnglishDescription: `Project ${up}. E-learning platform built with Next.js, SASS and Django.`,
    bgButtonColor: "bg-primaryRed",
    img: "/images/projects/up.webp",
    titleButton: "E-learning",
    url: "https://up-capacitaciones.com/",
    tags: ["Next.js", "SASS", "Django"],
  },
];
