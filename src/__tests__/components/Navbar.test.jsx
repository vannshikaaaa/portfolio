import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import Navbar from '../../components/Navbar';

const testLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
];

describe('Navbar', () => {
  it('renders the brand link', () => {
    render(<Navbar navLinks={testLinks} activeSection="#home" />);
    expect(screen.getByText('Vanshika.')).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(<Navbar navLinks={testLinks} activeSection="#home" />);
    testLinks.forEach((link) => {
      expect(screen.getByText(link.label)).toBeInTheDocument();
    });
  });

  it('marks the active section link', () => {
    render(<Navbar navLinks={testLinks} activeSection="#about" />);
    const aboutLink = screen.getByText('About');
    expect(aboutLink.classList.contains('active')).toBe(true);
  });

  it('does not mark inactive links as active', () => {
    render(<Navbar navLinks={testLinks} activeSection="#about" />);
    const homeLink = screen.getByText('Home');
    expect(homeLink.classList.contains('active')).toBe(false);
  });

  it('toggles mobile menu when hamburger is clicked', async () => {
    const user = userEvent.setup();
    render(<Navbar navLinks={testLinks} activeSection="#home" />);
    const toggle = screen.getByLabelText('Toggle navigation menu');

    expect(toggle).toHaveAttribute('aria-expanded', 'false');

    await user.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');

    await user.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });

  it('closes menu when a nav link is clicked', async () => {
    const user = userEvent.setup();
    render(<Navbar navLinks={testLinks} activeSection="#home" />);
    const toggle = screen.getByLabelText('Toggle navigation menu');

    await user.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');

    await user.click(screen.getByText('About'));
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });

  it('closes menu when brand link is clicked', async () => {
    const user = userEvent.setup();
    render(<Navbar navLinks={testLinks} activeSection="#home" />);
    const toggle = screen.getByLabelText('Toggle navigation menu');

    await user.click(toggle);
    await user.click(screen.getByText('Vanshika.'));
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });

  it('adds navbar-scrolled class when scrolled', () => {
    render(<Navbar navLinks={testLinks} activeSection="#home" />);
    const header = document.querySelector('.navbar');

    // Simulate scroll
    Object.defineProperty(window, 'scrollY', { value: 50, writable: true });
    fireEvent.scroll(window);

    expect(header.classList.contains('navbar-scrolled')).toBe(true);
  });

  it('removes navbar-scrolled class when at top', () => {
    render(<Navbar navLinks={testLinks} activeSection="#home" />);
    const header = document.querySelector('.navbar');

    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
    fireEvent.scroll(window);

    expect(header.classList.contains('navbar-scrolled')).toBe(false);
  });

  it('sets body overflow hidden when menu is open', async () => {
    const user = userEvent.setup();
    render(<Navbar navLinks={testLinks} activeSection="#home" />);
    const toggle = screen.getByLabelText('Toggle navigation menu');

    await user.click(toggle);
    expect(document.body.style.overflow).toBe('hidden');

    await user.click(toggle);
    expect(document.body.style.overflow).toBe('');
  });
});
