import React from 'react';
import Body from './Body';
import Head from './Head';

interface Props {
  children: React.ComponentProps<'div'>['children'];
}

/**
 * Main app component.
 */
const App = ({ children }: Props): React.ReactElement => (
  <>
    <Head />
    <Body>{children}</Body>
  </>
);

export default App;
