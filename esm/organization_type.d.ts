export declare enum OrganizationType {
    Individual = "Individual",
    Corporate = "Corporate"
}
export declare const organizationTypeEncoder: (raw: OrganizationType, lang: import("./index").Language) => string;
export declare const organizationTypeDecoder: (text: string, lang: import("./index").Language) => OrganizationType;
