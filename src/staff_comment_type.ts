import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum StaffCommentType { //  1:物件情報、2:スタッフ情報、3:会社実績や特徴・サービス情報
  PropertyInformation = 'PropertyInformation',
  StaffInformation = 'StaffInformation',
  CompanyInformation = 'CompanyInformation',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [StaffCommentType.PropertyInformation]: 'Property information', // 1:物件情報、2:スタッフ情報、3:会社実績や特徴・サービス情報
    [StaffCommentType.StaffInformation]: 'Staff information',
    [StaffCommentType.CompanyInformation]: 'Company information',
  },
  en: {
    [StaffCommentType.PropertyInformation]: 'Property information', // 1: Property information, 2: Staff information, 3: Company information
    [StaffCommentType.StaffInformation]: 'Staff information',
    [StaffCommentType.CompanyInformation]: 'Company information',
  }
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const staffCommentTypeEncoder = generateEncoder<StaffCommentType>(translations);
export const staffCommentTypeDecoder = generateDecoder<StaffCommentType>(
  reverseTranslations,
);
