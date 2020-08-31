export declare enum ListCardColumnLength {
    One = "One",
    Two = "Two"
}
export declare const listCardColumnLengthEncoder: (raw: ListCardColumnLength, lang: import(".").Language) => string;
export declare const listCardColumnLengthDecoder: (text: string, lang: import(".").Language) => ListCardColumnLength;
