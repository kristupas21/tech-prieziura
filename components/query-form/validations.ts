import { parsePhoneNumber } from 'libphonenumber-js';

export function isEmailValid(value: string): boolean {
  return /^\S+@\S+$/.test(value);
}

export function isValuePresent(value: string): boolean {
  return !!(value || '').trim();
}

export function isPhoneValid(value?: number): boolean {
  if (!value) {
    return true;
  }

  try {
    const v = parsePhoneNumber(`+${value}`);
    return v.isValid();
  } catch (e) {
    return false;
  }
}
