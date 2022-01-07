import validateUrl from "../src/client/js/checkURL";

test('valdting url test', () => {
  expect(validateUrl('user')).toBeFalsy;
});
test('valdting url test', () => {
  expect(validateUrl('https://www.nytimes.com/2022/01/07/opinion/russia-ukraine-putin-nato.html')).toBeTruthy;
});