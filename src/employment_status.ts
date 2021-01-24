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
  GovernmentOfficial= 'GovernmentOfficial',
  CompanyExecutive = 'CompanyExecutive',
  StaffMemberOfAssociation = 'StaffMemberOfAssociation',
  WelfarePaymentRecipient = 'WelfarePaymentRecipient',
  Pensioner = 'Pensioner',
  DispatchedEmployee = 'DispatchedEmployee',
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
    [EmploymentStatus.GovernmentOfficial]: '公務員',
    [EmploymentStatus.CompanyExecutive]: '会社役員',
    [EmploymentStatus.StaffMemberOfAssociation]: '団体職員',
    [EmploymentStatus.WelfarePaymentRecipient]: '生活保護',
    [EmploymentStatus.Pensioner]: '年金受給',
    [EmploymentStatus.DispatchedEmployee]: '派遣社員',
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
    [EmploymentStatus.GovernmentOfficial]: 'Government Official',
    [EmploymentStatus.CompanyExecutive]: 'Company Executive',
    [EmploymentStatus.StaffMemberOfAssociation]: 'Staff member of association',
    [EmploymentStatus.WelfarePaymentRecipient]: 'Welfare payment recipients',
    [EmploymentStatus.Pensioner]: 'Pensioner',
    [EmploymentStatus.DispatchedEmployee]: 'Dispatched employee',
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
