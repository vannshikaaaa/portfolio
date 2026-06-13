import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Projects from '../../components/Projects';

vi.mock('../../hooks/useInView', () => ({
  default: () => [{ current: null }, true],
}));

describe('Projects', () => {
  it('renders the section heading', () => {
    render(<Projects />);
    expect(screen.getByText('Featured Projects')).toBeInTheDocument();
  });

  it('renders all project cards', () => {
    render(<Projects />);
    expect(screen.getByText('DineReserve')).toBeInTheDocument();
    expect(screen.getByText('Personal Portfolio')).toBeInTheDocument();
    expect(screen.getByText('DSA & Core CS Practice Repository')).toBeInTheDocument();
  });

  it('renders project descriptions', () => {
    render(<Projects />);
    expect(screen.getByText(/AI-powered full-stack restaurant/)).toBeInTheDocument();
  });

  it('renders technology tags for projects', () => {
    render(<Projects />);
    const reactTags = screen.getAllByText('React');
    expect(reactTags.length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText('FastAPI')).toBeInTheDocument();
    const mongoTags = screen.getAllByText('MongoDB');
    expect(mongoTags.length).toBeGreaterThanOrEqual(1);
  });

  it('renders GitHub links', () => {
    render(<Projects />);
    const githubLinks = screen.getAllByText('GitHub');
    expect(githubLinks.length).toBe(3);
    githubLinks.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noreferrer');
    });
  });

  it('renders project status badges', () => {
    render(<Projects />);
    expect(screen.getByText('Featured Full-Stack Project')).toBeInTheDocument();
    expect(screen.getByText('Frontend Showcase')).toBeInTheDocument();
    expect(screen.getByText('Learning Journey')).toBeInTheDocument();
  });

  it('renders "Live demo available on request" for projects without live link', () => {
    render(<Projects />);
    const liveTexts = screen.getAllByText('Live demo available on request');
    expect(liveTexts.length).toBe(3);
  });

  it('renders the coming soon note', () => {
    render(<Projects />);
    expect(screen.getByText(/More polished builds/)).toBeInTheDocument();
  });

  it('applies transition delays to project cards', () => {
    const { container } = render(<Projects />);
    const cards = container.querySelectorAll('.project-card');
    expect(cards[0].style.transitionDelay).toBe('0ms');
    expect(cards[1].style.transitionDelay).toBe('140ms');
    expect(cards[2].style.transitionDelay).toBe('280ms');
  });
});
