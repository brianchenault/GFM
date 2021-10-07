import { cleanUrl } from '../utils';

test('it strips all toReplace strings', () => {
  expect(
    cleanUrl('tino-ollie-and-<strong>annette</strong>-blandford-yopp', [
      '<strong>',
      '</strong>'
    ])
  ).toBe('tino-ollie-and-annette-blandford-yopp');
});

test('it throws an error when toReplace contains a type other than a string', () => {
  expect(() => {
    cleanUrl('tino-ollie-and-<strong>annette</strong>-blandford-yopp', [
      undefined
    ]);
  }).toThrow('cleanUrl expects Array<string> for toReplace parameter');
});
