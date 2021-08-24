import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum TaskStatus {
  Todo = 'Todo',
  InProgress = 'InProgress',
  Completed = 'Completed'
}

// Edit contexts
const translations: Translations = {
  ja: {
    [TaskStatus.Todo]: '未着手',
    [TaskStatus.InProgress]: '進行中',
    [TaskStatus.Completed]: '完了'
  },
  en: {
    [TaskStatus.Todo]: 'Todo',
    [TaskStatus.InProgress]: 'In Progress',
    [TaskStatus.Completed]: 'Completed'
  }
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const taskStatusEncoder = generateEncoder<Translations>(translations);
export const taskStatusDecoder = generateDecoder<Translations>(reverseTranslations);
