var _a, _b;
import { generateReverseTranslations, generateEncoder, generateDecoder, } from './lib/generators';
// Edit enum name and contents
export var TransactionForm;
(function (TransactionForm) {
    TransactionForm["SellerLender"] = "SellerLender";
    TransactionForm["Deputy"] = "Deputy";
    TransactionForm["DedicatedExclusiveMedia"] = "DedicatedExclusiveMedia";
    TransactionForm["DedicatedMedia"] = "DedicatedMedia";
    TransactionForm["GeneralMedia"] = "GeneralMedia";
    TransactionForm["Media"] = "Media";
})(TransactionForm || (TransactionForm = {}));
// Edit contexts
var translations = {
    ja: (_a = {},
        _a[TransactionForm.SellerLender] = '売主/貸主',
        _a[TransactionForm.Deputy] = '代理',
        _a[TransactionForm.DedicatedExclusiveMedia] = '専属専任媒介',
        _a[TransactionForm.DedicatedMedia] = '専任媒介',
        _a[TransactionForm.GeneralMedia] = '一般媒介',
        _a[TransactionForm.Media] = '仲介',
        _a),
    en: (_b = {},
        _b[TransactionForm.SellerLender] = 'Seller / Lender',
        _b[TransactionForm.Deputy] = 'Deputy',
        _b[TransactionForm.DedicatedExclusiveMedia] = 'Dedicated exclusive media',
        _b[TransactionForm.DedicatedMedia] = 'Dedicated media',
        _b[TransactionForm.GeneralMedia] = 'General media',
        _b[TransactionForm.Media] = 'Media',
        _b),
};
// DO NOT EDIT
var reverseTranslations = generateReverseTranslations(translations);
// Edit constants name
export var transactionFormEncoder = generateEncoder(translations);
export var transactionFormDecoder = generateDecoder(reverseTranslations);
//# sourceMappingURL=transaction_form.js.map