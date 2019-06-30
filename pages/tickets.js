import { Component } from 'react';
// import NotFound from './notfound';
// import { Client } from '../prismic-configuration';
// import { RichText } from 'prismic-reactjs';
import Layout from '../layouts/FullWidth';

class Tickets extends Component {
  render () {
    const pageMeta = {
      title: 'Tickets page',
      description: 'Buy some tickets on this page',
    };

    // if (error) return <Layout><NotFound /></Layout>;

    return (
      <Layout meta={pageMeta}>
        <h2>Tickets page</h2>
        <p>
          Placeholder page for the ticket info.
        </p>
      </Layout>
    );
  }

  // static async getInitialProps({req}) {
  //   const isServer = typeof window === "undefined";

  //   try {
  //     const document = await Client(req).getSingle('second');
  //     return {
  //       document,
  //       isServer
  //     }
  //   } catch (error) {
  //     return { error: true }
  //   }
  // }
}

export default Tickets;
