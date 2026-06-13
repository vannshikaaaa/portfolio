import '@testing-library/jest-dom';

// Provide a global IntersectionObserver mock for jsdom
class IntersectionObserverMock {
  constructor(callback) {
    this._callback = callback;
  }
  observe() {}
  unobserve() {}
  disconnect() {}
}

if (typeof globalThis.IntersectionObserver === 'undefined') {
  globalThis.IntersectionObserver = IntersectionObserverMock;
}
