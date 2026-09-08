import React, { createContext, useContext, useState } from 'react';
import type { CursorState } from '../types';

interface CursorContextType {
  cursorState: CursorState;
  setCursorState: (state: CursorState) => void;
  cursorText: string;
  setCursorText: (text: string) => void;
}

const CursorContext = createContext<CursorContextType>({
  cursorState: 'default',
  setCursorState: () => {},
  cursorText: '',
  setCursorText: () => {},
});

export const CursorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cursorState, setCursorState] = useState<CursorState>('default');
  const [cursorText, setCursorText] = useState<string>('');

  const handleSetCursorState = (state: CursorState) => {
    setCursorState(state);
    if (state === 'view') setCursorText('VIEW');
    else if (state === 'explore') setCursorText('EXPLORE');
    else if (state === 'drag') setCursorText('DRAG');
    else if (state === 'book') setCursorText('BOOK');
    else setCursorText('');
  };

  return (
    <CursorContext.Provider
      value={{
        cursorState,
        setCursorState: handleSetCursorState,
        cursorText,
        setCursorText,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);

