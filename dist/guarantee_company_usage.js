"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.guaranteeCompanyUsageDecoder = exports.guaranteeCompanyUsageEncoder = exports.GuaranteeCompanyUsage = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var GuaranteeCompanyUsage;
(function (GuaranteeCompanyUsage) {
    GuaranteeCompanyUsage["Available"] = "Available";
    GuaranteeCompanyUsage["SubscriptionRequired"] = "SubscriptionRequired";
    GuaranteeCompanyUsage["NotRequired"] = "NotRequired";
})(GuaranteeCompanyUsage = exports.GuaranteeCompanyUsage || (exports.GuaranteeCompanyUsage = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[GuaranteeCompanyUsage.Available] = '利用可',
        _a[GuaranteeCompanyUsage.SubscriptionRequired] = '加入要',
        _a[GuaranteeCompanyUsage.NotRequired] = '不要',
        _a),
    en: (_b = {},
        _b[GuaranteeCompanyUsage.Available] = 'Available',
        _b[GuaranteeCompanyUsage.SubscriptionRequired] = 'Subscription required',
        _b[GuaranteeCompanyUsage.NotRequired] = 'Not required',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.guaranteeCompanyUsageEncoder = generators_1.generateEncoder(translations);
exports.guaranteeCompanyUsageDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=guarantee_company_usage.js.map