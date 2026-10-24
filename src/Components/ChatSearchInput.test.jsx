import { describe, it, expect } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { MessageContext } from '../context/messageContextBase';
import ChatSearchInput from './ChatSearchInput';

// The Messages page renders ChatSideBar -> ChatSearchInput inside MessageProvider.
// MessageProvider exposes { messages, currentChat, conversations, setCurrentChat,
// handleSubmit } — there is no `chats` key. Rendering must not crash and must
// list conversations filtered by the search term.
function renderWithConversations(conversations) {
  const value = { messages: [], currentChat: null, conversations, setCurrentChat: () => {} };
  return renderToStaticMarkup(
    <MessageContext.Provider value={value}>
      <ChatSearchInput />
    </MessageContext.Provider>
  );
}

describe('ChatSearchInput', () => {
  it('renders conversations from the message context without crashing', () => {
    const html = renderWithConversations([
      { id: 1, _id: 'c1', name: 'Alice', lastMessage: { text: 'hello' } },
      { id: 2, _id: 'c2', name: 'Bob', lastMessage: null },
    ]);
    expect(html).toContain('Alice');
    expect(html).toContain('Bob');
    expect(html).toContain('hello');
  });

  it('does not crash on conversations without a name (defensive filter)', () => {
    const html = renderWithConversations([
      { id: 1, _id: 'c1', name: 'Alice' },
      { id: 2, _id: 'c2', name: null },
      { id: 3, _id: 'c3' },
    ]);
    expect(html).toContain('Alice');
  });
});
