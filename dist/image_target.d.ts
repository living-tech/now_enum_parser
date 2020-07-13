export declare enum ImageTarget {
    Room = "Room",
    Kitchen = "Kitchen",
    Toilet = "Toilet",
    Entrance = "Entrance",
    Other = "Other"
}
export declare const imageTargetEncoder: (raw: ImageTarget, lang: import(".").Language) => string;
export declare const imageTargetDecoder: (text: string, lang: import(".").Language) => ImageTarget;
