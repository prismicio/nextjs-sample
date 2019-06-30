import '../sass/app.scss';
import App, { Container } from 'next/app';
import AOS from 'aos';
import NProgress from 'next-nprogress/component';
import React from 'react';

export default class extends App {
  componentDidMount () {
    AOS.init({
      offset: 120, // offset (in px) from the original trigger point
      delay: 50, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease-in-out', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
    });
  }

  render () {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <NProgress
          color="#edff3b"
          showAfterMs={200}
        />
        <style jsx global>{`
          #nprogress .bar {
            height: 3px;
          }
          #nprogress .spinner {
            top: 45px;
            left: 50%;
          }
          #nprogress .spinner-icon {
            width: 90px;
            height: 90px;
          }
        `}</style>
        <Component {...pageProps} />
      </Container>
    );
  }

  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
}
