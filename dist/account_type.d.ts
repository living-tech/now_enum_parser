export declare enum AccountType {
    OrdinaryDeposit = "OrdinaryDeposit",
    CurrentAccount = "CurrentAccount"
}
export declare const AccountTypeEncoder: (raw: AccountType, lang: import(".").Language) => string;
export declare const AccountTypeDecoder: (text: string, lang: import(".").Language) => AccountType;
