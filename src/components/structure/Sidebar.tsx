import { useRouter } from 'next/router';
import { ObjectTyped } from 'object-typed';
import React from 'react';
import styled from 'styled-components';
import { MENU } from '../../constants/constants';

const Container = styled.div`
  max-width: 300px;
  width: 100%;
  height: 100%;
  display: flex;
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

const Icon = styled.img`
  width: 128px;
  height: 128px;
  cursor: pointer;
`;

/**
 * Sidebar of the app.
 */
const Sidebar = (): React.ReactElement => {
  const { push } = useRouter();

  return (
    <Container>
      <Navigator>
        <MainNavigation>
          {ObjectTyped.entries(MENU).map((item) =>
            item[1]?.isExternal ? (
              <a key={item[0]} href={item[1].link} target="_blank" rel="noreferrer">
                <Icon key={item[0]} src={item[1].img} alt={item[1].alt} />
              </a>
            ) : (
              <Icon
                key={item[0]}
                src={item[1].img}
                alt={item[1].alt}
                onClick={() => push(item[1].link)}
              />
            ),
          )}
        </MainNavigation>
      </Navigator>
    </Container>
  );
};

export default Sidebar;
