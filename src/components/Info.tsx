import React from 'react';
import styled from 'styled-components';
import TwitterHandle from './TwitterHandle';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  line-height: 2.5rem;
  margin-right: 24px;
  margin-left: 24px;
`;

const Info = (): React.ReactElement => (
  <Container>
    <h3>what is this?</h3>
    <span>
      the render archive is a dedicated group collecting render artwork for video games (mainly
      Nintendo)
    </span>
    <h3>but why?</h3>
    <span>because preservation is important!</span>
    <h3>how do you collect the renders?</h3>
    <span>people send us scanned items, we collect scanned items ourselves, etc.</span>
    <h3>when do you release these renders?</h3>
    <span>???</span>
    <h3>where can I follow you to be most up to date?</h3>
    <span>
      follow our twitter <TwitterHandle />
    </span>
  </Container>
);

export default Info;
