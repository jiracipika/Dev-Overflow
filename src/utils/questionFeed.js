// Pure helpers for the Home question feed (search, filter tabs, relative-time
// parsing). Extracted from src/Pages/Home.jsx so the logic is testable.

// Approximate unit multipliers in minutes. Months are 30 days, years 365 days.
const UNIT_MULTIPLIERS = {
  second: 1 / 60,
  seconds: 1 / 60,
  minute: 1,
  minutes: 1,
  hour: 60,
  hours: 60,
  day: 24 * 60,
  days: 24 * 60,
  week: 7 * 24 * 60,
  weeks: 7 * 24 * 60,
  month: 30 * 24 * 60,
  months: 30 * 24 * 60,
  year: 365 * 24 * 60,
  years: 365 * 24 * 60,
};

/**
 * Convert a relative "asked" string like "7 Hours Ago" to its age in minutes.
 * "Just Now" -> 0. Unparseable strings or unknown units return Infinity so
 * they sort as the oldest questions instead of masquerading as fresh posts.
 */
export function parseTimeToMinutes(timeString) {
  if (typeof timeString !== 'string') return Infinity;
  if (timeString.trim().toLowerCase() === 'just now') return 0;

  const matches = timeString.match(/(\d+)\s+(\w+)/);
  if (!matches) return Infinity;

  const number = parseInt(matches[1], 10);
  const multiplier = UNIT_MULTIPLIERS[matches[2].toLowerCase()];
  if (Number.isNaN(number) || multiplier === undefined) return Infinity;

  return number * multiplier;
}

/** Case-insensitive search across title, content and tags. Empty query matches all. */
export function matchesSearch(article, query) {
  const searchLower = String(query ?? '').trim().toLowerCase();
  if (!searchLower) return true;

  const titleMatch = String(article.title ?? '').toLowerCase().includes(searchLower);
  const contentMatch = String(article.content ?? '').toLowerCase().includes(searchLower);
  const tags = Array.isArray(article.tags) ? article.tags : [];
  const tagsMatch = tags.some((tag) => String(tag).toLowerCase().includes(searchLower));
  return titleMatch || contentMatch || tagsMatch;
}

/** Returns a new filtered array; does not mutate the source. */
export function searchArticles(articles, query) {
  return articles.filter((article) => matchesSearch(article, query));
}

/**
 * Apply a feed filter tab ("Newest" | "Recommended" | "Frequent" | "Unanswered").
 * Always returns a NEW array; the input is never mutated or aliased.
 */
export function sortArticles(articles, filter) {
  const copy = [...articles];

  switch (filter) {
    case 'Newest':
      return copy.sort((a, b) => parseTimeToMinutes(a.asked) - parseTimeToMinutes(b.asked));
    case 'Recommended':
      return copy.sort((a, b) => (b.votes ?? 0) - (a.votes ?? 0));
    case 'Frequent':
      return copy.sort((a, b) => (b.views ?? 0) - (a.views ?? 0));
    case 'Unanswered':
      return copy.filter(
        (article) => (Array.isArray(article.comments) ? article.comments.length : 0) === 0
      );
    default:
      return copy;
  }
}

/**
 * Search and the filter tab compose: the search narrows the list, then the
 * tab sorts (or filters, for "Unanswered") the narrowed list.
 */
export function applyFeedFilters(articles, { searchQuery = '', filter = 'Newest' } = {}) {
  const searched = searchArticles(articles, searchQuery);
  return sortArticles(searched, filter);
}
