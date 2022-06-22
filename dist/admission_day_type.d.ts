export declare enum AdmissionDayType {
    Soonest = "Soonest",
    Early = "Early",
    Middle = "Middle",
    Late = "Late"
}
export declare const admissionDayTypeEncoder: (raw: AdmissionDayType, lang: import(".").Language) => string;
export declare const admissionDayTypeDecoder: (text: string, lang: import(".").Language) => AdmissionDayType;
