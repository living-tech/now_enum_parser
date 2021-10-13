export declare enum ListCardColumnLength {
    One = "One",
    Two = "Two"
}
export declare const listCardColumnLengthEncoder: (raw: ListCardColumnLength, lang: import("./index").Language) => string;
export declare const listCardColumnLengthDecoder: (text: string, lang: import("./index").Language) => ListCardColumnLength;
