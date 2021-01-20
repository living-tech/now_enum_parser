import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum EmploymentStatus {
  SoloProprietorship = 'SoloProprietorship',
  ListedCompanyOfficeWorker = 'ListedCompanyOfficeWorker',
  UnlistedCompanyOfficeWorker = 'UnlistedCompanyOfficeWorker',
  CompanyOwner = 'CompanyOwner',
  PartTimeJob = 'PartTimeJob',
  Arbeit = 'Arbeit',
  Student = 'Student',
  Unemployed = 'Unemployed',
  Other = 'Other',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [EmploymentStatus.SoloProprietorship]: '個人事業主（フリーランサー）',
    [EmploymentStatus.ListedCompanyOfficeWorker]: '会社員（上場企業）',
    [EmploymentStatus.UnlistedCompanyOfficeWorker]: '会社員（非上場企業）',
    [EmploymentStatus.CompanyOwner]: '経営者',
    [EmploymentStatus.PartTimeJob]: 'パート',
    [EmploymentStatus.Arbeit]: 'アルバイト',
    [EmploymentStatus.Student]: '学生',
    [EmploymentStatus.Unemployed]: '無職',
    [EmploymentStatus.Other]: 'その他',
  },
  en: {
    [EmploymentStatus.SoloProprietorship]: 'Solo proprietorship',
    [EmploymentStatus.ListedCompanyOfficeWorker]:
      'Listed company office worker',
    [EmploymentStatus.UnlistedCompanyOfficeWorker]:
      'Unlisted company office worker',
    [EmploymentStatus.CompanyOwner]: 'Company owner',
    [EmploymentStatus.PartTimeJob]: 'Part-time job',
    [EmploymentStatus.Arbeit]: 'Arbeit',
    [EmploymentStatus.Student]: 'Student',
    [EmploymentStatus.Unemployed]: 'Unemployed',
    [EmploymentStatus.Other]: 'Other',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const employmentStatusEncoder = generateEncoder<EmploymentStatus>(
  translations,
);
export const employmentStatusDecoder = generateDecoder<EmploymentStatus>(
  reverseTranslations,
);
