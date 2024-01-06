import { useCallback, useRef, useSyncExternalStore } from 'react';
import { CallbackType, WrappedCallbackType, KeyType } from '../types';
import { addCallback } from '../core';

type Props = {
  key: KeyType;
  callback: CallbackType;
  disabled?: boolean;
};

const useKeyboard = ({ key, callback, disabled = false }: Props) => {
  const wrappedCallback = useRef<WrappedCallbackType>(null);

  wrappedCallback.current = { callback };

  const subscribe = useCallback((): (() => null | void) => {
    if (disabled) return () => null;

    const removeCallback = addCallback({
      key,
      wrappedCallback,
    });

    return removeCallback;
  }, [key, disabled]);

  useSyncExternalStore(subscribe, () => null);
};

export { useKeyboard };
