var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var ParkingContractFeeType;
(function (ParkingContractFeeType) {
    ParkingContractFeeType["ContractRequiredFeeIncluded"] = "ContractRequiredFeeIncluded";
    ParkingContractFeeType["ContractRequiredFeeNotIncluded"] = "ContractRequiredFeeNotIncluded";
})(ParkingContractFeeType || (ParkingContractFeeType = {}));
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
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var parkingContractFeeTypeEncoder = generateEncoder(translations);
export var parkingContractFeeTypeDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=parking_contract_fee_type.js.map