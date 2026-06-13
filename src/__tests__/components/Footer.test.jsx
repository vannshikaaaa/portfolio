import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Footer from '../../components/Footer';

describe('Footer', () => {
  it('renders the footer element', () => {
    const { container } = render(<Footer />);
    expect(container.querySelector('footer')).toBeInTheDocument();
  });

  it('renders social links', () => {
    render(<Footer />);
    expect(screen.getByText('GitHub')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
  });

  it('renders social links with target _blank', () => {
    render(<Footer />);
    const githubLink = screen.getByText('GitHub');
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noreferrer');
  });

  it('renders attribution text', () => {
    render(<Footer />);
    expect(
      screen.getByText(/Designed & built by Vanshika Agarwal/)
    ).toBeInTheDocument();
  });

  it('renders current year in copyright', () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    expect(screen.getByText(`© ${year} All Rights Reserved`)).toBeInTheDocument();
  });
});
