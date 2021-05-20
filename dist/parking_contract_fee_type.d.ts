export declare enum ParkingContractFeeType {
    ContractRequiredFeeIncluded = "ContractRequiredFeeIncluded",
    ContractRequiredFeeNotIncluded = "ContractRequiredFeeNotIncluded"
}
export declare const parkingContractFeeTypeEncoder: (raw: ParkingContractFeeType, lang: import(".").Language) => string;
export declare const parkingContractFeeTypeDecoder: (text: string, lang: import(".").Language) => ParkingContractFeeType;
