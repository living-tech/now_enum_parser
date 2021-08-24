import { Translations } from './lib/interfaces';
export declare enum TaskStatus {
    Todo = "Todo",
    InProgress = "InProgress",
    Completed = "Completed"
}
export declare const taskStatusEncoder: (raw: Translations, lang: import(".").Language) => string;
export declare const taskStatusDecoder: (text: string, lang: import(".").Language) => Translations;
