export declare enum ImageTarget {
    PrivateRoom = "PrivateRoom",
    ShareRoom = "ShareRoom",
    PrivateKitchen = "PrivateKitchen",
    ShareKitchen = "ShareKitchen",
    PrivateToilet = "PrivateToilet",
    ShareToilet = "ShareToilet",
    PrivateEntrance = "PrivateEntrance",
    ShareEntrance = "ShareEntrance",
    PrivateOther = "PrivateOther",
    ShareOther = "ShareOther",
    PrivateNone = "PrivateNone",
    ShareNone = "ShareNone",
    FloorPlan = "FloorPlan",
    KeyVisual = "KeyVisual"
}
export declare const imageTargetEncoder: (raw: ImageTarget, lang: import(".").Language) => string;
export declare const imageTargetDecoder: (text: string, lang: import(".").Language) => ImageTarget;
