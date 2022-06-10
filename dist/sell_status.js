"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.sellStatusDecoder = exports.sellStatusEncoder = exports.SellStatus = void 0;
var generators_1 = require("./lib/generators");
// Edit enum name and contents
var SellStatus;
(function (SellStatus) {
    SellStatus["OnSale"] = "OnSale";
    SellStatus["SoldOut"] = "SoldOut";
    SellStatus["ContractSigned"] = "ContractSigned";
    SellStatus["Deleted"] = "Deleted";
})(SellStatus = exports.SellStatus || (exports.SellStatus = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[SellStatus.OnSale] = '空有/売出中',
        _a[SellStatus.SoldOut] = '空無/売止',
        _a[SellStatus.ContractSigned] = '成約',
        _a[SellStatus.Deleted] = '削除',
        _a),
    en: (_b = {},
        _b[SellStatus.OnSale] = 'On Sale',
        _b[SellStatus.SoldOut] = 'Sold Out',
        _b[SellStatus.ContractSigned] = 'Contract Signed',
        _b[SellStatus.Deleted] = 'Deleted',
        _b),
};
// DO NOT EDIT
var reverseTranslations = (0, generators_1.generateReverseTranslations)(translations);
// Edit constants name
exports.sellStatusEncoder = (0, generators_1.generateEncoder)(translations);
exports.sellStatusDecoder = (0, generators_1.generateDecoder)(reverseTranslations);
//# sourceMappingURL=sell_status.js.map