
// console.log('qwqweqwe');

const f = require('../../lib/cli.js');

// console.log(f('~/after.json', '~/before.json'));

test('compare two json-files', () => {
  expect(3).toBe(3);

  // const objReturn = `{
  //   host: hexlet.io
  // + timeout: 20
  // - timeout: 50
  // - proxy: 123.234.53.22
  // + verbose: true
  // }`;

  const objReturn = '{цкцукцукцук}';

  expect(f('~/after.json', '~/before.json')).toBe(objReturn);
});
