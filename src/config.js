module.exports = {
  siteTitle: 'Daniel Garcia | Programador',
  siteDescription:
    'Soy un programador de Guadalajara, Jalisco. Especializado en construir (ocacionalmente diseñar y/o analaizar) sitios web, aplicaciones o contenido excepcional.',
  siteKeywords:
    'Daniel Garcia, Daniel, Garcia, P41N3ST, software engineer, front-end engineer, web developer, javascript',
  siteUrl: 'https://dangarcia.netlify.app',
  siteLanguage: 'es_MX',
  googleAnalyticsID: 'UA-143028713-1',
  googleVerification: 'TTTTTTTTTTTTTT',
  name: 'Daniel Garcia',
  location: 'Guadalajara, Jalisco',
  email: 'daniel4581@protonmail.com',
  github: 'https://github.com/P41N3ST',
  twitterHandle: '@Almirant4581',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/P41N3ST',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/daniel-garcia-510a6518b',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/dany_munoz01',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/Almirant4581',
    },
  ],

  navLinks: [
    {
      name: 'Acerca',
      url: '/#about',
    },
    {
      name: 'Experiencia',
      url: '/#jobs',
    },
    {
      name: 'Trabajo',
      url: '/#projects',
    },
    {
      name: 'Contacto',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#ff4075',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
