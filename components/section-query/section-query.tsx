import { Flex } from '@mantine/core';
import QueryForm from '@/components/query-form/query-form';
import { forwardRef } from 'react';

const SectionQuery = forwardRef<HTMLDivElement | null>((props, ref) => (
  <Flex
    align="center"
    justify="center"
    ref={ref}
  >
    <QueryForm />
  </Flex>
));

export default SectionQuery;
