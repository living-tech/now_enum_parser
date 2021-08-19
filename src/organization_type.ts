import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum OrganizationType {
  Individual = 'Individual',
  Corporate = 'Corporate'
}

// Edit contexts
const translations: Translations = {
  ja: {
    [OrganizationType.Individual]: '個人',
    [OrganizationType.Corporate]: '法人'
  },
  en: {
    [OrganizationType.Individual]: 'Individual',
    [OrganizationType.Corporate]: 'Corporate'
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const organizationTypeEncoder = generateEncoder<OrganizationType>(translations);
export const organizationTypeDecoder = generateDecoder<OrganizationType>(reverseTranslations);
