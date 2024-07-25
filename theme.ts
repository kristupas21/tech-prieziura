'use client';

import { createTheme, MantineColorsTuple } from '@mantine/core';

const primary: MantineColorsTuple = [
  '#f6fef7',
  '#e0ede3',
  '#c3d7c8',
  '#a3c1ac',
  '#88ae93',
  '#76a283',
  '#6c9c7a',
  '#5a8867',
  '#4e795b',
  '#3e6a4c',
];

const secondary: MantineColorsTuple = [
  '#f6f1f9',
  '#e8dfed',
  '#d1bbdb',
  '#b995cb',
  '#a575bc',
  '#9860b3',
  '#9156af',
  '#7f479a',
  '#623479',
  '#331B3F',
];

export const theme = createTheme({
  colors: {
    primary,
    secondary,
  },
});
