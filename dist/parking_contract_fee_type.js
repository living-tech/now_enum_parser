"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.parkingContractFeeTypeDecoder = exports.parkingContractFeeTypeEncoder = exports.ParkingContractFeeType = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var ParkingContractFeeType;
(function (ParkingContractFeeType) {
    ParkingContractFeeType["ContractRequiredFeeIncluded"] = "ContractRequiredFeeIncluded";
    ParkingContractFeeType["ContractRequiredFeeNotIncluded"] = "ContractRequiredFeeNotIncluded";
})(ParkingContractFeeType = exports.ParkingContractFeeType || (exports.ParkingContractFeeType = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[ParkingContractFeeType.ContractRequiredFeeIncluded] = '契約必須(賃料に含む)',
        _a[ParkingContractFeeType.ContractRequiredFeeNotIncluded] = '契約必須（駐車場料金別)',
        _a),
    en: (_b = {},
        _b[ParkingContractFeeType.ContractRequiredFeeIncluded] = 'Contract required (included in rent)',
        _b[ParkingContractFeeType.ContractRequiredFeeNotIncluded] = 'Contract required (parking fee not included)',
        _b),
};
// DO NOT EDIT
var reverseTranslations = (0, generators_1.generateReverseTranslations)(translations);
// Edit constants name
exports.parkingContractFeeTypeEncoder = (0, generators_1.generateEncoder)(translations);
exports.parkingContractFeeTypeDecoder = (0, generators_1.generateDecoder)(reverseTranslations);
//# sourceMappingURL=parking_contract_fee_type.js.map