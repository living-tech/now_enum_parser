"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.occupationDecoder = exports.occupationEncoder = exports.Occupation = void 0;
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
        _b[Occupation.Specialist] = 'Professional and Technical Positions',
        _b[Occupation.Clerical] = 'Clerical Position',
        _b[Occupation.Sales] = 'Sales Position',
        _b[Occupation.Service] = 'Service',
        _b[Occupation.Security] = 'Security/Law Enforcement',
        _b[Occupation.Manufacturing] = 'Production Process',
        _b[Occupation.Transport] = 'Transportation & Machine Operation',
        _b[Occupation.Construction] = 'Construction & Mining',
        _b[Occupation.Carrying] = 'Transportation, Cleaning, Packaging & Related',
        _b[Occupation.Agriculture] = 'Agriculture, Forestry and Fisheries',
        _b[Occupation.Administrative] = 'Managerial Position',
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