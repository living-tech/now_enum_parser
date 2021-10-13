var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var ContractType;
(function (ContractType) {
    ContractType["FixedTerm"] = "FixedTerm";
    ContractType["Standard"] = "Standard";
    ContractType["Hotel"] = "Hotel";
    ContractType["Temporary"] = "Temporary";
})(ContractType || (ContractType = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[ContractType.FixedTerm] = '定期借家契約',
        _a[ContractType.Standard] = '普通借家契約',
        _a[ContractType.Hotel] = '旅館業',
        _a[ContractType.Temporary] = '一時利用',
        _a),
    en: (_b = {},
        _b[ContractType.FixedTerm] = 'fixed term lease contract',
        _b[ContractType.Standard] = 'standard lease contract',
        _b[ContractType.Hotel] = 'hotel',
        _b[ContractType.Temporary] = 'temporary use',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var contractTypeEncoder = generateEncoder(translations);
export var contractTypeDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=contract_type.js.map