import React from 'react';
import styled from 'styled-components';
import TwitterHandle from './TwitterHandle';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  line-height: 2.5rem;
  margin-right: 24px;
  margin-left: 24px;
`;

const Home = (): React.ReactElement => (
  <Container>
    <span>welcome!</span>
    <span>
      the render archive is a website for the render archive, a dedicated group collecting render
      artwork for video games (mainly Nintendo)
    </span>
    <span>
      we're super excited to share with you all sorts of renders - make sure to stay up to date with
      our latest renders by following our twitter <TwitterHandle />!
    </span>
  </Container>
);

export default Home;
