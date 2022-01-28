import { ObjectTyped } from 'object-typed';
import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { menu, Menu, socials } from '../constants/constants';

interface Props {
  setSelectedMenuItem: Dispatch<SetStateAction<Menu>>;
}

const Container = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #c2c2c2;
`;

const Navigator = styled.div`
  position: fixed;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainNavigation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
  padding: 12px;
  flex: 1;
`;

const Socials = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 12px;
`;

const Icon = styled.img`
  width: 48px;
  height: 48px;
  cursor: pointer;
`;

const Social = styled.div`
  width: 36px;
  height: 36px;
  cursor: pointer;
`;

const SocialImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Sidebar = ({ setSelectedMenuItem }: Props): React.ReactElement => (
  <Container>
    <Navigator>
      <MainNavigation>
        {ObjectTyped.keys(menu).map((key) => (
          <Icon
            key={menu[key]}
            src={`/icons/${menu[key]}-icon.png`}
            alt={`${menu[key]} icon`}
            onClick={() => setSelectedMenuItem(menu[key])}
          />
        ))}
      </MainNavigation>
      <Socials>
        {ObjectTyped.keys(socials).map((key) => (
          <a
            key={socials[key].social}
            href={socials[key].link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Social>
              <SocialImage src={socials[key].path} alt={`${socials[key].social} icon`} />
            </Social>
          </a>
        ))}
      </Socials>
    </Navigator>
  </Container>
);

export default Sidebar;
