"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.businessDayDecoder = exports.businessDayEncoder = exports.BusinessDay = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var BusinessDay;
(function (BusinessDay) {
    BusinessDay["Sunday"] = "Sunday";
    BusinessDay["Monday"] = "Monday";
    BusinessDay["Tuesday"] = "Tuesday";
    BusinessDay["Wednesday"] = "Wednesday";
    BusinessDay["Thursday"] = "Thursday";
    BusinessDay["Friday"] = "Friday";
    BusinessDay["Saturday"] = "Saturday";
})(BusinessDay = exports.BusinessDay || (exports.BusinessDay = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[BusinessDay.Sunday] = '日曜日',
        _a[BusinessDay.Monday] = '月曜日',
        _a[BusinessDay.Tuesday] = '火曜日',
        _a[BusinessDay.Wednesday] = '水曜日',
        _a[BusinessDay.Thursday] = '木曜日',
        _a[BusinessDay.Friday] = '金曜日',
        _a[BusinessDay.Saturday] = '土曜日',
        _a),
    en: (_b = {},
        _b[BusinessDay.Sunday] = 'sunday',
        _b[BusinessDay.Monday] = 'monday',
        _b[BusinessDay.Tuesday] = 'tuesday',
        _b[BusinessDay.Wednesday] = 'wednesday',
        _b[BusinessDay.Thursday] = 'thursday',
        _b[BusinessDay.Friday] = 'firday',
        _b[BusinessDay.Saturday] = 'saturday',
        _b),
};
// DO NOT EDIT
var reverseTranslations = (0, generators_1.generateReverseTranslations)(translations);
// Edit constants name
exports.businessDayEncoder = (0, generators_1.generateEncoder)(translations);
exports.businessDayDecoder = (0, generators_1.generateDecoder)(reverseTranslations);
//# sourceMappingURL=business_day.js.map