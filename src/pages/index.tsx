import React from 'react';
import styled from 'styled-components';
import App from '../components/structure/App';
import TwitterHandle from '../components/TwitterHandle';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

/**
 * Home page of the app.
 */
const index = (): React.ReactElement => (
  <App>
    <Container>
      <span>welcome!</span>
      <span>
        the render archive is a website for the render archive, a dedicated group collecting render
        artwork for video games (mainly Nintendo)
      </span>
      <span>
        we&apos;re super excited to share with you all sorts of renders - make sure to stay up to
        date with our latest renders by following our twitter <TwitterHandle />!
      </span>
    </Container>
  </App>
);

export default index;
