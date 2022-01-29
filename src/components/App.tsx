import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ComponentProps<'div'>['children'];
}

const TITLE = 'the render archive';
const DESCRIPTION = 'a group collecting render artwork for video games';
const WALLPAPER_PATH = '/the-render-archive-bg.png';
const WALLPAPER_ALT = 'the render archive logo';
const FAVICON_PATH = '/favicon.png';
const PAGE_URL = 'https://therenderarchive.com';
const TWITTER_URL = 'https://twitter.com/Render_Archive';

const Body = styled.div`
  width: 100vw;
  height: 100vh;
`;

const App = ({ children }: Props): React.ReactElement => (
  <>
    <Head>
      <title>{TITLE}</title>
      <link rel="icon" type="image/png" href={FAVICON_PATH} />
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
      <meta name="twitter:creator" content="@ssamkough" />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:image" content={WALLPAPER_PATH} />
      <meta name="twitter:image:alt" content={WALLPAPER_ALT} />
      <meta name="twitter:url" content={TWITTER_URL} />

      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Body>{children}</Body>
  </>
);

export default App;
