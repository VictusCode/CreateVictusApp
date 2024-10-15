type ModesType = Record<string, boolean | string>;

interface Props {
  main?: string;
  modifiers?: ModesType;
  additional?: string[];
}

/**
 * classNames - function for creating class names
 * @param {Object} props
 * @param {string} [props.main] - main class name
 * @param {Object} [props.modifiers] - object with modifiers
 * @param {Array} [props.additional] - array with additional class names
 * @returns {string}
 * @example
 * classNames({
 *  main: 'main-class-name',
 *  modifiers: {
 *    'modifier-class-name': true,
 *    'another-modifier-class-name': false,
 *  },
 *  additional: ['additional-class-name'],
 * });
 * // returns 'main-class-name additional-class-name modifier-class-name'
 */
const classNames = ({ main = '', modifiers = {}, additional = new Array<string>() }: Props): string =>
  [
    main,
    ...additional,
    ...Object.entries(modifiers)
      .filter(([, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');

export { classNames };
