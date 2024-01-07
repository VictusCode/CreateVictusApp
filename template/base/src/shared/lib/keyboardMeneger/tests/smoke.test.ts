import { act, renderHook, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { useKeyboard } from '../index';
import { keys } from './constants';

describe('[keyboardManager] base', () => {
  it.each(keys)('should call key callback once', async (key) => {
    const callback = vi.fn();

    renderHook(() =>
      useKeyboard({
        key,
        callback,
      }),
    );

    await act(async () => {
      userEvent.keyboard(`{${key}}`);
      await waitFor(() => {
        expect(callback).toBeCalledTimes(1);
      });
    });
  });

  it.each(keys)('should call key callback multiple times', async (key) => {
    const callback = vi.fn();

    renderHook(() =>
      useKeyboard({
        key,
        callback,
      }),
    );

    const amountOfCalls = Math.round(Math.random() * 10);

    await act(async () => {
      for (let i = 0; i < amountOfCalls; i++) userEvent.keyboard(`{${key}}`);
      await waitFor(() => {
        expect(callback).toBeCalledTimes(amountOfCalls);
      });
    });
  });

  it.each(keys)('should not call key callback when hook is unmounted', async (key) => {
    const callback = vi.fn();

    const { unmount } = renderHook(() =>
      useKeyboard({
        key,
        callback,
      }),
    );

    await act(async () => {
      userEvent.keyboard(`{${key}}`);
    });

    await waitFor(() => {
      expect(callback).toBeCalledTimes(1);
    });

    unmount();

    await act(async () => {
      userEvent.keyboard(`{${key}}`);
    });

    await waitFor(() => {
      expect(callback).toBeCalledTimes(1);
    });
  });

  it.each(keys)('should not call key callback when hook is unmounted', async (key) => {
    const callback = vi.fn();

    const { unmount } = renderHook(() =>
      useKeyboard({
        key,
        callback,
      }),
    );
    const amountOfCallsBeforeUnmount = Math.round(Math.random() * 10);
    const amountOfCallsAfterUnmount = Math.round(Math.random() * 10);

    await act(async () => {
      for (let i = 0; i < amountOfCallsBeforeUnmount; i++) userEvent.keyboard(`{${key}}`);
    });

    await waitFor(() => {
      expect(callback).toBeCalledTimes(amountOfCallsBeforeUnmount);
    });

    unmount();

    await act(async () => {
      for (let i = 0; i < amountOfCallsAfterUnmount; i++) userEvent.keyboard(`{${key}}`);
    });
    await waitFor(() => {
      expect(callback).toBeCalledTimes(amountOfCallsBeforeUnmount);
    });
  });

  it.each(keys)('Should call callback passed in the last render', async (key) => {
    const callback1 = vi.fn();
    const callback2 = vi.fn();

    const { rerender } = renderHook(
      ({ callback }) =>
        useKeyboard({
          key,
          callback,
        }),
      { initialProps: { callback: callback1 } },
    );

    rerender({ callback: callback2 });

    await act(async () => {
      userEvent.keyboard(`{${key}}`);
      userEvent.keyboard(`{${key}}`);
      await waitFor(() => {
        expect(callback1).toBeCalledTimes(0);
        expect(callback2).toBeCalledTimes(2);
      });
    });
  });
});
