import { getQueue } from './queue';

const onKeyDown = (event: KeyboardEvent) => {
  const queue = getQueue(event.key);

  if (!queue?.length) return;

  const wrappedCallback = queue[queue.length - 1];
  wrappedCallback.current?.callback(event);
};

const addEventListener = () => window.addEventListener('keydown', onKeyDown);

const removeEventListener = () => window.removeEventListener('keydown', onKeyDown);

export { addEventListener, removeEventListener };
