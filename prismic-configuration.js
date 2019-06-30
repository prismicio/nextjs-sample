import PrismicLib from 'prismic-javascript';

const API_URL = 'https://mlp-test.cdn.prismic.io/api/v2';
const ACCESS_TOKEN = null;
// const CLINET_ID = 'xxxxxx';
// const CLIENT_SECRED = 'xxxxxx';

export const Prismic = PrismicLib;
export const apiEndpoint = API_URL;

// -- Access token if the Master is not open
// export const accessToken = ACCESS_TOKEN;

// OAuth
// export const clientId = CLIENT_ID;
// export const clientSecret = CLIENT_SECRET;

// -- Links resolution rules
// This function will be used to generate links to Prismic.io documents
// As your project grows, you should update this function according to your routes
export const linkResolver = doc => {
  if (doc.type === 'home') return '/';
  else if (doc.type === 'first') return '/first';
  else if (doc.type === 'second') return '/second';
  else if (doc.type === 'speakers_page') return '/speakers';
  else if (doc.type === 'speaker') return `/speakers/${doc.uid}`;
  else if (doc.type === 'post') return `/articles/${doc.uid}`;
  return '/';
};

let frontClient;

export const Client = (req = null) => {
  // prevent generate new instance for client side since we don't need the refreshed request object
  if (!req && frontClient) return frontClient;

  const options = Object.assign({}, req ? { req } : {}, ACCESS_TOKEN ? { accessToken: ACCESS_TOKEN } : {});
  return PrismicLib.client(API_URL, options);
};
