export declare enum ParkingContractFeeType {
    ContractRequiredFeeIncluded = "ContractRequiredFeeIncluded",
    ContractRequiredFeeNotIncluded = "ContractRequiredFeeNotIncluded"
}
export declare const parkingContractFeeTypeEncoder: (raw: ParkingContractFeeType, lang: import("./index").Language) => string;
export declare const parkingContractFeeTypeDecoder: (text: string, lang: import("./index").Language) => ParkingContractFeeType;
