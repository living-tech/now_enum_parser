"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var IdentityDocumentNote;
(function (IdentityDocumentNote) {
    IdentityDocumentNote["AddressIsNotSpecified"] = "AddressIsNotSpecified";
    IdentityDocumentNote["Blurred"] = "Blurred";
    IdentityDocumentNote["ContainsIndividualNumber"] = "ContainsIndividualNumber";
    IdentityDocumentNote["CopyOrScannedData"] = "CopyOrScannedData";
    IdentityDocumentNote["Expired"] = "Expired";
    IdentityDocumentNote["FailedRandomnessCheck"] = "FailedRandomnessCheck";
    IdentityDocumentNote["MismatchedData"] = "MismatchedData";
    IdentityDocumentNote["MismatchedDocument"] = "MismatchedDocument";
    IdentityDocumentNote["MismatchedDocumentSides"] = "MismatchedDocumentSides";
    IdentityDocumentNote["MismatchedFace"] = "MismatchedFace";
    IdentityDocumentNote["MissingAddress"] = "MissingAddress";
    IdentityDocumentNote["MissingIndividualNumber"] = "MissingIndividualNumber";
    IdentityDocumentNote["MissingIssuer"] = "MissingIssuer";
    IdentityDocumentNote["MissingThickness"] = "MissingThickness";
    IdentityDocumentNote["NoFace"] = "NoFace";
    IdentityDocumentNote["NotHoldDocument"] = "NotHoldDocument";
    IdentityDocumentNote["NotHuman"] = "NotHuman";
    IdentityDocumentNote["OutOfFrame"] = "OutOfFrame";
    IdentityDocumentNote["PartlyHidden"] = "PartlyHidden";
    IdentityDocumentNote["WrongDocument"] = "WrongDocument";
    IdentityDocumentNote["Other"] = "Other";
})(IdentityDocumentNote = exports.IdentityDocumentNote || (exports.IdentityDocumentNote = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[IdentityDocumentNote.AddressIsNotSpecified] = '手書きで住所が2箇所記載されており、打ち消し線がない',
        _a[IdentityDocumentNote.Blurred] = '不鮮明のため読み取れない',
        _a[IdentityDocumentNote.ContainsIndividualNumber] = 'マイナンバーが含まれている',
        _a[IdentityDocumentNote.CopyOrScannedData] = 'カラー・白黒コピー・スキャンである',
        _a[IdentityDocumentNote.Expired] = '有効期限が切れている',
        _a[IdentityDocumentNote.FailedRandomnessCheck] = 'その場で撮影されたことの証明が不十分',
        _a[IdentityDocumentNote.MismatchedData] = '確認書類と一致しない',
        _a[IdentityDocumentNote.MismatchedDocument] = 'セルフィーに写っている公的身分証と公的身分証が一致しない',
        _a[IdentityDocumentNote.MismatchedDocumentSides] = '氏名が表と裏で一致しない',
        _a[IdentityDocumentNote.MismatchedFace] = '顔が一致しない',
        _a[IdentityDocumentNote.MissingAddress] = '住所の記載ない',
        _a[IdentityDocumentNote.MissingIndividualNumber] = 'マイナンバーの記載がない',
        _a[IdentityDocumentNote.MissingIssuer] = '発行者の記載がない',
        _a[IdentityDocumentNote.MissingThickness] = '厚みがない',
        _a[IdentityDocumentNote.NoFace] = '顔がない',
        _a[IdentityDocumentNote.NotHoldDocument] = '公的身分証を手に持っていない',
        _a[IdentityDocumentNote.NotHuman] = '人間でない',
        _a[IdentityDocumentNote.OutOfFrame] = '公的身分証が外に出ている',
        _a[IdentityDocumentNote.PartlyHidden] = '隠れ・破損などのため読み取れない',
        _a[IdentityDocumentNote.WrongDocument] = '指定された書類・証明書でない',
        _a[IdentityDocumentNote.Other] = 'その他',
        _a),
    en: (_b = {},
        _b[IdentityDocumentNote.AddressIsNotSpecified] = 'AddressIsNotSpecified',
        _b[IdentityDocumentNote.Blurred] = 'Blurred',
        _b[IdentityDocumentNote.ContainsIndividualNumber] = 'ContainsIndividualNumber',
        _b[IdentityDocumentNote.CopyOrScannedData] = 'CopyOrScannedData',
        _b[IdentityDocumentNote.Expired] = 'Expired',
        _b[IdentityDocumentNote.FailedRandomnessCheck] = 'FailedRandomnessCheck',
        _b[IdentityDocumentNote.MismatchedData] = 'MismatchedData',
        _b[IdentityDocumentNote.MismatchedDocument] = 'MismatchedDocument',
        _b[IdentityDocumentNote.MismatchedDocumentSides] = 'MismatchedDocumentSides',
        _b[IdentityDocumentNote.MismatchedFace] = 'MismatchedFace',
        _b[IdentityDocumentNote.MissingAddress] = 'MissingAddress',
        _b[IdentityDocumentNote.MissingIndividualNumber] = 'MissingIndividualNumber',
        _b[IdentityDocumentNote.MissingIssuer] = 'MissingIssuer',
        _b[IdentityDocumentNote.MissingThickness] = 'MissingThickness',
        _b[IdentityDocumentNote.NoFace] = 'NoFace',
        _b[IdentityDocumentNote.NotHoldDocument] = 'NotHoldDocument',
        _b[IdentityDocumentNote.NotHuman] = 'NotHuman',
        _b[IdentityDocumentNote.OutOfFrame] = 'OutOfFrame',
        _b[IdentityDocumentNote.MissingThickness] = 'MissingThickness',
        _b[IdentityDocumentNote.PartlyHidden] = 'PartlyHidden',
        _b[IdentityDocumentNote.WrongDocument] = 'WrongDocument',
        _b[IdentityDocumentNote.Other] = 'Other',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.identityDocumentNoteEncoder = generators_1.generateEncoder(translations);
exports.identityDocumentNoteDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=identity_document_note.js.map