import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import Sidebar from './Sidebar';

interface Props {
  children: React.ComponentProps<'div'>['children'];
}

const Container = styled.div`
  max-width: 400px;
  height: 100vh;
  display: flex;
  background-image: url('/background/background.png');
  background-size: cover;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
  padding: 24px;
`;

const Page = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  line-height: 2rem;
  padding: 24px;
`;

/**
 * Body of the app.
 */
const Body = ({ children }: Props): React.ReactElement => (
  <Container>
    <Sidebar />
    <Content>
      <Logo />
      <Page>{children}</Page>
    </Content>
  </Container>
);

export default Body;
