import { Link } from '../routes';
import { Link as LinkHelper } from 'prismic-reactjs';
import { linkResolver } from '../prismic-configuration';
import React from 'react';

export default props =>
  <Link to={LinkHelper.url(props.to, linkResolver)}>{props.children}</Link>;
