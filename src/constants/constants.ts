export const LINKS = {
  twitter: 'https://twitter.com/Render_Archive',
  discord: 'http://discord.gg/Fp8TypMZZv',
};

export type Menu = 'home' | 'games' | 'info';

type MenuRecord = {
  [key in Menu]: key;
};

export const menu: MenuRecord = {
  home: 'home',
  games: 'games',
  info: 'info',
};

export type Social = 'twitter' | 'discord';

type SocialInfo<S> = {
  social: S;
  link: string;
  path: string;
};

type SocialsRecord = {
  [key in Social]: SocialInfo<key>;
};

export const socials: SocialsRecord = {
  twitter: {
    social: 'twitter',
    link: LINKS.twitter,
    path: '/icons/twitter.png',
  },
  discord: {
    social: 'discord',
    link: LINKS.discord,
    path: '/icons/discord.svg',
  },
};

interface Image {
  src: string;
  alt: string;
}

export const IMAGES: Image[] = [
  {
    src: '/super-mario-world.png',
    alt: 'super mario world',
  },
];
