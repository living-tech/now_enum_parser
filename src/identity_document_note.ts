import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum IdentityDocumentNote {
  AddressIsNotSpecified = 'AddressIsNotSpecified', // 手書きで住所が2箇所記載されており、打ち消し線がない
  Blurred = 'Blurred', // 不鮮明のため読み取れない
  ContainsIndividualNumber = 'ContainsIndividualNumber', // マイナンバーが含まれている
  CopyOrScannedData = 'CopyOrScannedData', // カラー・白黒コピー・スキャンである
  Expired = 'Expired', // 有効期限が切れている
  FailedRandomnessCheck = 'FailedRandomnessCheck', // その場で撮影されたことの証明が不十分
  MismatchedData = 'MismatchedData', // 確認書類と一致しない
  MismatchedDocument = 'MismatchedDocument', // セルフィーに写っている公的身分証と公的身分証が一致しない
  MismatchedDocumentSides = 'MismatchedDocumentSides', // 氏名が表と裏で一致しない
  MismatchedFace = 'MismatchedFace', // 顔が一致しない
  MissingAddress = 'MissingAddress', // 住所の記載ない
  MissingIndividualNumber = 'MissingIndividualNumber', // マイナンバーの記載がない
  MissingIssuer = 'MissingIssuer', // 発行者の記載がない
  MissingThickness = 'MissingThickness', // 厚みがない
  NoFace = 'NoFace', // 顔がない
  NotHoldDocument = 'NotHoldDocument', // 公的身分証を手に持っていない
  NotHuman = 'NotHuman', // 人間でない
  OutOfFrame = 'OutOfFrame', // 公的身分証が外に出ている
  PartlyHidden = 'PartlyHidden', // 隠れ・破損などのため読み取れない
  WrongDocument = 'WrongDocument', // 指定された書類・証明書でない
  Other = 'Other', // その他
}

// Edit contexts
const translations: Translations = {
  ja: {
    [IdentityDocumentNote.AddressIsNotSpecified]:
      '手書きで住所が2箇所記載されており、打ち消し線がない',
    [IdentityDocumentNote.Blurred]: '不鮮明のため読み取れない',
    [IdentityDocumentNote.ContainsIndividualNumber]:
      'マイナンバーが含まれている',
    [IdentityDocumentNote.CopyOrScannedData]:
      'カラー・白黒コピー・スキャンである',
    [IdentityDocumentNote.Expired]: '有効期限が切れている',
    [IdentityDocumentNote.FailedRandomnessCheck]:
      'その場で撮影されたことの証明が不十分',
    [IdentityDocumentNote.MismatchedData]: '確認書類と一致しない',
    [IdentityDocumentNote.MismatchedDocument]:
      'セルフィーに写っている公的身分証と公的身分証が一致しない',
    [IdentityDocumentNote.MismatchedDocumentSides]: '氏名が表と裏で一致しない',
    [IdentityDocumentNote.MismatchedFace]: '顔が一致しない',
    [IdentityDocumentNote.MissingAddress]: '住所の記載ない',
    [IdentityDocumentNote.MissingIndividualNumber]: 'マイナンバーの記載がない',
    [IdentityDocumentNote.MissingIssuer]: '発行者の記載がない',
    [IdentityDocumentNote.MissingThickness]: '厚みがない',
    [IdentityDocumentNote.NoFace]: '顔がない',
    [IdentityDocumentNote.NotHoldDocument]: '公的身分証を手に持っていない',
    [IdentityDocumentNote.NotHuman]: '人間でない',
    [IdentityDocumentNote.OutOfFrame]: '公的身分証が外に出ている',
    [IdentityDocumentNote.PartlyHidden]: '隠れ・破損などのため読み取れない',
    [IdentityDocumentNote.WrongDocument]: '指定された書類・証明書でない',
    [IdentityDocumentNote.Other]: 'その他',
  },
  en: {
    [IdentityDocumentNote.AddressIsNotSpecified]: 'AddressIsNotSpecified',
    [IdentityDocumentNote.Blurred]: 'Blurred',
    [IdentityDocumentNote.ContainsIndividualNumber]: 'ContainsIndividualNumber',
    [IdentityDocumentNote.CopyOrScannedData]: 'CopyOrScannedData',
    [IdentityDocumentNote.Expired]: 'Expired',
    [IdentityDocumentNote.FailedRandomnessCheck]: 'FailedRandomnessCheck',
    [IdentityDocumentNote.MismatchedData]: 'MismatchedData',
    [IdentityDocumentNote.MismatchedDocument]: 'MismatchedDocument',
    [IdentityDocumentNote.MismatchedDocumentSides]: 'MismatchedDocumentSides',
    [IdentityDocumentNote.MismatchedFace]: 'MismatchedFace',
    [IdentityDocumentNote.MissingAddress]: 'MissingAddress',
    [IdentityDocumentNote.MissingIndividualNumber]: 'MissingIndividualNumber',
    [IdentityDocumentNote.MissingIssuer]: 'MissingIssuer',
    [IdentityDocumentNote.MissingThickness]: 'MissingThickness',
    [IdentityDocumentNote.NoFace]: 'NoFace',
    [IdentityDocumentNote.NotHoldDocument]: 'NotHoldDocument',
    [IdentityDocumentNote.NotHuman]: 'NotHuman',
    [IdentityDocumentNote.OutOfFrame]: 'OutOfFrame',
    [IdentityDocumentNote.MissingThickness]: 'MissingThickness',
    [IdentityDocumentNote.PartlyHidden]: 'PartlyHidden',
    [IdentityDocumentNote.WrongDocument]: 'WrongDocument',
    [IdentityDocumentNote.Other]: 'Other',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const identityDocumentNoteEncoder = generateEncoder<
  IdentityDocumentNote
>(translations);
export const identityDocumentNoteDecoder = generateDecoder<
  IdentityDocumentNote
>(reverseTranslations);
