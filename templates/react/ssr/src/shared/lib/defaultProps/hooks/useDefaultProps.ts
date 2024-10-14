import { useMemo } from 'react';

/**
 * Hook to merge default props with the props passed to the component.
 * @param {object} _props - Props passed to the component.
 * @param {object} defaultProps - Default props.
 * @returns {object} Props merged with default props.
 * @example
 * const defaultProps = {
 *  name: 'John Doe',
 *  age: 18,
 * };
 * const Component = memo((props_: Props) => {
 *  const props = useDefaultProps(props_, defaultProps);
 *  return (...)
 * }, [...]);
 */
const useDefaultProps = <Props extends object, DefaultProps extends Partial<Props>>(
  _props: Props,
  defaultProps: DefaultProps,
): DefaultProps & Props => {
  const props = useMemo(
    () => ({
      ...defaultProps,
      ..._props,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [_props],
  );

  return props as DefaultProps & Props;
};

export { useDefaultProps };
