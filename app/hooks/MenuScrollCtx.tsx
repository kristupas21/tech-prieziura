'use client';

import { useScrollIntoView } from '@mantine/hooks';
import {
  createContext, ReactNode, useContext, useMemo,
} from 'react';

type ScrollCtx = {
    el1: ReturnType<typeof useScrollIntoView>,
    el2: ReturnType<typeof useScrollIntoView>
}

const ScrollContext = createContext<ScrollCtx>({
  el1: {} as ReturnType<typeof useScrollIntoView>,
  el2: {} as ReturnType<typeof useScrollIntoView>,
});

const options: Parameters<typeof useScrollIntoView>[0] = {
  offset: 60,
  duration: 450,
};

export function ScrollCtxProvider({ children }: { children: ReactNode }) {
  const el1 = useScrollIntoView(options!);
  const el2 = useScrollIntoView(options!);

  const value = useMemo<ScrollCtx>(() => ({
    el1,
    el2,
  }), [el1, el2]);

  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  );
}

export function useMenuScroll(): ScrollCtx {
  return useContext(ScrollContext);
}
