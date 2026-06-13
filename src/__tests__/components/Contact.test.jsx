import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import Contact from '../../components/Contact';

vi.mock('../../hooks/useInView', () => ({
  default: () => [{ current: null }, true],
}));

describe('Contact', () => {
  it('renders the section heading', () => {
    render(<Contact />);
    expect(screen.getByText("Let's Connect")).toBeInTheDocument();
  });

  it('renders all contact info entries', () => {
    render(<Contact />);
    const emailElements = screen.getAllByText('Email');
    expect(emailElements.length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText('linkedin.com/in/vanshika-agarwal-298114384')).toBeInTheDocument();
    expect(screen.getByText('github.com/vannshikaaaa')).toBeInTheDocument();
  });

  it('renders form fields', () => {
    render(<Contact />);
    expect(screen.getByPlaceholderText('Your name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('your@email.com')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Tell me about your idea/)).toBeInTheDocument();
    expect(screen.getByText('Send Message')).toBeInTheDocument();
  });

  it('shows validation errors when submitting empty form', async () => {
    const user = userEvent.setup();
    render(<Contact />);
    await user.click(screen.getByText('Send Message'));

    expect(screen.getByText('Please enter your name.')).toBeInTheDocument();
    expect(screen.getByText('Please enter your email.')).toBeInTheDocument();
    expect(screen.getByText('Please share a message.')).toBeInTheDocument();
  });

  it('shows email format error for invalid email', async () => {
    const user = userEvent.setup();
    render(<Contact />);

    await user.type(screen.getByPlaceholderText('Your name'), 'Test');
    await user.type(screen.getByPlaceholderText('your@email.com'), 'bad-email');
    await user.type(screen.getByPlaceholderText(/Tell me about your idea/), 'Hello');
    await user.click(screen.getByText('Send Message'));

    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument();
  });

  it('does not show errors with valid data', async () => {
    const user = userEvent.setup();

    delete window.location;
    window.location = { href: '' };

    render(<Contact />);

    await user.type(screen.getByPlaceholderText('Your name'), 'Test User');
    await user.type(screen.getByPlaceholderText('your@email.com'), 'test@example.com');
    await user.type(screen.getByPlaceholderText(/Tell me about your idea/), 'Hello there');
    await user.click(screen.getByText('Send Message'));

    expect(screen.queryByText('Please enter your name.')).not.toBeInTheDocument();
    expect(screen.queryByText('Please enter your email.')).not.toBeInTheDocument();
    expect(screen.queryByText('Please share a message.')).not.toBeInTheDocument();
  });

  it('shows success message after valid submission', async () => {
    const user = userEvent.setup();

    delete window.location;
    window.location = { href: '' };

    render(<Contact />);

    await user.type(screen.getByPlaceholderText('Your name'), 'Test');
    await user.type(screen.getByPlaceholderText('your@email.com'), 'test@example.com');
    await user.type(screen.getByPlaceholderText(/Tell me about your idea/), 'Hello');
    await user.click(screen.getByText('Send Message'));

    expect(screen.getByText(/Thanks for reaching out/)).toBeInTheDocument();
  });

  it('clears success message when user types after submission', async () => {
    const user = userEvent.setup();

    delete window.location;
    window.location = { href: '' };

    render(<Contact />);

    await user.type(screen.getByPlaceholderText('Your name'), 'Test');
    await user.type(screen.getByPlaceholderText('your@email.com'), 'test@example.com');
    await user.type(screen.getByPlaceholderText(/Tell me about your idea/), 'Hello');
    await user.click(screen.getByText('Send Message'));

    expect(screen.getByText(/Thanks for reaching out/)).toBeInTheDocument();

    await user.type(screen.getByPlaceholderText('Your name'), 'A');
    expect(screen.queryByText(/Thanks for reaching out/)).not.toBeInTheDocument();
  });

  it('sets mailto href on valid submission', async () => {
    const user = userEvent.setup();

    delete window.location;
    window.location = { href: '' };

    render(<Contact />);

    await user.type(screen.getByPlaceholderText('Your name'), 'Test');
    await user.type(screen.getByPlaceholderText('your@email.com'), 'test@example.com');
    await user.type(screen.getByPlaceholderText(/Tell me about your idea/), 'Hello');
    await user.click(screen.getByText('Send Message'));

    expect(window.location.href).toContain('mailto:');
  });
});
