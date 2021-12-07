export declare enum SiteControllerChannel {
    None = "None",
    Temairazu = "Temairazu",
    Tllincoln = "Tllincoln"
}
export declare const siteControllerChannelEncoder: (raw: SiteControllerChannel, lang: import("./index").Language) => string;
export declare const siteControllerChannelDecoder: (text: string, lang: import("./index").Language) => SiteControllerChannel;
