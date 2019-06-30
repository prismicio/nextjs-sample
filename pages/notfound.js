import { Fragment } from 'react';
import { Link } from '../routes';

export default ({ msg = 'Page not found' }) =>
  <Fragment>
    <h1>We're sorry, something went wrong</h1>
    <div className="l-wrapper">
      <hr className="separator-hr" />
    </div>
    <div className="l-wrapper">
      <div className="not-found">
        <p>{msg}</p>

        <p><Link to="/"><a>Continue to our homepage</a></Link></p>
      </div>
    </div>
  </Fragment>;
