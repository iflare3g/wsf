import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Wood Sound Festival | Summer Edition', // e.g: 'Name | Developer'
  lang: 'it', // e.g: en, es, fr, jp
  description: 'Wood Sound Festival 2021 Sunset Edition', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Wood Sound Festival Sunset Edition',
  name: 'Wood Sound Festival',
  subtitle: 'Summer Edition',
  cta: 'Lago Sirino',
};

// ABOUT DATA
export const artistsData = [
  {
    id: nanoid(),
    img: 'wsf-lagonegro-guest.jpg',
    info: 'Joan Thiele',
  },
  {
    id: nanoid(),
    img: 'merlot.jpg',
    info: 'Merlot',
  },
];

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'gazz.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'fulmi.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'willy.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'merifiori.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/woodsoundfestival',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/wood_sound_festival/',
    },
    {
      id: nanoid(),
      name: 'envelope',
      url: 'mailto:woodsoundfestival@gmail.com',
    },
    {
      id: nanoid(),
      name: 'phone',
      url: 'tel:+393347944763',
    },
    {
      id: nanoid(),
      name: 'map-marker',
      url: 'https://goo.gl/maps/wkwFTBTKJKg62uzP9',
    },
  ],
};

// SPONSORS DATA
export const sponsorData = [
  {
    id: nanoid(),
    title: '',
    img: 'san_ben.jpg',
  },
  {
    id: nanoid(),
    title: '',
    img: 'viola.jpg',
  },
  {
    id: nanoid(),
    title: '',
    img: 'forst.jpg',
  },
];
