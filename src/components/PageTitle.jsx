import React from 'react';
import { Helmet } from 'react-helmet';

import Config from '../Config.jsx';

function PageTitle(props) {
  return (
    <Helmet>
      <title>{props.title} - {Config.siteName}</title>
    </Helmet>
  );
}

export default PageTitle;