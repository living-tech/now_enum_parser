import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum BusinessDay {
  Sunday = 'Sunday',
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [BusinessDay.Sunday]: '日曜日',
    [BusinessDay.Monday]: '月曜日',
    [BusinessDay.Tuesday]: '火曜日',
    [BusinessDay.Wednesday]: '水曜日',
    [BusinessDay.Thursday]: '木曜日',
    [BusinessDay.Friday]: '金曜日',
    [BusinessDay.Saturday]: '土曜日',
  },
  en: {
    [BusinessDay.Sunday]: 'sunday',
    [BusinessDay.Monday]: 'monday',
    [BusinessDay.Tuesday]: 'tuesday',
    [BusinessDay.Wednesday]: 'wednesday',
    [BusinessDay.Thursday]: 'thursday',
    [BusinessDay.Friday]: 'firday',
    [BusinessDay.Saturday]: 'saturday',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const businessDayEncoder = generateEncoder<BusinessDay>(translations);
export const businessDayDecoder = generateDecoder<BusinessDay>(
  reverseTranslations,
);
