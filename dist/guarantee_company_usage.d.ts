export declare enum GuaranteeCompanyUsage {
    Available = "Available",
    SubscriptionRequired = "SubscriptionRequired",
    NotRequired = "NotRequired"
}
export declare const guaranteeCompanyUsageEncoder: (raw: GuaranteeCompanyUsage, lang: import(".").Language) => string;
export declare const guaranteeCompanyUsageDecoder: (text: string, lang: import(".").Language) => GuaranteeCompanyUsage;
