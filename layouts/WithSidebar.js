import { Container } from 'react-bootstrap';
import { Fragment } from 'react';
import GlobalHeader from '../components/GlobalHeader';

const SidebarLayout = props => {
  const { meta = {} } = props;

  return (
    <Fragment>
      <GlobalHeader title={meta.title} description={meta.meta_description} />
      <Container className="sidebar">
      </Container>
      <Container>
        {props.children}
      </Container>
    </Fragment>
  );
};

export default SidebarLayout;
