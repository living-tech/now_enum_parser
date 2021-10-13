var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var CertificateRejectReason;
(function (CertificateRejectReason) {
    CertificateRejectReason["NotDesignated"] = "NotDesignated";
    CertificateRejectReason["Unclearness"] = "Unclearness";
    CertificateRejectReason["HidenessOrDamage"] = "HidenessOrDamage";
    CertificateRejectReason["NoRegistrationNumber"] = "NoRegistrationNumber";
    CertificateRejectReason["WrongInfo"] = "WrongInfo";
    CertificateRejectReason["Other"] = "Other";
})(CertificateRejectReason || (CertificateRejectReason = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[CertificateRejectReason.NotDesignated] = '指定された公的書類ではない',
        _a[CertificateRejectReason.Unclearness] = '不鮮明のため読み取れない',
        _a[CertificateRejectReason.HidenessOrDamage] = '隠れ・破損などのため読み取れない',
        _a[CertificateRejectReason.NoRegistrationNumber] = '許可番号が見つからない',
        _a[CertificateRejectReason.WrongInfo] = '届出情報に誤りがある',
        _a[CertificateRejectReason.Other] = 'その他',
        _a),
    en: (_b = {},
        _b[CertificateRejectReason.NotDesignated] = 'This is not a designated official document.',
        _b[CertificateRejectReason.Unclearness] = 'The image is not clear and cannot be read.',
        _b[CertificateRejectReason.HidenessOrDamage] = 'Unreadable due to concealment, damage, etc',
        _b[CertificateRejectReason.NoRegistrationNumber] = 'The permit number is unrecognizable',
        _b[CertificateRejectReason.WrongInfo] = 'WThere is an error in the information reported.',
        _b[CertificateRejectReason.Other] = 'Other Reasons',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var certificateRejectReasonEncoder = generateEncoder(translations);
export var certificateRejectReasonDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=certificate_reject_reason.js.map