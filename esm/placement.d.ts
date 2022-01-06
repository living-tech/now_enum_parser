export declare enum Placement {
    PlacementNg = "PlacementNg",
    PlacementOkReprintNg = "PlacementOkReprintNg",
    PlacementOkReprintOk = "PlacementOkReprintOk",
    PlacementOkReprintAllOk = "PlacementOkReprintAllOk"
}
export declare const placementEncoder: (raw: Placement, lang: import("./index").Language) => string;
export declare const placementDecoder: (text: string, lang: import("./index").Language) => Placement;
