import { Translations } from "./lib/interfaces"
import { generateReverseTranslations, generateEncoder, generateDecoder } from "./lib/generators"

export enum Gender {
  MALE,
  FEMALE,
  OTHER,
}

const translations: Translations = {
  ja: {
    [Gender.MALE]: "男性",
    [Gender.FEMALE]: "女性",
    [Gender.OTHER]: "その他",
  },
  en: {
    [Gender.MALE]: "male",
    [Gender.FEMALE]: "female",
    [Gender.OTHER]: "other",
  }
}

// DON'T EDIT BELOW
const reverseTranslations = generateReverseTranslations(translations);
export const encoder = generateEncoder<Gender>(translations);
export const decoder = generateDecoder<Gender>(reverseTranslations);
