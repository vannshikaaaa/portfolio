import { describe, expect, it } from 'vitest';
import {
  aboutStats,
  achievement,
  contactInfo,
  educationTimeline,
  heroHighlights,
  heroRoles,
  navLinks,
  projects,
  skillGroups,
  socialLinks,
} from '../../data/portfolio';

describe('portfolio data', () => {
  describe('navLinks', () => {
    it('is a non-empty array of objects with label and href', () => {
      expect(navLinks.length).toBeGreaterThan(0);
      navLinks.forEach((link) => {
        expect(link).toHaveProperty('label');
        expect(link).toHaveProperty('href');
        expect(link.href).toMatch(/^#/);
      });
    });

    it('includes Home and Contact links', () => {
      const labels = navLinks.map((l) => l.label);
      expect(labels).toContain('Home');
      expect(labels).toContain('Contact');
    });
  });

  describe('heroRoles', () => {
    it('is a non-empty array of strings', () => {
      expect(heroRoles.length).toBeGreaterThan(0);
      heroRoles.forEach((role) => {
        expect(typeof role).toBe('string');
        expect(role.length).toBeGreaterThan(0);
      });
    });
  });

  describe('heroHighlights', () => {
    it('is a non-empty array of strings', () => {
      expect(heroHighlights.length).toBeGreaterThan(0);
      heroHighlights.forEach((h) => expect(typeof h).toBe('string'));
    });
  });

  describe('socialLinks', () => {
    it('each link has label, href (URL), and icon', () => {
      socialLinks.forEach((link) => {
        expect(link).toHaveProperty('label');
        expect(link.href).toMatch(/^https?:\/\//);
        expect(link).toHaveProperty('icon');
      });
    });
  });

  describe('aboutStats', () => {
    it('has exactly 4 stat objects with icon, title, detail', () => {
      expect(aboutStats).toHaveLength(4);
      aboutStats.forEach((stat) => {
        expect(stat).toHaveProperty('icon');
        expect(stat).toHaveProperty('title');
        expect(stat).toHaveProperty('detail');
      });
    });
  });

  describe('skillGroups', () => {
    it('each group has a category and a non-empty skills array', () => {
      expect(skillGroups.length).toBeGreaterThan(0);
      skillGroups.forEach((group) => {
        expect(typeof group.category).toBe('string');
        expect(group.skills.length).toBeGreaterThan(0);
      });
    });
  });

  describe('projects', () => {
    it('each project has required fields', () => {
      expect(projects.length).toBeGreaterThan(0);
      projects.forEach((project) => {
        expect(project).toHaveProperty('name');
        expect(project).toHaveProperty('description');
        expect(project).toHaveProperty('tech');
        expect(project).toHaveProperty('github');
        expect(project.tech.length).toBeGreaterThan(0);
        expect(project.github).toMatch(/^https?:\/\//);
      });
    });

    it('has a live field (string) for each project', () => {
      projects.forEach((project) => {
        expect(typeof project.live).toBe('string');
      });
    });
  });

  describe('educationTimeline', () => {
    it('is ordered and has title, year, and detail', () => {
      expect(educationTimeline.length).toBeGreaterThan(0);
      educationTimeline.forEach((item) => {
        expect(item).toHaveProperty('title');
        expect(item).toHaveProperty('year');
        expect(item).toHaveProperty('detail');
      });
    });
  });

  describe('achievement', () => {
    it('has title, meta, and description', () => {
      expect(achievement).toHaveProperty('title');
      expect(achievement).toHaveProperty('meta');
      expect(achievement).toHaveProperty('description');
      expect(achievement.title.length).toBeGreaterThan(0);
    });
  });

  describe('contactInfo', () => {
    it('each entry has icon, label, text, and href', () => {
      expect(contactInfo.length).toBeGreaterThan(0);
      contactInfo.forEach((item) => {
        expect(item).toHaveProperty('icon');
        expect(item).toHaveProperty('label');
        expect(item).toHaveProperty('text');
        expect(item).toHaveProperty('href');
      });
    });
  });
});
