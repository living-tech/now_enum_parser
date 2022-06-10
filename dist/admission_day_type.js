"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.admissionDayTypeDecoder = exports.admissionDayTypeEncoder = exports.AdmissionDayType = void 0;
var generators_1 = require("./lib/generators");
var AdmissionDayType;
(function (AdmissionDayType) {
    AdmissionDayType["Soonest"] = "Soonest";
    AdmissionDayType["Early"] = "Early";
    AdmissionDayType["Middle"] = "Middle";
    AdmissionDayType["Late"] = "Late";
})(AdmissionDayType = exports.AdmissionDayType || (exports.AdmissionDayType = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[AdmissionDayType.Soonest] = '最短入居',
        _a[AdmissionDayType.Early] = '上旬',
        _a[AdmissionDayType.Middle] = '中旬',
        _a[AdmissionDayType.Late] = '下旬',
        _a),
    en: (_b = {},
        _b[AdmissionDayType.Soonest] = 'Soonest',
        _b[AdmissionDayType.Early] = 'Early',
        _b[AdmissionDayType.Middle] = 'Middle',
        _b[AdmissionDayType.Late] = 'Late',
        _b),
};
// DO NOT EDIT
var reverseTranslations = (0, generators_1.generateReverseTranslations)(translations);
// Edit constants name
exports.admissionDayTypeEncoder = (0, generators_1.generateEncoder)(translations);
exports.admissionDayTypeDecoder = (0, generators_1.generateDecoder)(reverseTranslations);
//# sourceMappingURL=admission_day_type.js.map