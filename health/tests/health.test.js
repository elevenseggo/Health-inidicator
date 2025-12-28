import { getStatus, validateCharacter } from "../src/health.js";

describe('health status', () =>
    {
        test.each([
  { health: 90, expected: 'healthy' },
    { health: 51, expected: 'healthy' },
    { health: 100, expected: 'healthy' },

    { health: 50, expected: 'wounded' },
    { health: 30, expected: 'wounded' },
    { health: 25, expected: 'wounded' },
    { health: 15, expected: 'wounded' },

    { health: 14, expected: 'critical' },
    { health: 10, expected: 'critical' },
    { health: 5, expected: 'critical' },
    { health: 0, expected: 'critical' },
])('for health $health -> $expected', ({health, expected}) => {
    expect(getStatus({name: 'Маг', health })).toBe(expected);
});
    });


    describe('validate character', () => {
  test.each([
    { character: null, error: 'Character must be an object' },
    { character: undefined, error: 'Character must be an object' },
    { character: 'string', error: 'Character must be an object' },
    { character: 123, error: 'Character must be an object' },
  ])('validation $character → $error', ({ character, error }) => {
    expect(() => validateCharacter(character)).toThrow(error);
  });

  test.each([
    { health: '11', error: 'Health must be a number' },
    { health: null, error: 'Health must be a number' },
    { health: undefined, error: 'Health must be a number' },
  ])('health $health → $error', ({ health, error }) => {
    expect(() => validateCharacter({ name: 'Маг', health })).toThrow(error);
  });

  test.each([
    { health: -1, error: 'Health must be between 0 and 100' },
    { health: 101, error: 'Health must be between 0 and 100' },
  ])('health $health → $error', ({ health, error }) => {
    expect(() => validateCharacter({ name: 'Маг', health })).toThrow(error);
  });

  test.each([
    { health: 0 },
    { health: 1 },
    { health: 15 },
    { health: 50 },
    { health: 90 },
    { health: 99 },
    { health: 100 },
  ])('health $health should not throw an error', ({ health }) => {
    expect(() => validateCharacter({ name: 'Маг', health })).not.toThrow();
  });
});
