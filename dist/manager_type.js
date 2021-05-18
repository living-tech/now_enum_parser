"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.managerTypeDecoder = exports.managerTypeEncoder = exports.ManagerType = void 0;
var generators_1 = require("./lib/generators");
var ManagerType;
(function (ManagerType) {
    ManagerType["Resident"] = "Resident";
    ManagerType["DayShift"] = "Day Shift";
    ManagerType["Patrol"] = "Patrol";
    ManagerType["None"] = "None";
    ManagerType["NonResident"] = "Non-resident";
})(ManagerType = exports.ManagerType || (exports.ManagerType = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[ManagerType.Resident] = '常駐',
        _a[ManagerType.DayShift] = '日勤',
        _a[ManagerType.Patrol] = '巡回',
        _a[ManagerType.None] = '無',
        _a[ManagerType.NonResident] = '非常駐',
        _a),
    en: (_b = {},
        _b[ManagerType.Resident] = 'Resident',
        _b[ManagerType.DayShift] = 'Day Shift',
        _b[ManagerType.Patrol] = 'Patrol',
        _b[ManagerType.None] = 'None',
        _b[ManagerType.NonResident] = 'Non-resident',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.managerTypeEncoder = generators_1.generateEncoder(translations);
exports.managerTypeDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=manager_type.js.map