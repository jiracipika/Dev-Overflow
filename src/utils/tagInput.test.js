import { describe, it, expect } from 'vitest';
import { validateTag, MAX_TAG_LENGTH, MAX_TAGS } from './tagInput';

describe('validateTag (Ask-a-question tag chips)', () => {
  it('accepts a normal tag and returns the trimmed value', () => {
    expect(validateTag('react', [])).toEqual({ ok: true, tag: 'react' });
    expect(validateTag('  react  ', [])).toEqual({ ok: true, tag: 'react' });
  });

  it('rejects empty and whitespace-only tags', () => {
    expect(validateTag('', []).ok).toBe(false);
    expect(validateTag('   ', []).ok).toBe(false);
  });

  it('rejects tags longer than the limit (measured after trimming)', () => {
    expect(validateTag('javascriptx', []).ok).toBe(false);
    expect(validateTag(' javascriptx ', []).ok).toBe(false);
    expect(validateTag('javascript', []).ok).toBe(true);
    expect(MAX_TAG_LENGTH).toBe(10);
  });

  it('rejects duplicates case-insensitively', () => {
    expect(validateTag('React', ['react']).ok).toBe(false);
    expect(validateTag('react', ['REACT']).ok).toBe(false);
  });

  it('rejects a new tag when the tag limit is reached', () => {
    const full = ['a', 'b', 'c', 'd', 'e'];
    expect(validateTag('f', full).ok).toBe(false);
    expect(MAX_TAGS).toBe(5);
  });

  it('reports duplicate before limit when both apply', () => {
    const full = ['a', 'b', 'c', 'd', 'e'];
    const result = validateTag('A', full);
    expect(result.ok).toBe(false);
    expect(result.error).toMatch(/already/i);
  });
});
