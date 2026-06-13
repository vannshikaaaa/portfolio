import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import useTypewriter from '../../hooks/useTypewriter';

describe('useTypewriter', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('returns an empty string initially', () => {
    const { result } = renderHook(() => useTypewriter(['Hello']));
    expect(result.current).toBe('');
  });

  it('returns empty string when words is empty', () => {
    const { result } = renderHook(() => useTypewriter([]));
    expect(result.current).toBe('');
  });

  it('returns empty string when words is null', () => {
    const { result } = renderHook(() => useTypewriter(null));
    expect(result.current).toBe('');
  });

  it('types out the first word character by character', () => {
    const { result } = renderHook(() => useTypewriter(['Hi'], 100, 50, 1000));

    act(() => vi.advanceTimersByTime(100));
    expect(result.current).toBe('H');

    act(() => vi.advanceTimersByTime(100));
    expect(result.current).toBe('Hi');
  });

  it('pauses after fully typing a word, then deletes', () => {
    const { result } = renderHook(() => useTypewriter(['AB'], 100, 50, 500));

    // Type A
    act(() => vi.advanceTimersByTime(100));
    expect(result.current).toBe('A');

    // Type B
    act(() => vi.advanceTimersByTime(100));
    expect(result.current).toBe('AB');

    // Pause (500ms)
    act(() => vi.advanceTimersByTime(500));
    // Now deleting: remove last char
    expect(result.current).toBe('A');

    act(() => vi.advanceTimersByTime(50));
    expect(result.current).toBe('');
  });

  it('cycles to the next word after deleting', () => {
    const { result } = renderHook(() => useTypewriter(['A', 'B'], 100, 50, 200));

    // Type 'A'
    act(() => vi.advanceTimersByTime(100));
    expect(result.current).toBe('A');

    // Pause then delete 'A'
    act(() => vi.advanceTimersByTime(200));
    expect(result.current).toBe('');

    // Now typing 'B'
    act(() => vi.advanceTimersByTime(100));
    expect(result.current).toBe('B');
  });
});
