var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var GuaranteeCompanyUsage;
(function (GuaranteeCompanyUsage) {
    GuaranteeCompanyUsage["Available"] = "Available";
    GuaranteeCompanyUsage["SubscriptionRequired"] = "SubscriptionRequired";
    GuaranteeCompanyUsage["NotRequired"] = "NotRequired";
})(GuaranteeCompanyUsage || (GuaranteeCompanyUsage = {}));
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
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var guaranteeCompanyUsageEncoder = generateEncoder(translations);
export var guaranteeCompanyUsageDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=guarantee_company_usage.js.map