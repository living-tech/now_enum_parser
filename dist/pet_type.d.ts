export declare enum PetType {
    SmallDog = "SmallDog",
    MiddleDog = "MiddleDog",
    LargeDog = "LargeDog",
    Cat = "Cat",
    Other = "Other"
}
export declare const petTypeEncoder: (raw: PetType, lang: import(".").Language) => string;
export declare const petTypeDecoder: (text: string, lang: import(".").Language) => PetType;
