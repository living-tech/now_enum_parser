"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.contractPeriodTypeDecoder = exports.contractPeriodTypeEncoder = exports.ContractPeriodType = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var ContractPeriodType;
(function (ContractPeriodType) {
    ContractPeriodType["DateType"] = "DateType";
    ContractPeriodType["PeriodType"] = "PeriodType";
})(ContractPeriodType = exports.ContractPeriodType || (exports.ContractPeriodType = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[ContractPeriodType.DateType] = '期限表示',
        _a[ContractPeriodType.PeriodType] = '期間表示',
        _a),
    en: (_b = {},
        _b[ContractPeriodType.DateType] = 'Date Type',
        _b[ContractPeriodType.PeriodType] = 'Period Type',
        _b),
};
// DO NOT EDIT
var reverseTranslations = (0, generators_1.generateReverseTranslations)(translations);
// Edit constants name
exports.contractPeriodTypeEncoder = (0, generators_1.generateEncoder)(translations);
exports.contractPeriodTypeDecoder = (0, generators_1.generateDecoder)(reverseTranslations);
//# sourceMappingURL=contract_period_type.js.map