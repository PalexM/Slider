import { render } from "react-testing-library";
import "dom-testing-library/extended-expect";

expect.extend({
  toBeWithinRange(received, min, max) {
    const pass = received >= min && received <= max;
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be within range ${min} - ${max}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${received} to be within range ${min} - ${max}`,
        pass: false,
      };
    }
  },
});

test('numeric ranges', () => {
  expect(100).toBeWithinRange(0, 100);
  expect(101).not.toBeWithinRange(0, 100);
  expect(-1).not.toBeWithinRange(0, 100);
});
