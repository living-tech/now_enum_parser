"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.emergencyContactRelationshipDecoder = exports.emergencyContactRelationshipEncoder = exports.EmergencyContactRelationship = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var EmergencyContactRelationship;
(function (EmergencyContactRelationship) {
    EmergencyContactRelationship["Self"] = "0";
    EmergencyContactRelationship["Father"] = "1";
    EmergencyContactRelationship["Mother"] = "2";
    EmergencyContactRelationship["Grandfather"] = "3";
    EmergencyContactRelationship["Grandmother"] = "4";
    EmergencyContactRelationship["ElderBrother"] = "5";
    EmergencyContactRelationship["ElderSister"] = "6";
    EmergencyContactRelationship["Uncle"] = "7";
    EmergencyContactRelationship["Aunt"] = "8";
    EmergencyContactRelationship["Cousin"] = "9";
    EmergencyContactRelationship["Child"] = "10";
    EmergencyContactRelationship["Grandchild"] = "11";
    EmergencyContactRelationship["Husband"] = "12";
    EmergencyContactRelationship["Wife"] = "13";
    EmergencyContactRelationship["FatherInLaw"] = "14";
    EmergencyContactRelationship["MotherInLaw"] = "15";
    EmergencyContactRelationship["ElderBrotherInLaw"] = "16";
    EmergencyContactRelationship["ElderSisterInLaw"] = "17";
    EmergencyContactRelationship["YoungerBrotherInLaw"] = "18";
    EmergencyContactRelationship["YoungerSisterInLaw"] = "19";
    EmergencyContactRelationship["OtherRelative"] = "20";
    EmergencyContactRelationship["Fiance"] = "21";
    EmergencyContactRelationship["Acquaintance"] = "22";
    EmergencyContactRelationship["Boss"] = "23";
    EmergencyContactRelationship["Employer"] = "24";
    EmergencyContactRelationship["Colleague"] = "25";
    EmergencyContactRelationship["Subordinate"] = "26";
    EmergencyContactRelationship["Staff"] = "27";
    EmergencyContactRelationship["YoungerBrother"] = "28";
    EmergencyContactRelationship["YoungerSister"] = "29";
    EmergencyContactRelationship["StaffRelative"] = "30";
    EmergencyContactRelationship["StaffAcquaintance"] = "31";
    EmergencyContactRelationship["JointContractor"] = "32";
    EmergencyContactRelationship["JointContact"] = "33";
    EmergencyContactRelationship["Nephew"] = "34";
    EmergencyContactRelationship["Niece"] = "35";
    EmergencyContactRelationship["AdoptedChild"] = "36";
    EmergencyContactRelationship["ChildInLaw"] = "37";
    EmergencyContactRelationship["CompanyRepresentative"] = "39";
    EmergencyContactRelationship["Other"] = "999";
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