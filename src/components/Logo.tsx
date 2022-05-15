import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const LOGO_IMG = '/misc/logo.png';
const LOGO_IMG_ALT = 'The Render Archive Logo';
const LOGO_WIDTH = 200;
const LOGO_HEIGHT = 200;

const Container = styled.div`
  width: ${LOGO_WIDTH}px;
  height: ${LOGO_HEIGHT}px;
  display: flex;
  justify-content: center;
`;

/**
 * Logo at the top of the app.
 */
const Logo = (): React.ReactElement => (
  <Container>
    <Image
      src={LOGO_IMG}
      alt={LOGO_IMG_ALT}
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      objectFit="contain"
    />
  </Container>
);

export default Logo;
