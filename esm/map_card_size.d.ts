export declare enum MapCardSize {
    Large = "Large",
    Small = "Small"
}
export declare const mapCardSizeEncoder: (raw: MapCardSize, lang: import("./index").Language) => string;
export declare const mapCardSizeDecoder: (text: string, lang: import("./index").Language) => MapCardSize;
