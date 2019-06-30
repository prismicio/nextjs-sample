import { Button, Container, Jumbotron } from 'react-bootstrap';
import React from 'react';

export default class Error extends React.Component {
  static getInitialProps ({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;

    console.log('> > > > > > > ~SERVER ERRROR~ > > > > > > >', statusCode);

    return { statusCode };
  }

  render404 () {
    return (
      <Jumbotron fluid>
        <Container>
          <h3>Page not found &ndash; 404</h3>
          <hr />
          <h2>Sorry, we can't seem to locate the page you have tried to visit.</h2>
          <h4>Maybe you can still find what you're looking for...</h4>
          <Button href="/" variant="info">Go to the homepage</Button>
        </Container>
      </Jumbotron>
    );
  }

  render500 () {
    return (
      <Jumbotron fluid>
        <Container>
          <h3>Server encountered an error &ndash; 500</h3>
          <hr />
          <h2>Sorry, there was a problem processing your request.</h2>
          <h4>Please try again very soon and hopefully this issue will have past.</h4>
        </Container>
      </Jumbotron>
    );
  }

  renderDefault () {
    return (
      <Jumbotron className="mt-5">
        <p className="h3">
          {this.props.statusCode
            ? `An error ${this.props.statusCode} occured on the server, we appologise. Please try again.`
            : `An error occured in this application, we appologise. Please try again`}
        </p>
      </Jumbotron>
    );
  }

  render () {
    if (this.props.statusCode === 404) return this.render404();
    else if (this.props.statusCode >= 500 && this.props.statusCode <= 599) return this.render500();
    return this.renderDefault();
  }
}
