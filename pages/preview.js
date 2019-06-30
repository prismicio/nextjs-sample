import { Client, linkResolver } from '../prismic-configuration';
import { Component } from 'react';
import Router from 'next/router';

export default class extends Component {
  static async getInitialProps ({ req, res, query }) {
    const url = await Client(req).previewSession(query.token, linkResolver, '/');

    if (res) {
      res.writeHead(301, {
        Location: url,
      });
      res.end();
      res.finished = true;
    } else {
      Router.push(url);
    }
  }
}
