import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Hero from '../../components/Hero';

vi.mock('../../hooks/useTypewriter', () => ({
  default: () => 'Frontend Developer',
}));

describe('Hero', () => {
  it('renders the hero section', () => {
    const { container } = render(<Hero />);
    expect(container.querySelector('.hero')).toBeInTheDocument();
  });

  it('renders the name', () => {
    render(<Hero />);
    expect(screen.getByText('Vanshika Agarwal')).toBeInTheDocument();
  });

  it('renders the greeting', () => {
    render(<Hero />);
    expect(screen.getByText(/Hello, I'm/)).toBeInTheDocument();
  });

  it('renders the typewriter text', () => {
    render(<Hero />);
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
  });

  it('renders hero highlights', () => {
    render(<Hero />);
    expect(screen.getByText('Responsive UI focused')).toBeInTheDocument();
    expect(screen.getByText('Strong CS fundamentals')).toBeInTheDocument();
    expect(screen.getByText('Open to internships')).toBeInTheDocument();
  });

  it('renders CTA buttons', () => {
    render(<Hero />);
    expect(screen.getByText('View My Work')).toBeInTheDocument();
    expect(screen.getByText('Download Resume')).toBeInTheDocument();
  });

  it('renders social links with correct labels', () => {
    render(<Hero />);
    expect(screen.getByLabelText('GitHub')).toBeInTheDocument();
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument();
  });

  it('renders profile image with fallback handler', () => {
    render(<Hero />);
    const img = screen.getByAltText('Portrait of Vanshika Agarwal');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('loading', 'lazy');
  });

  it('View My Work links to #projects', () => {
    render(<Hero />);
    const link = screen.getByText('View My Work');
    expect(link).toHaveAttribute('href', '#projects');
  });

  it('Download Resume links to /resume.pdf', () => {
    render(<Hero />);
    const link = screen.getByText('Download Resume');
    expect(link).toHaveAttribute('href', '/resume.pdf');
    expect(link).toHaveAttribute('target', '_blank');
  });
});
