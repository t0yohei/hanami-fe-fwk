export function addEventListener(eventName, handler, el) {
  el.addEventListener(eventName, handler);
  return handler;
}

export function addEventListeners(listeners = {}, el) {
  Object.entries(listeners).forEach(([eventName, handler]) => {
    addEventListener(eventName, handler, el);
  });

  return listeners;
}

export function removeEventListeners(listeners = {}, el) {
  Object.entries(listeners).forEach(([eventName, handler]) => {
    el.removeEventListener(eventName, handler);
  });
}
