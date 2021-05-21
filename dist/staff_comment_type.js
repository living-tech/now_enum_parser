"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.staffCommentTypeDecoder = exports.staffCommentTypeEncoder = exports.StaffCommentType = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var StaffCommentType;
(function (StaffCommentType) {
    StaffCommentType["PropertyInformation"] = "PropertyInformation";
    StaffCommentType["StaffInformation"] = "StaffInformation";
    StaffCommentType["CompanyInformation"] = "CompanyInformation";
})(StaffCommentType = exports.StaffCommentType || (exports.StaffCommentType = {}));
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
        _b)
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.staffCommentTypeEncoder = generators_1.generateEncoder(translations);
exports.staffCommentTypeDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=staff_comment_type.js.map