export declare enum BusinessDay {
    Sunday = "Sunday",
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday"
}
export declare const businessDayEncoder: (raw: BusinessDay, lang: import("./index").Language) => string;
export declare const businessDayDecoder: (text: string, lang: import("./index").Language) => BusinessDay;
