"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.organizationTypeDecoder = exports.organizationTypeEncoder = exports.OrganizationType = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var OrganizationType;
(function (OrganizationType) {
    OrganizationType["Individual"] = "Individual";
    OrganizationType["Corporate"] = "Corporate";
})(OrganizationType = exports.OrganizationType || (exports.OrganizationType = {}));
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
var reverseTranslations = generators_1.generateReverseTranslations(translations);
// Edit constants name
exports.organizationTypeEncoder = generators_1.generateEncoder(translations);
exports.organizationTypeDecoder = generators_1.generateDecoder(reverseTranslations);
//# sourceMappingURL=organization_type.js.map