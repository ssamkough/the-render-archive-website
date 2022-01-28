import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import App from '../components/App';
import Games from '../components/Games';
import Home from '../components/Home';
import Info from '../components/Info';
import Sidebar from '../components/Sidebar';
import { menu, Menu } from '../constants/constants';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
  padding: 24px;
  background-color: #d9c3c9;
`;

const Logo = styled.img`
  width: 250px;
  height: 150px;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  line-height: 2rem;
  padding: 24px;
`;

const index = (): React.ReactElement => {
  const [selectedMenuItem, setSelectedMenuItem] = useState<Menu>(menu.home);

  const content = useMemo(() => {
    switch (selectedMenuItem) {
      case menu.home:
        return <Home />;
      case menu.games:
        return <Games />;
      case menu.info:
        return <Info />;
      default:
        return null;
    }
  }, [selectedMenuItem]);

  return (
    <App>
      <Container>
        <Sidebar setSelectedMenuItem={setSelectedMenuItem} />
        <Body>
          <Logo src="/the-render-archive.png" alt="the render archive logo" />
          <Content>{content}</Content>
        </Body>
      </Container>
    </App>
  );
};

export default index;
