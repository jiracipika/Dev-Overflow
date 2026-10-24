// Pure list operations behind the bookmark/"Saved Questions" (collections)
// localStorage persistence used by ExpandableCard and the Collections page.

/** Add a card, replacing any existing entry with the same id (idempotent). */
export function addToCollections(list, card) {
  return [...list.filter((item) => item.id !== card.id), card];
}

/** Remove every entry with the given id. */
export function removeFromCollections(list, cardId) {
  return list.filter((item) => item.id !== cardId);
}
