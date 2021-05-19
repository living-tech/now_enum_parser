export declare enum MoveInM3 {
    Early = "Early",
    Mid = "Mid",
    Late = "Late"
}
export declare const moveInM3Encoder: (raw: MoveInM3, lang: import(".").Language) => string;
export declare const moveInM3Decoder: (text: string, lang: import(".").Language) => MoveInM3;
