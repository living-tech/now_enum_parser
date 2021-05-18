import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

export enum ManageForm {
  SelfManagement = 'Self Management', //   【REINS】1:自主管理 2:一部委託 3:全部委託
  PartialConsignment = 'Partial Consignment', //
  FullConsignment = 'Full Consignment', //
}

// Edit contexts
const translations: Translations = {
  ja: {
    [ManageForm.SelfManagement]: '自主管理',
    [ManageForm.PartialConsignment]: '一部委託',
    [ManageForm.FullConsignment]: '全部委託',
  },
  en: {
    [ManageForm.SelfManagement]: 'Self Management',
    [ManageForm.PartialConsignment]: 'Partial Consignment',
    [ManageForm.FullConsignment]: 'Full Consignment',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const manageFormEncoder = generateEncoder<ManageForm>(
  translations,
);
export const manageFormDecoder = generateDecoder<ManageForm>(
  reverseTranslations,
);
