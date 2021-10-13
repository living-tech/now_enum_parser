export declare enum Orientation {
    North = "North",
    Northeast = "Northeast",
    East = "East",
    Southeast = "Southeast",
    South = "South",
    Southwest = "Southwest",
    West = "West",
    Northwest = "Northwest"
}
export declare const orientationEncoder: (raw: Orientation, lang: import("./index").Language) => string;
export declare const orientationDecoder: (text: string, lang: import("./index").Language) => Orientation;
