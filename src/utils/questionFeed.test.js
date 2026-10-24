import { describe, it, expect } from 'vitest';
import {
  parseTimeToMinutes,
  searchArticles,
  sortArticles,
  applyFeedFilters,
} from './questionFeed';

// Synthetic fixtures shaped like src/assets/FakeData.js entries.
const makeArticle = (overrides = {}) => ({
  id: 0,
  title: 'Title',
  content: 'Some content',
  author: 'Someone',
  asked: 'Just Now',
  votes: 0,
  views: 0,
  tags: ['javascript'],
  comments: [{ comment: 'hi', author: 'a' }],
  ...overrides,
});

describe('parseTimeToMinutes (relative "asked" strings -> age in minutes)', () => {
  it('treats "Just Now" as 0 minutes regardless of case', () => {
    expect(parseTimeToMinutes('Just Now')).toBe(0);
    expect(parseTimeToMinutes('just now')).toBe(0);
  });

  it('parses minutes (singular and plural)', () => {
    expect(parseTimeToMinutes('10 Minutes Ago')).toBe(10);
    expect(parseTimeToMinutes('1 Minute Ago')).toBe(1);
  });

  it('parses hours', () => {
    expect(parseTimeToMinutes('7 Hours Ago')).toBe(420);
    expect(parseTimeToMinutes('1 Hour Ago')).toBe(60);
  });

  it('parses days', () => {
    expect(parseTimeToMinutes('2 Days Ago')).toBe(2880);
    expect(parseTimeToMinutes('1 Day Ago')).toBe(1440);
  });

  it('parses weeks instead of silently treating them as minutes', () => {
    expect(parseTimeToMinutes('2 Weeks Ago')).toBe(2 * 7 * 24 * 60);
  });

  it('parses months and years with documented approximations', () => {
    expect(parseTimeToMinutes('3 Months Ago')).toBe(3 * 30 * 24 * 60);
    expect(parseTimeToMinutes('1 Year Ago')).toBe(365 * 24 * 60);
  });

  it('treats unparseable or unknown-unit strings as the oldest possible age, not as "just posted"', () => {
    expect(parseTimeToMinutes('5 Fortnights Ago')).toBe(Infinity);
    expect(parseTimeToMinutes('a while ago')).toBe(Infinity);
    expect(parseTimeToMinutes('')).toBe(Infinity);
    expect(parseTimeToMinutes(null)).toBe(Infinity);
  });
});

describe('searchArticles (question search)', () => {
  const articles = [
    makeArticle({ id: 1, title: 'React hooks guide', content: 'useState everywhere', tags: ['React'] }),
    makeArticle({ id: 2, title: 'CSS grid layouts', content: 'grid-template-columns', tags: ['CSS'] }),
    makeArticle({ id: 3, title: 'Node streams', content: 'All about React server rendering', tags: ['Node.js'] }),
  ];

  it('matches title, content or tags, case-insensitively', () => {
    const ids = (query) => searchArticles(articles, query).map((a) => a.id);
    expect(ids('REACT')).toEqual([1, 3]);
    expect(ids('grid')).toEqual([2]);
    expect(ids('css')).toEqual([2]);
    expect(ids('nothing-matches-this')).toEqual([]);
  });

  it('does not mutate the source array', () => {
    const before = [...articles];
    searchArticles(articles, 'react');
    expect(articles).toEqual(before);
  });
});

describe('sortArticles (feed filter tabs)', () => {
  const articles = [
    makeArticle({ id: 1, asked: '2 Days Ago', votes: 13, views: 1200, comments: [{ comment: 'a', author: 'x' }] }),
    makeArticle({ id: 2, asked: '10 Minutes Ago', votes: 70, views: 500, comments: [] }),
    makeArticle({ id: 3, asked: '1 Minute Ago', votes: 8, views: 9000, comments: [{ comment: 'b', author: 'y' }] }),
  ];

  it('"Newest" orders by age in minutes, oldest-posted-last', () => {
    expect(sortArticles(articles, 'Newest').map((a) => a.id)).toEqual([3, 2, 1]);
  });

  it('"Recommended" orders by votes descending', () => {
    expect(sortArticles(articles, 'Recommended').map((a) => a.id)).toEqual([2, 1, 3]);
  });

  it('"Frequent" orders by views descending', () => {
    expect(sortArticles(articles, 'Frequent').map((a) => a.id)).toEqual([3, 1, 2]);
  });

  it('"Unanswered" keeps only questions with zero comments, treating missing comments as unanswered', () => {
    const withMissingComments = [...articles, makeArticle({ id: 4 })];
    delete withMissingComments[3].comments;
    expect(sortArticles(withMissingComments, 'Unanswered').map((a) => a.id)).toEqual([2, 4]);
  });

  it('never mutates or aliases the input array', () => {
    const before = articles.map((a) => ({ ...a }));
    const result = sortArticles(articles, 'Recommended');
    expect(result).not.toBe(articles);
    expect(articles.map((a) => ({ ...a }))).toEqual(before);
  });
});

describe('applyFeedFilters (search + filter tab compose)', () => {
  const articles = [
    makeArticle({ id: 1, title: 'React basics', asked: '2 Days Ago', votes: 5, views: 100, tags: ['React'] }),
    makeArticle({ id: 2, title: 'React performance', asked: '1 Minute Ago', votes: 40, views: 10, tags: ['React'], comments: [] }),
    makeArticle({ id: 3, title: 'CSS tricks', asked: 'Just Now', votes: 99, views: 999, tags: ['CSS'] }),
  ];

  it('with no search, applies the chosen sort', () => {
    expect(applyFeedFilters(articles, { searchQuery: '', filter: 'Recommended' }).map((a) => a.id)).toEqual([3, 2, 1]);
  });

  it('applies search AND the chosen sort together', () => {
    expect(
      applyFeedFilters(articles, { searchQuery: 'react', filter: 'Recommended' }).map((a) => a.id)
    ).toEqual([2, 1]);
    expect(
      applyFeedFilters(articles, { searchQuery: 'react', filter: 'Newest' }).map((a) => a.id)
    ).toEqual([2, 1]);
  });

  it('applies the Unanswered tab on top of an active search', () => {
    expect(
      applyFeedFilters(articles, { searchQuery: 'react', filter: 'Unanswered' }).map((a) => a.id)
    ).toEqual([2]);
  });
});
