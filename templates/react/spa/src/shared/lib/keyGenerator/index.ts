let counter = 0;

/**
 * Generate a unique key
 * @param prefix - prefix for the key
 * @param length - length of the unique key (excluding the prefix)
 * @returns {string}
 * @example
 * generateUniqueKey('prefix', 16);
 * // returns 'prefixabcdefghijklmnop'
 * generateUniqueKey();
 * // returns 'hijklmnop'
 */
const getUniqueKey = (prefix: string = '', length: number = 8): string => {
  const randomChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const randomCharsLength = randomChars.length;

  let key = prefix;

  while (key.length < length) {
    key += randomChars[(Math.random() * randomCharsLength) | 0];
  }

  return key + (counter++).toString(36);
};

export { getUniqueKey };
