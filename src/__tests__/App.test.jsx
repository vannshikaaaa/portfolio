import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import App from '../App';

vi.mock('../hooks/useInView', () => ({
  default: () => [{ current: null }, true],
}));

vi.mock('../hooks/useTypewriter', () => ({
  default: () => 'Frontend Developer',
}));

vi.mock('../App.css', () => ({}));
vi.mock('../index.css', () => ({}));

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText('Vanshika.')).toBeInTheDocument();
  });

  it('renders all main sections', () => {
    render(<App />);
    expect(screen.getByText('About Me')).toBeInTheDocument();
    expect(screen.getByText('Skills & Technologies')).toBeInTheDocument();
    expect(screen.getByText('Featured Projects')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Education' })).toBeInTheDocument();
    expect(screen.getByText("Let's Connect")).toBeInTheDocument();
  });

  it('renders the back-to-top button', () => {
    render(<App />);
    expect(screen.getByLabelText('Back to top')).toBeInTheDocument();
  });

  it('renders the footer', () => {
    const { container } = render(<App />);
    expect(container.querySelector('footer')).toBeInTheDocument();
  });

  it('renders the hero section', () => {
    render(<App />);
    expect(screen.getByText('Vanshika Agarwal')).toBeInTheDocument();
  });
});
