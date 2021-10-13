export declare enum StaffCommentType {
    PropertyInformation = "PropertyInformation",
    StaffInformation = "StaffInformation",
    CompanyInformation = "CompanyInformation"
}
export declare const staffCommentTypeEncoder: (raw: StaffCommentType, lang: import("./index").Language) => string;
export declare const staffCommentTypeDecoder: (text: string, lang: import("./index").Language) => StaffCommentType;
