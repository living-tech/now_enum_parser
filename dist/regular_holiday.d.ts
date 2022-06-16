export declare enum RegularHoliday {
    Sunday = "Sunday",
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
    NationalHoliday = "NationalHoliday"
}
export declare const businessDayEncoder: (raw: RegularHoliday, lang: import(".").Language) => string;
export declare const businessDayDecoder: (text: string, lang: import(".").Language) => RegularHoliday;
