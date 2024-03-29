export declare enum ManageForm {
    SelfManagement = "Self Management",
    PartialConsignment = "Partial Consignment",
    FullConsignment = "Full Consignment"
}
export declare const manageFormEncoder: (raw: ManageForm, lang: import(".").Language) => string;
export declare const manageFormDecoder: (text: string, lang: import(".").Language) => ManageForm;
