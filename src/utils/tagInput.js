// Validation for the "Ask a question" tag input. Mirrors the UI rules
// (max 10 characters per tag, max 5 tags, no duplicates) with trimming and
// case-insensitive duplicate detection so chips stay canonical.

export const MAX_TAG_LENGTH = 10;
export const MAX_TAGS = 5;

/**
 * Validate a raw tag entry against the tags already added.
 * Returns { ok: true, tag } with the normalized (trimmed) tag,
 * or { ok: false, error } with a user-facing message.
 * Check order: empty -> too long -> duplicate -> limit.
 */
export function validateTag(rawTag, existingTags = [], {
  maxLength = MAX_TAG_LENGTH,
  maxTags = MAX_TAGS,
} = {}) {
  const tag = String(rawTag ?? '').trim();

  if (!tag) {
    return { ok: false, error: 'Tag cannot be empty' };
  }

  if (tag.length > maxLength) {
    return { ok: false, error: `The length of the tag should be up to ${maxLength} letters` };
  }

  const isDuplicate = existingTags.some(
    (existing) => String(existing).toLowerCase() === tag.toLowerCase()
  );
  if (isDuplicate) {
    return { ok: false, error: `Tag "${tag}" has already been added` };
  }

  if (existingTags.length >= maxTags) {
    return { ok: false, error: `You cannot add more than ${maxTags} tags` };
  }

  return { ok: true, tag };
}
