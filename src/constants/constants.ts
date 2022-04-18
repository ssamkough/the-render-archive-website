export const LINKS = {
  twitter: 'https://twitter.com/Render_Archive',
  discord: 'http://discord.gg/Fp8TypMZZv',
};

export type Menu = 'home' | 'collections' | 'donations' | 'twitter' | 'discord';

type MenuItem = {
  link: string;
  img: string;
  alt: string;
  isExternal?: boolean;
};

/**
 * All sidebar menu items and their content.
 */
export const MENU: Record<Menu, MenuItem> = {
  home: {
    link: '/',
    img: '/icons/home-icon.png',
    alt: 'home icon',
  },
  collections: {
    link: '/collections',
    img: '/icons/collections-icon.png',
    alt: 'collections icon',
  },
  donations: {
    link: '/donations',
    img: '/icons/donations-icon.png',
    alt: 'donations icon',
  },
  twitter: {
    link: LINKS.twitter,
    img: '/icons/twitter-icon.png',
    alt: 'twitter icon',
    isExternal: true,
  },
  discord: {
    link: LINKS.discord,
    img: '/icons/discord-icon.png',
    alt: 'discord icon',
    isExternal: true,
  },
};
