import { KeyType, QueueType, WrappedCallbackRefType } from '../types';

const keyToQueue: Record<KeyType, QueueType> = {};

const allQueuesAreEmpty = (): boolean => !Object.values(keyToQueue).some((queue) => queue?.length);

const getQueue = (key: KeyType): QueueType | undefined => keyToQueue[key];

const getOrCreateQueue = (key: KeyType): QueueType =>
  (keyToQueue[key] ??= new Array<WrappedCallbackRefType>());

export { getQueue, getOrCreateQueue, allQueuesAreEmpty };
