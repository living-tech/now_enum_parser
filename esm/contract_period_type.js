var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var ContractPeriodType;
(function (ContractPeriodType) {
    ContractPeriodType["DateType"] = "DateType";
    ContractPeriodType["PeriodType"] = "PeriodType";
})(ContractPeriodType || (ContractPeriodType = {}));
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
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var contractPeriodTypeEncoder = generateEncoder(translations);
export var contractPeriodTypeDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=contract_period_type.js.map