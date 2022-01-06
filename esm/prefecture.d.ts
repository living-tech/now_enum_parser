export declare enum Prefecture {
    Hokkaido = "Hokkaido",
    Aomori = "Aomori",
    Iwate = "Iwate",
    Miyagi = "Miyagi",
    Akita = "Akita",
    Yamagata = "Yamagata",
    Fukushima = "Fukushima",
    Ibaraki = "Ibaraki",
    Tochigi = "Tochigi",
    Gunma = "Gunma",
    Saitama = "Saitama",
    Chiba = "Chiba",
    Tokyo = "Tokyo",
    Kanagawa = "Kanagawa",
    Niigata = "Niigata",
    Toyama = "Toyama",
    Ishikawa = "Ishikawa",
    Fukui = "Fukui",
    Yamanashi = "Yamanashi",
    Nagano = "Nagano",
    Gifu = "Gifu",
    Shizuoka = "Shizuoka",
    Aichi = "Aichi",
    Mie = "Mie",
    Shiga = "Shiga",
    Kyoto = "Kyoto",
    Osaka = "Osaka",
    Hyogo = "Hyogo",
    Nara = "Nara",
    Wakayama = "Wakayama",
    Tottori = "Tottori",
    Shimane = "Shimane",
    Okayama = "Okayama",
    Hiroshima = "Hiroshima",
    Yamaguchi = "Yamaguchi",
    Tokushima = "Tokushima",
    Kagawa = "Kagawa",
    Ehime = "Ehime",
    Kochi = "Kochi",
    Fukuoka = "Fukuoka",
    Saga = "Saga",
    Nagasaki = "Nagasaki",
    Kumamoto = "Kumamoto",
    Oita = "Oita",
    Miyazaki = "Miyazaki",
    Kagoshima = "Kagoshima",
    Okinawa = "Okinawa"
}
export declare const prefectureEncoder: (raw: Prefecture, lang: import("./index").Language) => string;
export declare const prefectureDecoder: (text: string, lang: import("./index").Language) => Prefecture;
