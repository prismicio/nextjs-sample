import { Container } from 'react-bootstrap';
import { Fragment } from 'react';
import GlobalHeader from '../components/GlobalHeader';

const Layout = props => {
  const { meta = {} } = props;

  return (
    <Fragment>
      <GlobalHeader title={meta.title} description={meta.meta_description} />
      {props.children}
    </Fragment>
  );
};

export default Layout;
