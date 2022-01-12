export declare enum SignInProvider {
    Password = "Password",
    Phone = "Phone"
}
export declare const signInProviderEncoder: (raw: SignInProvider, lang: import(".").Language) => string;
export declare const signInProviderDecoder: (text: string, lang: import(".").Language) => SignInProvider;
