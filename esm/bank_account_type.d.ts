export declare enum BankAccountType {
    OrdinaryDeposit = "OrdinaryDeposit",
    CurrentAccount = "CurrentAccount"
}
export declare const bankAccountTypeEncoder: (raw: BankAccountType, lang: import("./index").Language) => string;
export declare const bankAccountTypeDecoder: (text: string, lang: import("./index").Language) => BankAccountType;
