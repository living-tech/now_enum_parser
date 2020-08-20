export declare enum ContactBusinessType {
    Rent = "Rent",
    MonthlyRental = "MonthlyRental",
    Hotel = "Hotel",
    Ryokan = "Ryokan",
    GuestHouse = "GuestHouse",
    ShareHouse = "ShareHouse",
    Minpaku = "Minpaku",
    Other = "Other"
}
export declare const contactBussinessTypeEncoder: (raw: ContactBusinessType, lang: import(".").Language) => string;
export declare const contactBussinessTypeDecoder: (text: string, lang: import(".").Language) => ContactBusinessType;
