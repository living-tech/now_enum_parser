var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var SellStatus;
(function (SellStatus) {
    SellStatus["OnSale"] = "OnSale";
    SellStatus["SoldOut"] = "SoldOut";
    SellStatus["ContractSigned"] = "ContractSigned";
    SellStatus["Deleted"] = "Deleted";
})(SellStatus || (SellStatus = {}));
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
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var sellStatusEncoder = generateEncoder(translations);
export var sellStatusDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=sell_status.js.map