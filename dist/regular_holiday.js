"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.businessDayDecoder = exports.businessDayEncoder = exports.RegularHoliday = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var RegularHoliday;
(function (RegularHoliday) {
    RegularHoliday["Sunday"] = "Sunday";
    RegularHoliday["Monday"] = "Monday";
    RegularHoliday["Tuesday"] = "Tuesday";
    RegularHoliday["Wednesday"] = "Wednesday";
    RegularHoliday["Thursday"] = "Thursday";
    RegularHoliday["Friday"] = "Friday";
    RegularHoliday["Saturday"] = "Saturday";
    RegularHoliday["NationalHoliday"] = "NationalHoliday";
})(RegularHoliday = exports.RegularHoliday || (exports.RegularHoliday = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[RegularHoliday.Sunday] = '日曜日',
        _a[RegularHoliday.Monday] = '月曜日',
        _a[RegularHoliday.Tuesday] = '火曜日',
        _a[RegularHoliday.Wednesday] = '水曜日',
        _a[RegularHoliday.Thursday] = '木曜日',
        _a[RegularHoliday.Friday] = '金曜日',
        _a[RegularHoliday.Saturday] = '土曜日',
        _a[RegularHoliday.Saturday] = '祝日',
        _a),
    en: (_b = {},
        _b[RegularHoliday.Sunday] = 'sunday',
        _b[RegularHoliday.Monday] = 'monday',
        _b[RegularHoliday.Tuesday] = 'tuesday',
        _b[RegularHoliday.Wednesday] = 'wednesday',
        _b[RegularHoliday.Thursday] = 'thursday',
        _b[RegularHoliday.Friday] = 'firday',
        _b[RegularHoliday.Saturday] = 'saturday',
        _b[RegularHoliday.Saturday] = 'nationalholiday',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.businessDayEncoder = generators_1.generateEncoder(translations);
exports.businessDayDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=regular_holiday.js.map