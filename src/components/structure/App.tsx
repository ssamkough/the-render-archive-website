import React from 'react';
import styled from 'styled-components';
import Body from './Body';
import Head from './Head';

interface Props {
  children: React.ComponentProps<'div'>['children'];
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

/**
 * Main app component.
 */
const App = ({ children }: Props): React.ReactElement => (
  <Wrapper>
    <Head />
    <Body>{children}</Body>
  </Wrapper>
);

export default App;
