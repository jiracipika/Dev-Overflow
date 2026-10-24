import { describe, it, expect } from 'vitest';
import { addToCollections, removeFromCollections } from './collections';

const card = (id) => ({ id, title: `Question ${id}` });

describe('collections (saved questions persistence)', () => {
  it('adds a card and does not mutate the input list', () => {
    const list = [card(1)];
    const result = addToCollections(list, card(2));
    expect(result.map((c) => c.id)).toEqual([1, 2]);
    expect(list.map((c) => c.id)).toEqual([1]);
  });

  it('is idempotent per id: saving the same question twice keeps one entry', () => {
    let list = [];
    list = addToCollections(list, card(1));
    list = addToCollections(list, card(1));
    expect(list).toHaveLength(1);
  });

  it('re-saving an updated card replaces the stale entry', () => {
    let list = addToCollections([], card(1));
    const updated = { ...card(1), votes: 42 };
    list = addToCollections(list, updated);
    expect(list).toHaveLength(1);
    expect(list[0].votes).toBe(42);
  });

  it('removes by id and leaves other entries untouched', () => {
    const list = [card(1), card(2), card(3)];
    expect(removeFromCollections(list, 2).map((c) => c.id)).toEqual([1, 3]);
    expect(removeFromCollections(list, 99)).toHaveLength(3);
  });

  it('toggling add/remove/add ends with exactly one entry', () => {
    let list = addToCollections([], card(1));
    list = removeFromCollections(list, 1);
    expect(list).toHaveLength(0);
    list = addToCollections(list, card(1));
    expect(list).toHaveLength(1);
  });
});
