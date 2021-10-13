var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var StaffCommentType;
(function (StaffCommentType) {
    StaffCommentType["PropertyInformation"] = "PropertyInformation";
    StaffCommentType["StaffInformation"] = "StaffInformation";
    StaffCommentType["CompanyInformation"] = "CompanyInformation";
})(StaffCommentType || (StaffCommentType = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[StaffCommentType.PropertyInformation] = 'Property information',
        _a[StaffCommentType.StaffInformation] = 'Staff information',
        _a[StaffCommentType.CompanyInformation] = 'Company information',
        _a),
    en: (_b = {},
        _b[StaffCommentType.PropertyInformation] = 'Property information',
        _b[StaffCommentType.StaffInformation] = 'Staff information',
        _b[StaffCommentType.CompanyInformation] = 'Company information',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var staffCommentTypeEncoder = generateEncoder(translations);
export var staffCommentTypeDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=staff_comment_type.js.map