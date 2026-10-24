import { describe, it, expect } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MessageContext } from '../context/messageContextBase';
import authReducer from '../features/auth/authSlice';
import MessageBoxes from './MessageBoxes';

const makeStore = (userId) =>
  configureStore({
    reducer: { auth: authReducer },
    preloadedState: { auth: { accessToken: 't', refreshToken: 'r', user: { _id: userId } } },
  });

function renderMessages(messages, currentUserId) {
  const value = {
    messages,
    currentChat: { _id: 'c1', members: [currentUserId, 'other'] },
    conversations: [],
    setCurrentChat: () => {},
    handleSubmit: () => {},
  };
  return renderToStaticMarkup(
    <Provider store={makeStore(currentUserId)}>
      <MessageContext.Provider value={value}>
        <MessageBoxes />
      </MessageContext.Provider>
    </Provider>
  );
}

describe('MessageBoxes sent/received alignment', () => {
  it("marks the current user's own messages as sent (right-aligned bubble)", () => {
    const html = renderMessages(
      [
        { _id: 'm1', text: 'from me', sender: 'user-1' },
        { _id: 'm2', text: 'from them', sender: 'other' },
      ],
      'user-1'
    );
    // MessageBox applies 'flex-row-reverse' when isSending is true.
    const sentCount = html.split('flex-row-reverse').length - 1;
    expect(sentCount).toBe(1);
    expect(html).toContain('from me');
    expect(html).toContain('from them');
  });
});
