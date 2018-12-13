const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === 'development'
    ? {}
    : process.env.NOW_REGION === false
      ? require('next/constants')
      : require('next-server/constants');

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    // Config used to run in production.
    return {};
  }

  const withSass = require('@zeit/next-sass');
  return withSass();
};
