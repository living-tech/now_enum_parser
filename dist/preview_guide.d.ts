export declare enum PreviewGuide {
    Direct = "Direct",
    Self = "Self",
    Unsupported = "Unsupported"
}
export declare const previewGuideEncoder: (raw: PreviewGuide, lang: import(".").Language) => string;
export declare const previewGuideDecoder: (text: string, lang: import(".").Language) => PreviewGuide;
