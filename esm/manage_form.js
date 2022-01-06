var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
export var ManageForm;
(function (ManageForm) {
    ManageForm["SelfManagement"] = "Self Management";
    ManageForm["PartialConsignment"] = "Partial Consignment";
    ManageForm["FullConsignment"] = "Full Consignment";
})(ManageForm || (ManageForm = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[ManageForm.SelfManagement] = '自主管理',
        _a[ManageForm.PartialConsignment] = '一部委託',
        _a[ManageForm.FullConsignment] = '全部委託',
        _a),
    en: (_b = {},
        _b[ManageForm.SelfManagement] = 'Self Management',
        _b[ManageForm.PartialConsignment] = 'Partial Consignment',
        _b[ManageForm.FullConsignment] = 'Full Consignment',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var manageFormEncoder = generateEncoder(translations);
export var manageFormDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=manage_form.js.map