export declare enum OrdinanceDesignatedCity {
    Sapporo = "Sapporo",
    Sendai = "Sendai",
    Saitama = "Saitama",
    Chiba = "Chiba",
    Kawasaki = "Kawasaki",
    Yokohama = "Yokohama",
    Sagamihara = "Sagamihara",
    Niigata = "Niigata",
    Shizuoka = "Shizuoka",
    Hamamatsu = "Hamamatsu",
    Nagoya = "Nagoya",
    Kyoto = "Kyoto",
    Osaka = "Osaka",
    Sakai = "Sakai",
    Kobe = "Kobe",
    Okayama = "Okayama",
    Hiroshima = "Hiroshima",
    Kitakyushu = "Kitakyushu",
    Fukuoka = "Fukuoka",
    Kumamoto = "Kumamoto"
}
export declare const ordinanceDesignatedCityEncoder: (raw: OrdinanceDesignatedCity, lang: import(".").Language) => string;
export declare const ordinanceDesignatedCityDecoder: (text: string, lang: import(".").Language) => OrdinanceDesignatedCity;
