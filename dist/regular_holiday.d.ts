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
export declare const regularHolidayEncoder: (raw: RegularHoliday, lang: import(".").Language) => string;
export declare const regularHolidayDecoder: (text: string, lang: import(".").Language) => RegularHoliday;
