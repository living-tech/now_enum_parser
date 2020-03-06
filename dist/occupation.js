"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var Occupation;
(function (Occupation) {
    Occupation["Specialist"] = "Specialist";
    Occupation["Clerical"] = "Clerical";
    Occupation["Sales"] = "Sales";
    Occupation["Service"] = "Service";
    Occupation["Security"] = "Security";
    Occupation["Manufacturing"] = "Manufacturing";
    Occupation["Transport"] = "Transport";
    Occupation["Construction"] = "Construction";
    Occupation["Carrying"] = "Carrying";
    Occupation["Agriculture"] = "Agriculture";
    Occupation["Administrative"] = "Administrative";
    Occupation["Other"] = "Other";
    Occupation["None"] = "None";
})(Occupation = exports.Occupation || (exports.Occupation = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[Occupation.Specialist] = '専門的･技術的職',
        _a[Occupation.Clerical] = '事務職',
        _a[Occupation.Sales] = '販売職',
        _a[Occupation.Service] = 'サービス職',
        _a[Occupation.Security] = '保安職',
        _a[Occupation.Manufacturing] = '生産工程職',
        _a[Occupation.Transport] = '輸送・機械運転職',
        _a[Occupation.Construction] = '建設・採掘職',
        _a[Occupation.Carrying] = '運搬・清掃・包装等職',
        _a[Occupation.Agriculture] = '農林漁業職',
        _a[Occupation.Administrative] = '管理職',
        _a[Occupation.Other] = 'その他',
        _a[Occupation.None] = 'なし',
        _a),
    en: (_b = {},
        _b[Occupation.Specialist] = 'Specialist',
        _b[Occupation.Clerical] = 'Clerical',
        _b[Occupation.Sales] = 'Sales',
        _b[Occupation.Service] = 'Service',
        _b[Occupation.Security] = 'Security',
        _b[Occupation.Manufacturing] = 'Manufacturing',
        _b[Occupation.Transport] = 'Transport',
        _b[Occupation.Construction] = 'Construction',
        _b[Occupation.Carrying] = 'Carrying',
        _b[Occupation.Agriculture] = 'Agriculture',
        _b[Occupation.Administrative] = 'Administrative',
        _b[Occupation.Other] = 'Other',
        _b[Occupation.None] = 'None',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.occupationEncoder = generators_1.generateEncoder(translations);
exports.occupationDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=occupation.js.map