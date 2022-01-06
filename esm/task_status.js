var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var TaskStatus;
(function (TaskStatus) {
    TaskStatus["Todo"] = "Todo";
    TaskStatus["InProgress"] = "InProgress";
    TaskStatus["Completed"] = "Completed";
})(TaskStatus || (TaskStatus = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[TaskStatus.Todo] = '未着手',
        _a[TaskStatus.InProgress] = '進行中',
        _a[TaskStatus.Completed] = '完了',
        _a),
    en: (_b = {},
        _b[TaskStatus.Todo] = 'Todo',
        _b[TaskStatus.InProgress] = 'In Progress',
        _b[TaskStatus.Completed] = 'Completed',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var taskStatusEncoder = generateEncoder(translations);
export var taskStatusDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=task_status.js.map