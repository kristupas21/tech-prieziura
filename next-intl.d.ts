import 'next-intl';
import { ReactNode } from 'react';
import { NestedKeyOf } from 'use-intl';

declare module 'next-intl' {
    export function useTranslations<
        K extends NestedKeyOf<IntlMessages>
    >(): {
        (key: K, values?: Record<string, string | number>): string;
        rich(key: K, values?: Record<string, ReactNode>): ReactNode;
    };
}
