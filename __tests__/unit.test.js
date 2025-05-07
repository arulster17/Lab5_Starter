// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('valid phone 10 digits', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(false);
});

test('valid phone 7 digits', () => {
  expect(isPhoneNumber('456-7890')).toBe(true);
});

test('invalid phone, no dashes', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('invalid phone, wrong length', () => {
  expect(isPhoneNumber('456-789')).toBe(false);
});



test('valid email', () => {
  expect(isEmail('arulster17@gmail.com')).toBe(true);
});

test('valid email w/ underscore in username', () => {
  expect(isEmail('richard_james@hotmail.com')).toBe(true);
});

test('invalid email, dot in username', () => {
  expect(isEmail('user.name@domain.com')).toBe(false);
});

test('invalid email, domain too long', () => {
  expect(isEmail('user@domain.toolong')).toBe(false);
});



test('valid password', () => {
  expect(isStrongPassword('ilovecse110')).toBe(true);
});

test('valid password with underscore', () => {
  expect(isStrongPassword('thomas_powell')).toBe(true);
});

test('invalid password, too long', () => {
  expect(isStrongPassword('qwertyuiopasdfghjklzxcvbnm')).toBe(false);
});

test('invalid password, does not start with letter', () => {
  expect(isStrongPassword('_banana_')).toBe(false);
});



test('valid date', () => {
  expect(isDate('5/6/2025')).toBe(true);
});

test('valid date but semantically invalid', () => {
  expect(isDate('12/34/5678')).toBe(true);
});

test('invalid date, year too short', () => {
  expect(isDate('2/22/22')).toBe(false);
});

test('invalid date, no day', () => {
  expect(isDate('1//2000')).toBe(false);
});



test('valid hex 6 chars', () => {
  expect(isHexColor('#1a2b3c')).toBe(true);
});

test('valid hex 3 chars', () => {
  expect(isHexColor('#abc')).toBe(true);
});

test('invalid hex, too long', () => {
  expect(isHexColor('#1234567')).toBe(false);
});

test('invalid hex, too short', () => {
  expect(isHexColor('#12')).toBe(false);
});