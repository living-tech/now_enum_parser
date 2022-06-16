import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum RegularHoliday {
  Sunday = 'Sunday',
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  NationalHoliday = 'NationalHoliday',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [RegularHoliday.Sunday]: '日曜日',
    [RegularHoliday.Monday]: '月曜日',
    [RegularHoliday.Tuesday]: '火曜日',
    [RegularHoliday.Wednesday]: '水曜日',
    [RegularHoliday.Thursday]: '木曜日',
    [RegularHoliday.Friday]: '金曜日',
    [RegularHoliday.Saturday]: '土曜日',
    [RegularHoliday.Saturday]: '祝日',
  },
  en: {
    [RegularHoliday.Sunday]: 'sunday',
    [RegularHoliday.Monday]: 'monday',
    [RegularHoliday.Tuesday]: 'tuesday',
    [RegularHoliday.Wednesday]: 'wednesday',
    [RegularHoliday.Thursday]: 'thursday',
    [RegularHoliday.Friday]: 'firday',
    [RegularHoliday.Saturday]: 'saturday',
    [RegularHoliday.Saturday]: 'nationalholiday',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const regularHolidayEncoder = generateEncoder<RegularHoliday>(
  translations,
);
export const regularHolidayDecoder = generateDecoder<RegularHoliday>(
  reverseTranslations,
);
