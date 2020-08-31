import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum Orientation {
  North = 'North', // 北
  Northeast = 'Northeast', // 北東
  East = 'East', // 東
  Southeast = 'Southeast', // 南東
  South = 'South', // 南
  Southwest = 'Southwest', // 南西
  West = 'West', // 西
  Northwest = 'Northwest', // 北西
}

// Edit contexts
const translations: Translations = {
  ja: {
    [Orientation.North]: '北',
    [Orientation.Northeast]: '北東',
    [Orientation.East]: '東',
    [Orientation.Southeast]: '南東',
    [Orientation.South]: '南',
    [Orientation.Southwest]: '南西',
    [Orientation.West]: '西',
    [Orientation.Northwest]: '北西',
  },
  en: {
    [Orientation.North]: 'North',
    [Orientation.Northeast]: 'Northeast',
    [Orientation.East]: 'East',
    [Orientation.Southeast]: 'Southeast',
    [Orientation.South]: 'South',
    [Orientation.Southwest]: 'Southwest',
    [Orientation.West]: 'West',
    [Orientation.Northwest]: 'Northwest',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const orientationEncoder = generateEncoder<Orientation>(translations);
export const orientationDecoder = generateDecoder<Orientation>(
  reverseTranslations,
);
