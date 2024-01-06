import { getOrCreateQueue, allQueuesAreEmpty } from './queue';
import { addEventListener, removeEventListener } from './event';
import { WrappedCallbackRefType, QueueType, KeyType } from '../types';

type RemoveCallbackProps = {
  queue: QueueType;
  wrappedCallback: WrappedCallbackRefType;
};

const removeCallback = ({ queue, wrappedCallback }: RemoveCallbackProps) => {
  const index = queue.findIndex((queueCallback) => queueCallback === wrappedCallback);

  if (index > -1) queue.splice(index, 1);

  if (allQueuesAreEmpty()) removeEventListener();
};

type AddCallbackProps = {
  key: KeyType;
  wrappedCallback: WrappedCallbackRefType;
};

const addCallback = ({ key, wrappedCallback }: AddCallbackProps) => {
  const isNeedToAddEventListener = allQueuesAreEmpty();

  const queue = getOrCreateQueue(key);
  queue.push(wrappedCallback);

  if (isNeedToAddEventListener) addEventListener();

  return () => removeCallback({ queue, wrappedCallback });
};

export { addCallback, removeCallback };
