import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { apiEndpoint } from '../prismic-configuration';
import { Fragment } from 'react';
import Head from 'next/head';
import { Link } from '../routes';
// import { RichText } from 'prismic-reactjs';

const NavMenu = props =>
  <Container>
    <Navbar expand="lg" variant="dark">
      <Link href="/" passHref><Navbar.Brand className="nav__logo"><img src="/static/logo.svg" alt="Concentric Festival" /></Navbar.Brand></Link>
      <Navbar.Toggle aria-controls="nav_primary" />
      <Navbar.Collapse id="nav_primary">
        <Nav className="ml-auto">
          <Link href="/second" passHref><Nav.Link>Agenda</Nav.Link></Link>
          <Link href="/speakers" passHref><Nav.Link>Speakers</Nav.Link></Link>
          <Link href="/second" passHref><Nav.Link>Sponsors</Nav.Link></Link>
          <Link href="/tickets" passHref><Button variant="outline-light" className="ml-2">Tickets</Button></Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Container>;

const GlobalHeader = props => {
  const { title = '', description = '' } = props;

  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <title>{title}</title>

        <script
          dangerouslySetInnerHTML={{ __html: `
            window.prismic = { endpoint: "${apiEndpoint}" }
          ` }} />
        <script src="//static.cdn.prismic.io/prismic.min.js" />
      </Head>

      <div className="primary-navigation">
        <NavMenu />
      </div>
    </Fragment>
  );
};

export default GlobalHeader;
