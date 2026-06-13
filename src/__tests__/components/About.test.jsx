import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import About from '../../components/About';

vi.mock('../../hooks/useInView', () => ({
  default: () => [{ current: null }, true],
}));

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />);
    expect(screen.getByText('About Me')).toBeInTheDocument();
  });

  it('renders all stat cards from portfolio data', () => {
    render(<About />);
    expect(screen.getByText('B.Tech CSE')).toBeInTheDocument();
    expect(screen.getByText('GATE 2026')).toBeInTheDocument();
    expect(screen.getByText('Based In')).toBeInTheDocument();
    expect(screen.getByText('Focus')).toBeInTheDocument();
  });

  it('renders the about quote', () => {
    render(<About />);
    expect(
      screen.getByText(/I love building interfaces that feel as thoughtful/i)
    ).toBeInTheDocument();
  });

  it('renders stat detail text', () => {
    render(<About />);
    expect(screen.getByText('MITRC Alwar')).toBeInTheDocument();
    expect(screen.getByText('Qualified')).toBeInTheDocument();
    expect(screen.getByText('Alwar, Rajasthan')).toBeInTheDocument();
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
  });

  it('applies is-visible class when in view', () => {
    const { container } = render(<About />);
    const heading = container.querySelector('.section-heading');
    expect(heading.classList.contains('is-visible')).toBe(true);
  });
});
