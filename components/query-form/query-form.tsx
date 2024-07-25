'use client';

import {
  Button, Textarea, Group, TextInput, NumberInput,
  Box,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import type { QueryFormData } from '@/types/general.types';
import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import QueryFormError from '@/components/query-form/query-form-error';
import QueryFormSuccess from '@/components/query-form/query-form-success';
import { isEmailValid, isPhoneValid, isValuePresent } from '@/components/query-form/validations';
import axios from 'axios';
import styles from './query-form.module.scss';

const MAX_LEN = 500;
const MAX_WIDTH = 900;
const MIN_HEIGHT = 448;
const LS_KEY_EMAIL = 'tp-user-email';
const LS_KEY_PHONE = 'tp-user-phone';

type Step = 'error' | 'success' | 'form';

export default function QueryForm() {
  const [step, setStep] = useState<Step>('form');
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const t = useTranslations();

  const form = useForm<QueryFormData>({
    mode: 'uncontrolled',
    onValuesChange: ({ email, phone }) => {
      if (email) localStorage.setItem(LS_KEY_EMAIL, email);
      if (phone) localStorage.setItem(LS_KEY_PHONE, String(phone));
    },
    initialValues: {
      email: '',
      text: '',
      phone: undefined,
    },
    validate: {
      email: (value) => (isEmailValid(value) ? null : t('query.emailInvalid')),
      text: (value) => (isValuePresent(value) ? null : t('query.textRequired')),
      phone: (value) => (isPhoneValid(value) ? null : t('query.phoneInvalid')),
    },
  });

  const handleSubmit = async (values: QueryFormData) => {
    if (!form.isDirty) {
      return;
    }

    const success = await axios.post('/api/contact', values);

    if (success) {
      form.reset();
      setStep('success');
    } else {
      setStep('error');
    }
  };

  const handleTryAgainClick = () => {
    setStep('form');
    setTimeout(() => {
      if (textRef.current) textRef.current!.focus();
    });
  };

  useEffect(() => {
    const initialEmail = localStorage.getItem(LS_KEY_EMAIL);
    const initialPhone = localStorage.getItem(LS_KEY_PHONE);

    if (initialEmail) {
      form.setValues({ email: initialEmail });
    }
    if (initialPhone) {
      form.setValues({ phone: Number(initialPhone) });
    }
  }, [step]);

  if (step === 'success') {
    return <QueryFormSuccess minHeight={MIN_HEIGHT} />;
  }

  if (step === 'error') {
    return (
      <QueryFormError
        minHeight={MIN_HEIGHT}
        onClick={handleTryAgainClick}
      />
    );
  }

  return (
    <Box p="xl" bg="primary.1" w="100%" maw={MAX_WIDTH} mih={MIN_HEIGHT}>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Textarea
          withAsterisk
          ref={textRef}
          label={t('query.text')}
          placeholder={t('query.textPlaceholder')}
          key={form.key('text')}
          mih={258}
          maxLength={MAX_LEN}
          className={styles.textarea}
          {...form.getInputProps('text')}
        />
        <TextInput
          withAsterisk
          label={t('query.email')}
          mih={86}
          placeholder="example@email.com"
          key={form.key('email')}
          {...form.getInputProps('email')}
        />
        <NumberInput
          label={t('query.phone')}
          leftSection={<span>+</span>}
          placeholder="370"
          hideControls
          mih={86}
          key={form.key('phone')}
          {...form.getInputProps('phone')}
        />
        <Group justify="flex-end" mt="md">
          <Button
            type="submit"
            color="secondary.8"
            autoContrast
          >
            {t('query.submit')}
          </Button>
        </Group>
      </form>
    </Box>
  );
}
