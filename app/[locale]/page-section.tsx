import {
  Center, Divider, MantineSpacing, Space,
} from '@mantine/core';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    title?: string;
    spaceAfter?: MantineSpacing;
    spaceBefore?: MantineSpacing;

}

export default function PageSection({
  children, title, spaceAfter = 160, spaceBefore = 'xl',
}: Props) {
  return (
    <section>
      {title && (
        <>
          <Divider
            mb="md"
            color="primary.4"
            size="sm"
            label={(
              <Center component="h4" c="secondary.9">
                {title}
              </Center>
)}
          />
          <Space h={spaceBefore} />
        </>
      )}
      {children}
      <Space h={spaceAfter} />
    </section>
  );
}
