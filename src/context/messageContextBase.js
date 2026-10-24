import { createContext } from 'react';

// Raw message context, kept in a component-free module so the provider file
// only exports components (react-refresh friendly) and tests can consume it.
export const MessageContext = createContext();
