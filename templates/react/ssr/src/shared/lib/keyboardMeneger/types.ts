import { MutableRefObject } from 'react';

type KeyType = KeyboardEvent['key'];
type CallbackType = (event: KeyboardEvent) => void;
type WrappedCallbackType = { callback: CallbackType } | null;
type WrappedCallbackRefType = MutableRefObject<WrappedCallbackType>;
type QueueType = WrappedCallbackRefType[];

export type { KeyType, CallbackType, WrappedCallbackType, WrappedCallbackRefType, QueueType };
