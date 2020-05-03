export declare enum BankAccountType {
    OrdinaryDeposit = "OrdinaryDeposit",
    CurrentAccount = "CurrentAccount"
}
export declare const bankAccountTypeEncoder: (raw: BankAccountType, lang: import(".").Language) => string;
export declare const bankAccountTypeDecoder: (text: string, lang: import(".").Language) => BankAccountType;
