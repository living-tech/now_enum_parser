export declare enum ImageClassification {
    Private = "Private",
    Share = "Share"
}
export declare const imageClassificationEncoder: (raw: ImageClassification, lang: import(".").Language) => string;
export declare const imageClassificationDecoder: (text: string, lang: import(".").Language) => ImageClassification;
