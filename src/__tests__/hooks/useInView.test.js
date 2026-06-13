import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import useInView from '../../hooks/useInView';

let observerCallback;
const mockObserve = vi.fn();
const mockUnobserve = vi.fn();
const mockDisconnect = vi.fn();

class MockIntersectionObserver {
  constructor(callback, options) {
    observerCallback = callback;
    this._options = options;
    this.observe = mockObserve;
    this.unobserve = mockUnobserve;
    this.disconnect = mockDisconnect;
  }
}

beforeEach(() => {
  mockObserve.mockClear();
  mockUnobserve.mockClear();
  mockDisconnect.mockClear();
  globalThis.IntersectionObserver = MockIntersectionObserver;
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('useInView', () => {
  it('returns a ref and isInView = false initially', () => {
    const { result } = renderHook(() => useInView());
    const [ref, isInView] = result.current;
    expect(ref).toHaveProperty('current');
    expect(isInView).toBe(false);
  });

  it('does not observe when ref is not attached to a DOM node', () => {
    renderHook(() => useInView());
    expect(mockObserve).not.toHaveBeenCalled();
  });

  it('sets isInView to true when entry is intersecting', () => {
    const div = document.createElement('div');

    const { result } = renderHook(() => {
      const hookResult = useInView();
      hookResult[0].current = div;
      return hookResult;
    });

    // Simulate intersection
    act(() => {
      observerCallback([{ isIntersecting: true, target: div }]);
    });

    expect(result.current[1]).toBe(true);
  });

  it('unobserves after intersecting when once is not false', () => {
    const div = document.createElement('div');

    renderHook(() => {
      const hookResult = useInView();
      hookResult[0].current = div;
      return hookResult;
    });

    act(() => {
      observerCallback([{ isIntersecting: true, target: div }]);
    });

    expect(mockUnobserve).toHaveBeenCalledWith(div);
  });

  it('does not unobserve when once is false', () => {
    const div = document.createElement('div');

    renderHook(() => {
      const hookResult = useInView({ once: false });
      hookResult[0].current = div;
      return hookResult;
    });

    act(() => {
      observerCallback([{ isIntersecting: true, target: div }]);
    });

    expect(mockUnobserve).not.toHaveBeenCalled();
  });

  it('sets isInView back to false when once is false and not intersecting', () => {
    const div = document.createElement('div');

    const { result } = renderHook(() => {
      const hookResult = useInView({ once: false });
      hookResult[0].current = div;
      return hookResult;
    });

    act(() => {
      observerCallback([{ isIntersecting: true, target: div }]);
    });
    expect(result.current[1]).toBe(true);

    act(() => {
      observerCallback([{ isIntersecting: false, target: div }]);
    });
    expect(result.current[1]).toBe(false);
  });

  it('disconnects on unmount', () => {
    const div = document.createElement('div');

    const { unmount } = renderHook(() => {
      const hookResult = useInView();
      hookResult[0].current = div;
      return hookResult;
    });

    unmount();
    expect(mockDisconnect).toHaveBeenCalled();
  });
});
