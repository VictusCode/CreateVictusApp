import getUniqueKey from '.';

describe('getUniqueKey', () => {
  test('default parameters', () => {
    const key = getUniqueKey();
    expect(key).toMatch(/^.{8}[0-9a-z]+$/);
    const counterPart = key.substr(8);
    expect(Number.isNaN(Number.parseInt(counterPart, 36))).toBe(false);
  });

  test('custom prefix', () => {
    const key = getUniqueKey('custom', 16);
    expect(key).toMatch(/^custom[a-z0-9]{8}[0-9a-z]+$/);
  });

  test('custom length', () => {
    const key = getUniqueKey('', 12);
    expect(key).toMatch(/^[a-z0-9]{12}[0-9a-z]+$/);
  });

  test('custom prefix and length', () => {
    const key = getUniqueKey('custom', 12);
    expect(key).toMatch(/^custom[a-z0-9]{4}[0-9a-z]+$/);
  });

  test('prefix with special characters', () => {
    const key = getUniqueKey('$@#', 10);
    expect(key).toMatch(/^\$@#[a-z0-9]{6}[0-9a-z]+$/);
  });

  test('length is zero', () => {
    const key = getUniqueKey('zero', 0);
    expect(key).toMatch(/^zero[0-9a-z]+$/);
  });

  test('length is negative', () => {
    const key = getUniqueKey('negative', -1);
    expect(key).toMatch(/^negative[0-9a-z]+$/);
  });

  test('prefix and length are zero', () => {
    const key = getUniqueKey('', 0);
    expect(key).toMatch(/^[0-9a-z]+$/);
  });

  test('prefix and length are negative', () => {
    const key = getUniqueKey('', -1);
    expect(key).toMatch(/^[0-9a-z]+$/);
  });

  test('prefix and length are very large', () => {
    const key = getUniqueKey('a', 1000);
    expect(key).toMatch(/^a[a-z0-9]{992}[0-9a-z]+$/);
    expect(key.length).toBe(1001);
  });

  test('length is smaller than prefix', () => {
    const key = getUniqueKey('prefix', 5);
    expect(key).toMatch(/^prefix[a-z0-9]{0}[0-9a-z]+$/);
  });

  test('prefix contains spaces', () => {
    const key = getUniqueKey('with spaces', 12);
    expect(key).toMatch(/^with spaces[a-z0-9]{0}[0-9a-z]+$/);
  });

  test('random counter is included', () => {
    const key = getUniqueKey('with-counter', 12);
    const counterPart = key.substr(12);
    expect(Number.isNaN(Number.parseInt(counterPart, 36))).toBe(false);
  });
});
