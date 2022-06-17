import { Translations } from './lib/interfaces';
export declare enum AdmissionDayType {
    Soonest = "Soonest",
    Early = "Early",
    Middle = "Middle",
    Late = "Late"
}
export declare const admissionDayTypeEncoder: (raw: Translations, lang: import(".").Language) => string;
export declare const admissionDayTypeDecoder: (text: string, lang: import(".").Language) => Translations;
