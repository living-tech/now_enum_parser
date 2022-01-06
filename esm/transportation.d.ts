export declare enum Transportation {
    Walk = "Walk",
    Car = "Car",
    Bus = "Bus"
}
export declare const transportationEncoder: (raw: Transportation, lang: import("./index").Language) => string;
export declare const transportationDecoder: (text: string, lang: import("./index").Language) => Transportation;
