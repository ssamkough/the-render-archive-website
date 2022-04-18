import NextHead from 'next/head';
import React from 'react';

const TITLE = 'The Render Archive';
const DESCRIPTION = 'A group collecting render artwork for video games.';
const WALLPAPER_PATH = '/background/background.png';
const WALLPAPER_ALT = 'The Render Archive Background';
const LOGO_IMG = '/misc/logo.png';
const PAGE_URL = 'https://therenderarchive.com';
const TWITTER_URL = 'https://twitter.com/Render_Archive';

/**
 * Head of the app.
 */
const Head = (): React.ReactElement => (
  <NextHead>
    <title>{TITLE}</title>
    <link rel="icon" type="image/png" href={LOGO_IMG} />
    <meta name="description" content={DESCRIPTION} />

    <meta property="og:type" content="website" />
    <meta property="og:title" content={TITLE} />
    <meta property="og:description" content={DESCRIPTION} />
    <meta property="og:image" content={WALLPAPER_PATH} />
    <meta property="og:image:secure_url" content={WALLPAPER_PATH} />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="1920" />
    <meta property="og:image:height" content="1080" />
    <meta property="og:image:alt" content={WALLPAPER_ALT} />
    <meta property="og:url" content={PAGE_URL} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content="@Render_Archive" />
    <meta name="twitter:title" content={TITLE} />
    <meta name="twitter:description" content={DESCRIPTION} />
    <meta name="twitter:image" content={WALLPAPER_PATH} />
    <meta name="twitter:image:alt" content={WALLPAPER_ALT} />
    <meta name="twitter:url" content={TWITTER_URL} />

    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </NextHead>
);

export default Head;
