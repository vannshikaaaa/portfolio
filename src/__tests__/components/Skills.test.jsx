import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Skills from '../../components/Skills';

vi.mock('../../hooks/useInView', () => ({
  default: () => [{ current: null }, true],
}));

describe('Skills', () => {
  it('renders the section heading', () => {
    render(<Skills />);
    expect(screen.getByText('Skills & Technologies')).toBeInTheDocument();
  });

  it('renders all skill group categories', () => {
    render(<Skills />);
    expect(screen.getByText('Frontend')).toBeInTheDocument();
    expect(screen.getByText('Programming Languages')).toBeInTheDocument();
    expect(screen.getByText('Tools & Databases')).toBeInTheDocument();
    expect(screen.getByText('CS Fundamentals')).toBeInTheDocument();
  });

  it('renders individual skills', () => {
    render(<Skills />);
    expect(screen.getByText('HTML')).toBeInTheDocument();
    expect(screen.getByText('CSS')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByText('C++')).toBeInTheDocument();
    expect(screen.getByText('Git')).toBeInTheDocument();
    expect(screen.getByText('OOP')).toBeInTheDocument();
  });

  it('renders skill badge dots', () => {
    const { container } = render(<Skills />);
    const dots = container.querySelectorAll('.skill-badge-dot');
    expect(dots.length).toBeGreaterThan(0);
  });

  it('applies transition delays to skill groups', () => {
    const { container } = render(<Skills />);
    const groups = container.querySelectorAll('.skill-group');
    expect(groups[0].style.transitionDelay).toBe('0ms');
    expect(groups[1].style.transitionDelay).toBe('120ms');
  });

  it('applies transition delays to individual badges', () => {
    const { container } = render(<Skills />);
    const badges = container.querySelectorAll('.skill-badge');
    // First group, second skill: delay = 0*120 + 1*60 = 60ms
    expect(badges[1].style.transitionDelay).toBe('60ms');
  });
});
