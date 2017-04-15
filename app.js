/* eslint-disable global-require, import/no-unresolved, no-console */
try {
  require('./dist/server.js');
} catch (ex) {
  console.error('Error', ex.message);
  throw Error('./dist/server.js does not exist or contains error.');
}
/* eslint-enable global-require, import/no-unresolved, no-console */
