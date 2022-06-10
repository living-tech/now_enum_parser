"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskStatusDecoder = exports.taskStatusEncoder = exports.TaskStatus = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["Todo"] = "Todo";
    TaskStatus["InProgress"] = "InProgress";
    TaskStatus["Completed"] = "Completed";
})(TaskStatus = exports.TaskStatus || (exports.TaskStatus = {}));
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
var reverseTranslations = (0, generators_1.generateReverseTranslations)(translations);
// Edit constants name
exports.taskStatusEncoder = (0, generators_1.generateEncoder)(translations);
exports.taskStatusDecoder = (0, generators_1.generateDecoder)(reverseTranslations);
//# sourceMappingURL=task_status.js.map