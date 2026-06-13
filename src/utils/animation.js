/**
 * Shared animation utilities used across section components.
 */

export const revealClass = (isInView) =>
  isInView ? 'reveal is-visible' : 'reveal';

export const staggerDelay = (index, intervalMs) => ({
  transitionDelay: `${index * intervalMs}ms`,
});
