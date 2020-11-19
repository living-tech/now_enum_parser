"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.emergencyContactRelationshipDecoder = exports.emergencyContactRelationshipEncoder = exports.EmergencyContactRelationship = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var EmergencyContactRelationship;
(function (EmergencyContactRelationship) {
    EmergencyContactRelationship[EmergencyContactRelationship["Self"] = 0] = "Self";
    EmergencyContactRelationship[EmergencyContactRelationship["Father"] = 1] = "Father";
    EmergencyContactRelationship[EmergencyContactRelationship["Mother"] = 2] = "Mother";
    EmergencyContactRelationship[EmergencyContactRelationship["Grandfather"] = 3] = "Grandfather";
    EmergencyContactRelationship[EmergencyContactRelationship["Grandmother"] = 4] = "Grandmother";
    EmergencyContactRelationship[EmergencyContactRelationship["ElderBrother"] = 5] = "ElderBrother";
    EmergencyContactRelationship[EmergencyContactRelationship["ElderSister"] = 6] = "ElderSister";
    EmergencyContactRelationship[EmergencyContactRelationship["Uncle"] = 7] = "Uncle";
    EmergencyContactRelationship[EmergencyContactRelationship["Aunt"] = 8] = "Aunt";
    EmergencyContactRelationship[EmergencyContactRelationship["Cousin"] = 9] = "Cousin";
    EmergencyContactRelationship[EmergencyContactRelationship["Child"] = 10] = "Child";
    EmergencyContactRelationship[EmergencyContactRelationship["Grandchild"] = 11] = "Grandchild";
    EmergencyContactRelationship[EmergencyContactRelationship["Husband"] = 12] = "Husband";
    EmergencyContactRelationship[EmergencyContactRelationship["Wife"] = 13] = "Wife";
    EmergencyContactRelationship[EmergencyContactRelationship["FatherInLaw"] = 14] = "FatherInLaw";
    EmergencyContactRelationship[EmergencyContactRelationship["MotherInLaw"] = 15] = "MotherInLaw";
    EmergencyContactRelationship[EmergencyContactRelationship["ElderBrotherInLaw"] = 16] = "ElderBrotherInLaw";
    EmergencyContactRelationship[EmergencyContactRelationship["ElderSisterInLaw"] = 17] = "ElderSisterInLaw";
    EmergencyContactRelationship[EmergencyContactRelationship["YoungerBrotherInLaw"] = 18] = "YoungerBrotherInLaw";
    EmergencyContactRelationship[EmergencyContactRelationship["YoungerSisterInLaw"] = 19] = "YoungerSisterInLaw";
    EmergencyContactRelationship[EmergencyContactRelationship["OtherRelative"] = 20] = "OtherRelative";
    EmergencyContactRelationship[EmergencyContactRelationship["Fiance"] = 21] = "Fiance";
    EmergencyContactRelationship[EmergencyContactRelationship["Acquaintance"] = 22] = "Acquaintance";
    EmergencyContactRelationship[EmergencyContactRelationship["Boss"] = 23] = "Boss";
    EmergencyContactRelationship[EmergencyContactRelationship["Employer"] = 24] = "Employer";
    EmergencyContactRelationship[EmergencyContactRelationship["Colleague"] = 25] = "Colleague";
    EmergencyContactRelationship[EmergencyContactRelationship["Subordinate"] = 26] = "Subordinate";
    EmergencyContactRelationship[EmergencyContactRelationship["Staff"] = 27] = "Staff";
    EmergencyContactRelationship[EmergencyContactRelationship["YoungerBrother"] = 28] = "YoungerBrother";
    EmergencyContactRelationship[EmergencyContactRelationship["YoungerSister"] = 29] = "YoungerSister";
    EmergencyContactRelationship[EmergencyContactRelationship["StaffRelative"] = 30] = "StaffRelative";
    EmergencyContactRelationship[EmergencyContactRelationship["StaffAcquaintance"] = 31] = "StaffAcquaintance";
    EmergencyContactRelationship[EmergencyContactRelationship["JointContractor"] = 32] = "JointContractor";
    EmergencyContactRelationship[EmergencyContactRelationship["JointContact"] = 33] = "JointContact";
    EmergencyContactRelationship[EmergencyContactRelationship["Nephew"] = 34] = "Nephew";
    EmergencyContactRelationship[EmergencyContactRelationship["Niece"] = 35] = "Niece";
    EmergencyContactRelationship[EmergencyContactRelationship["AdoptedChild"] = 36] = "AdoptedChild";
    EmergencyContactRelationship[EmergencyContactRelationship["ChildInLaw"] = 37] = "ChildInLaw";
    EmergencyContactRelationship[EmergencyContactRelationship["CompanyRepresentative"] = 39] = "CompanyRepresentative";
    EmergencyContactRelationship[EmergencyContactRelationship["Other"] = 999] = "Other";
})(EmergencyContactRelationship = exports.EmergencyContactRelationship || (exports.EmergencyContactRelationship = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[EmergencyContactRelationship.Self] = '本人',
        _a[EmergencyContactRelationship.Father] = '父',
        _a[EmergencyContactRelationship.Mother] = '母',
        _a[EmergencyContactRelationship.Grandfather] = '祖父',
        _a[EmergencyContactRelationship.Grandmother] = '祖母',
        _a[EmergencyContactRelationship.ElderBrother] = '兄',
        _a[EmergencyContactRelationship.ElderSister] = '姉',
        _a[EmergencyContactRelationship.Uncle] = 'おじ',
        _a[EmergencyContactRelationship.Aunt] = 'おば',
        _a[EmergencyContactRelationship.Cousin] = 'いとこ',
        _a[EmergencyContactRelationship.Child] = '子',
        _a[EmergencyContactRelationship.Grandchild] = '孫',
        _a[EmergencyContactRelationship.Husband] = '夫',
        _a[EmergencyContactRelationship.Wife] = '妻',
        _a[EmergencyContactRelationship.FatherInLaw] = '義父',
        _a[EmergencyContactRelationship.MotherInLaw] = '義母',
        _a[EmergencyContactRelationship.ElderBrotherInLaw] = '義兄',
        _a[EmergencyContactRelationship.ElderSisterInLaw] = '義姉',
        _a[EmergencyContactRelationship.YoungerBrotherInLaw] = '義弟',
        _a[EmergencyContactRelationship.YoungerSisterInLaw] = '義妹',
        _a[EmergencyContactRelationship.OtherRelative] = 'その他親族',
        _a[EmergencyContactRelationship.Fiance] = '婚約者',
        _a[EmergencyContactRelationship.Acquaintance] = '友人・知人',
        _a[EmergencyContactRelationship.Boss] = '上司',
        _a[EmergencyContactRelationship.Employer] = '雇用主',
        _a[EmergencyContactRelationship.Colleague] = '同僚',
        _a[EmergencyContactRelationship.Subordinate] = '部下',
        _a[EmergencyContactRelationship.Staff] = '社員',
        _a[EmergencyContactRelationship.YoungerBrother] = '弟',
        _a[EmergencyContactRelationship.YoungerSister] = '妹',
        _a[EmergencyContactRelationship.StaffRelative] = '社員の親族',
        _a[EmergencyContactRelationship.StaffAcquaintance] = '社員の知人',
        _a[EmergencyContactRelationship.JointContractor] = '連名契約者',
        _a[EmergencyContactRelationship.JointContact] = '連名連絡先',
        _a[EmergencyContactRelationship.Nephew] = '甥',
        _a[EmergencyContactRelationship.Niece] = '姪',
        _a[EmergencyContactRelationship.AdoptedChild] = '養子',
        _a[EmergencyContactRelationship.ChildInLaw] = '義子',
        _a[EmergencyContactRelationship.CompanyRepresentative] = '会社代表者',
        _a[EmergencyContactRelationship.Other] = 'その他',
        _a),
    en: (_b = {},
        _b[EmergencyContactRelationship.Self] = 'Self',
        _b[EmergencyContactRelationship.Father] = 'Father',
        _b[EmergencyContactRelationship.Mother] = 'Mother',
        _b[EmergencyContactRelationship.Grandfather] = 'Grandfather',
        _b[EmergencyContactRelationship.Grandmother] = 'Grandmother',
        _b[EmergencyContactRelationship.ElderBrother] = 'Elder-brother',
        _b[EmergencyContactRelationship.ElderSister] = 'Elder-sister',
        _b[EmergencyContactRelationship.Uncle] = 'Uncle',
        _b[EmergencyContactRelationship.Aunt] = 'Aunt',
        _b[EmergencyContactRelationship.Cousin] = 'Cousin',
        _b[EmergencyContactRelationship.Child] = 'Child',
        _b[EmergencyContactRelationship.Grandchild] = 'Grandchild',
        _b[EmergencyContactRelationship.Husband] = 'Husband',
        _b[EmergencyContactRelationship.Wife] = 'Wife',
        _b[EmergencyContactRelationship.FatherInLaw] = 'Father-in-law',
        _b[EmergencyContactRelationship.MotherInLaw] = 'Mother-in-law',
        _b[EmergencyContactRelationship.ElderBrotherInLaw] = 'Elder-brother-in-law',
        _b[EmergencyContactRelationship.ElderSisterInLaw] = 'Elder-sister-in-law',
        _b[EmergencyContactRelationship.YoungerBrotherInLaw] = 'Younger-brother-in-law',
        _b[EmergencyContactRelationship.YoungerSisterInLaw] = 'Younger-sister-in-law',
        _b[EmergencyContactRelationship.OtherRelative] = 'Other relative',
        _b[EmergencyContactRelationship.Fiance] = 'Fiance',
        _b[EmergencyContactRelationship.Acquaintance] = 'Acquaintance',
        _b[EmergencyContactRelationship.Boss] = 'Boss',
        _b[EmergencyContactRelationship.Employer] = 'Employer',
        _b[EmergencyContactRelationship.Colleague] = 'Colleague',
        _b[EmergencyContactRelationship.Subordinate] = 'Subordinate',
        _b[EmergencyContactRelationship.Staff] = 'Staff',
        _b[EmergencyContactRelationship.YoungerBrother] = 'Younger-brother',
        _b[EmergencyContactRelationship.YoungerSister] = 'Younger-sister',
        _b[EmergencyContactRelationship.StaffRelative] = 'Staff\'s relative',
        _b[EmergencyContactRelationship.StaffAcquaintance] = 'Staff acquaintance',
        _b[EmergencyContactRelationship.JointContractor] = 'Joint contractor',
        _b[EmergencyContactRelationship.JointContact] = 'Joint contact',
        _b[EmergencyContactRelationship.Nephew] = 'Nephew',
        _b[EmergencyContactRelationship.Niece] = 'Niece',
        _b[EmergencyContactRelationship.AdoptedChild] = 'Adopted child',
        _b[EmergencyContactRelationship.ChildInLaw] = 'Child-in-law',
        _b[EmergencyContactRelationship.CompanyRepresentative] = 'Company representative',
        _b[EmergencyContactRelationship.Other] = 'Other',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.emergencyContactRelationshipEncoder = generators_1.generateEncoder(translations);
exports.emergencyContactRelationshipDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=emergency_contact_relationship.js.map