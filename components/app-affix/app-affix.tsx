import {
  Affix, Button, rem, Transition,
} from '@mantine/core';
import { IconArrowUp } from '@tabler/icons-react';
import { useWindowScroll } from '@mantine/hooks';

export function AppAffix() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix position={{ bottom: 20, right: 20 }}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <Button
            autoContrast
            color="primary.8"
            radius="xl"
            opacity={0.9}
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}
          >
            <IconArrowUp style={{ width: rem(16), height: rem(16) }} />
          </Button>
        )}
      </Transition>
    </Affix>
  );
}
