"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.contractTypeDecoder = exports.contractTypeEncoder = exports.ContractType = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var ContractType;
(function (ContractType) {
    ContractType["FixedTerm"] = "FixedTerm";
    ContractType["Standard"] = "Standard";
    ContractType["Hotel"] = "Hotel";
    ContractType["Temporary"] = "Temporary";
})(ContractType = exports.ContractType || (exports.ContractType = {}));
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
var reverseTranslations = (0, generators_1.generateReverseTranslations)(translations);
// Edit constants name
exports.contractTypeEncoder = (0, generators_1.generateEncoder)(translations);
exports.contractTypeDecoder = (0, generators_1.generateDecoder)(reverseTranslations);
//# sourceMappingURL=contract_type.js.map