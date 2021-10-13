var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var OrganizationType;
(function (OrganizationType) {
    OrganizationType["Individual"] = "Individual";
    OrganizationType["Corporate"] = "Corporate";
})(OrganizationType || (OrganizationType = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[OrganizationType.Individual] = '個人',
        _a[OrganizationType.Corporate] = '法人',
        _a),
    en: (_b = {},
        _b[OrganizationType.Individual] = 'Individual',
        _b[OrganizationType.Corporate] = 'Corporate',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var organizationTypeEncoder = generateEncoder(translations);
export var organizationTypeDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=organization_type.js.map