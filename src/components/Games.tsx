import React from 'react';
import styled from 'styled-components';
import { IMAGES } from '../constants/constants';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 425px) {
    justify-content: center;
  }
`;

const ImageContainer = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 16px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Games = (): React.ReactElement => (
  <Container>
    {IMAGES.map((image) => (
      <ImageContainer key={image.alt}>
        <Image src={image.src} alt={image.alt} />
      </ImageContainer>
    ))}
  </Container>
);

export default Games;
