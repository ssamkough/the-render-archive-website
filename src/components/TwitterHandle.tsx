import React from 'react';
import { LINKS } from '../constants/constants';

/**
 * External link to the twitter.
 */
const TwitterHandle = (): React.ReactElement => (
  <a href={LINKS.twitter} target="_blank" rel="noreferrer">
    @Render_Archive
  </a>
);

export default TwitterHandle;
