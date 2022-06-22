export declare enum SearchType {
    SearchByCity = "SearchByCity",
    SearchByRailway = "SearchByRailway",
    SearchByTime = "SearchByTime",
    SearchByDistance = "SearchByDistance"
}
export declare const searchTypeEncoder: (raw: SearchType, lang: import(".").Language) => string;
export declare const searchTypeDecoder: (text: string, lang: import(".").Language) => SearchType;
