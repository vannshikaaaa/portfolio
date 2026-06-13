import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Education from '../../components/Education';

vi.mock('../../hooks/useInView', () => ({
  default: () => [{ current: null }, true],
}));

describe('Education', () => {
  it('renders the section heading', () => {
    render(<Education />);
    expect(screen.getByText('Education')).toBeInTheDocument();
  });

  it('renders all education timeline items', () => {
    render(<Education />);
    expect(screen.getByText('B.Tech — Computer Science & Engineering')).toBeInTheDocument();
    expect(screen.getByText('Class XII (Senior Secondary)')).toBeInTheDocument();
    expect(screen.getByText('Class X (Secondary)')).toBeInTheDocument();
  });

  it('renders year information', () => {
    render(<Education />);
    expect(screen.getByText('2023 – 2027')).toBeInTheDocument();
    expect(screen.getByText('2022')).toBeInTheDocument();
    expect(screen.getByText('2020')).toBeInTheDocument();
  });

  it('renders institution when provided', () => {
    render(<Education />);
    expect(screen.getByText(/MITRC/)).toBeInTheDocument();
  });

  it('renders the achievement card', () => {
    render(<Education />);
    expect(screen.getByText('GATE 2026 Qualified')).toBeInTheDocument();
    expect(screen.getByText('Achievement')).toBeInTheDocument();
    expect(screen.getByText(/Score: 367/)).toBeInTheDocument();
  });

  it('applies transition delays to timeline items', () => {
    const { container } = render(<Education />);
    const items = container.querySelectorAll('.timeline-item');
    expect(items.length).toBe(3);
    expect(items[0].style.transitionDelay).toBe('0ms');
    expect(items[1].style.transitionDelay).toBe('140ms');
    expect(items[2].style.transitionDelay).toBe('280ms');
  });
});
