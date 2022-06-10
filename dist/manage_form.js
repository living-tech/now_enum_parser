"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.manageFormDecoder = exports.manageFormEncoder = exports.ManageForm = void 0;
var generators_1 = require("./lib/generators");
var ManageForm;
(function (ManageForm) {
    ManageForm["SelfManagement"] = "Self Management";
    ManageForm["PartialConsignment"] = "Partial Consignment";
    ManageForm["FullConsignment"] = "Full Consignment";
})(ManageForm = exports.ManageForm || (exports.ManageForm = {}));
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
var reverseTranslations = (0, generators_1.generateReverseTranslations)(translations);
// Edit constants name
exports.manageFormEncoder = (0, generators_1.generateEncoder)(translations);
exports.manageFormDecoder = (0, generators_1.generateDecoder)(reverseTranslations);
//# sourceMappingURL=manage_form.js.map