
import f from '../src/compare';

const file1 = './__tests__/__fixtures__/before.json';
const file2 = './__tests__/__fixtures__/after.json';

test('compare two json-files', () => {
  expect(f(file1, file2)).toEqual({
    host: 'hexlet.io',
    '+ timeout': 20,
    '- timeout': 50,
    '- proxy': '123.234.53.22',
    '+ verbose': true,
  });
});
