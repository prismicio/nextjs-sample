import { Client } from '../prismic-configuration';
import { Component } from 'react';
import Layout from '../layouts/FullWidth';
import NotFound from './notfound';
import { RichText } from 'prismic-reactjs';

class Second extends Component {
  render () {
    const { document, error } = this.props;
    const content = document.data;
    const pageMeta = {
      title: RichText.asText(content.title),
      description: RichText.asText(content.meta_description),
    };

    if (error) return <Layout><NotFound /></Layout>;

    return (
      <Layout meta={pageMeta}>
        {RichText.render(content.title)}
        {RichText.render(content.body_copy)}
        <p>
          By the way, this is another page of the SSR example, you accessed it{' '}
          <strong>{this.props.isServer ? 'server' : 'client'} side</strong>.
        </p>
      </Layout>
    );
  }

  static async getInitialProps ({ req }) {
    const isServer = typeof window === 'undefined';

    try {
      const document = await Client(req).getSingle('second');
      return {
        document,
        isServer,
      };
    } catch (error) {
      return { error: true };
    }
  }
}

export default Second;
