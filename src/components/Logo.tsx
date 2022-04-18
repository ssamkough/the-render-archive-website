import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const LOGO_IMG = '/misc/logo.png';
const LOGO_IMG_ALT = 'The Render Archive Logo';

const Container = styled.div`
  width: 250px;
  height: 150px;
  display: flex;
  justify-content: center;
`;

/**
 * Logo at the top of the app.
 */
const Logo = (): React.ReactElement => (
  <Container>
    <Image src={LOGO_IMG} alt={LOGO_IMG_ALT} width="100%" height="100%" objectFit="contain" />
  </Container>
);

export default Logo;
