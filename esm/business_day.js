var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var BusinessDay;
(function (BusinessDay) {
    BusinessDay["Sunday"] = "Sunday";
    BusinessDay["Monday"] = "Monday";
    BusinessDay["Tuesday"] = "Tuesday";
    BusinessDay["Wednesday"] = "Wednesday";
    BusinessDay["Thursday"] = "Thursday";
    BusinessDay["Friday"] = "Friday";
    BusinessDay["Saturday"] = "Saturday";
})(BusinessDay || (BusinessDay = {}));
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
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var businessDayEncoder = generateEncoder(translations);
export var businessDayDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=business_day.js.map