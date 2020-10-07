import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum DesireRentChargeRange {
  ThirtyThousandOrLess = 'ThirtyThousandOrLess',
  ThirtyThousandToThirtyFiveThousand = 'ThirtyThousandToThirtyFiveThousand',
  ThirtyFiveThousandToFourtyThousand = 'ThirtyFiveThousandToFourtyThousand',
  FourtyThousandToFourtyFiveThousand = 'FourtyThousandToFourtyFiveThousand',
  FourtyFiveThousandToFiftyThousand = 'FourtyFiveThousandToFiftyThousand',
  FiftyThousandToFiftyFiveThousand = 'FiftyThousandToFiftyFiveThousand',
  FiftyFiveThousandToSixtyThousand = 'FiftyFiveThousandToSixtyThousand',
  SixtyThousandToSixtyFiveThousand = 'SixtyThousandToSixtyFiveThousand',
  SixtyFiveThousandToSeventyThousand = 'SixtyFiveThousandToSeventyThousand',
  SeventyThousandToSeventyFiveThousand = 'SeventyThousandToSeventyFiveThousand',
  SeventyFiveThousandToEightyThousand = 'SeventyFiveThousandToEightyThousand',
  EightyThousandToEightyFiveThousand = 'EightyThousandToEightyFiveThousand',
  EightyFiveThousandToNinetyThousand = 'EightyFiveThousandToNinetyThousand',
  NinetyThousandToNinetyFiveThousand = 'NinetyThousandToNinetyFiveThousand',
  NinetyFiveThousandToOneHundredThousand = 'NinetyFiveThousandToOneHundredThousand',
  OneHundredThousandToOneHundredFiveThousand = 'OneHundredThousandToOneHundredFiveThousand',
  OneHundredFiveThousandToOneHundredTenThousand = 'OneHundredFiveThousandToOneHundredTenThousand',
  OneHundredTenThousandToOneHundredTenFiveThousand = 'OneHundredTenThousandToOneHundredTenFiveThousand',
  OneHundredTenFiveThousandToOneHundredTwentyThousand = 'OneHundredTenFiveThousandToOneHundredTwentyThousand',
  OneHundredTwentyThousandToOneHundredTwentyFiveThousand = 'OneHundredTwentyThousandToOneHundredTwentyFiveThousand',
  OneHundredTwentyFiveThousandToOneHundredThirtyThousand = 'OneHundredTwentyFiveThousandToOneHundredThirtyThousand',
  OneHundredThirtyThousandToOneHundredThirtyFiveThousand = 'OneHundredThirtyThousandToOneHundredThirtyFiveThousand',
  OneHundredThirtyFiveThousandToOneHundredFourtyThousand = 'OneHundredThirtyFiveThousandToOneHundredFourtyThousand',
  OneHundredFourtyThousandToOneHundredFourtyFiveThousand = 'OneHundredFourtyThousandToOneHundredFourtyFiveThousand',
  OneHundredFourtyFiveThousandToOneHundredFiftyThousand = 'OneHundredFourtyFiveThousandToOneHundredFiftyThousand',
  OneHundredFiftyThousandToOneHundredFiftyFiveThousand = 'OneHundredFiftyThousandToOneHundredFiftyFiveThousand',
  OneHundredFiftyFiveThousandToOneHundredSixtyThousand = 'OneHundredFiftyFiveThousandToOneHundredSixtyThousand',
  OneHundredSixtyThousandToOneHundredSixtyFiveThousand = 'OneHundredSixtyThousandToOneHundredSixtyFiveThousand',
  OneHundredSixtyFiveThousandToOneHundredSeventyThousand = 'OneHundredSixtyFiveThousandToOneHundredSeventyThousand',
  OneHundredSeventyThousandToOneHundredSeventyFiveThousand = 'OneHundredSeventyThousandToOneHundredSeventyFiveThousand',
  OneHundredSeventyFiveThousandToOneHundredEightyThousand = 'OneHundredSeventyFiveThousandToOneHundredEightyThousand',
  OneHundredEightyThousandToOneHundredEightyFiveThousand = 'OneHundredEightyThousandToOneHundredEightyFiveThousand',
  OneHundredEightyFiveThousandToOneHundredNinetyThousand = 'OneHundredEightyFiveThousandToOneHundredNinetyThousand',
  OneHundredNinetyThousandToOneHundredNinetyFiveThousand = 'OneHundredNinetyThousandToOneHundredNinetyFiveThousand',
  OneHundredNinetyFiveThousandToTwentyHundredThousand = 'OneHundredNinetyFiveThousandToTwentyHundredThousand',
  TwentyHundredThousandToTwentyHundredTenThousand = 'TwentyHundredThousandToTwentyHundredTenThousand',
  TwentyHundredTenThousandToTwentyHundredTwentyThousand = 'TwentyHundredTenThousandToTwentyHundredTwentyThousand',
  TwentyHundredTwentyThousandToTwentyHundredThirtyThousand = 'TwentyHundredTwentyThousandToTwentyHundredThirtyThousand',
  TwentyHundredThirtyThousandToTwentyHundredFourtyThousand = 'TwentyHundredThirtyThousandToTwentyHundredFourtyThousand',
  TwentyHundredFourtyThousandToTwentyHundredFiftyThousand = 'TwentyHundredFourtyThousandToTwentyHundredFiftyThousand',
  TwentyHundredFiftyThousandToTwentyHundredSixtyThousand = 'TwentyHundredFiftyThousandToTwentyHundredSixtyThousand',
  TwentyHundredSixtyThousandToTwentyHundredSeventyThousand = 'TwentyHundredSixtyThousandToTwentyHundredSeventyThousand',
  TwentyHundredSeventyThousandToTwentyHundredEightyThousand = 'TwentyHundredSeventyThousandToTwentyHundredEightyThousand',
  TwentyHundredEightyThousandToTwentyHundredNinetyThousand = 'TwentyHundredEightyThousandToTwentyHundredNinetyThousand',
  TwentyHundredNinetyThousandToThirtyHundredThousand = 'TwentyHundredNinetyThousandToThirtyHundredThousand',
  ThirtyHundredThousandToThirtyHundredFiftyThousand = 'ThirtyHundredThousandToThirtyHundredFiftyThousand',
  ThirtyHundredFiftyThousandToFourtyHundredThousand = 'ThirtyHundredFiftyThousandToFourtyHundredThousand',
  FourtyHundredThousandToFourtyHundredFiftyThousand = 'FourtyHundredThousandToFourtyHundredFiftyThousand',
  FourtyHundredFiftyThousandToFiftyHundredThousand = 'FourtyHundredFiftyThousandToFiftyHundredThousand',
  FiftyHundredThousandToOneMillion = 'FiftyHundredThousandToOneMillion',
  OneMillionOrMore = 'OneMillionOrMore',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [DesireRentChargeRange.ThirtyThousandOrLess]: '3万円以下',
    [DesireRentChargeRange.ThirtyThousandToThirtyFiveThousand]:
      '3万円以上～3.5万円以下',
    [DesireRentChargeRange.ThirtyFiveThousandToFourtyThousand]:
      '3.5万円以上～4万円以下',
    [DesireRentChargeRange.FourtyThousandToFourtyFiveThousand]:
      '4万円以上～4.5万円以下',
    [DesireRentChargeRange.FourtyFiveThousandToFiftyThousand]:
      '4.5万円以上～5万円以下',
    [DesireRentChargeRange.FiftyThousandToFiftyFiveThousand]:
      '5万円以上～5.5万円以下',
    [DesireRentChargeRange.FiftyFiveThousandToSixtyThousand]:
      '5.5万円以上～6万円以下',
    [DesireRentChargeRange.SixtyThousandToSixtyFiveThousand]:
      '6万円以上～6.5万円以下',
    [DesireRentChargeRange.SixtyFiveThousandToSeventyThousand]:
      '6.5万円以上～7万円以下',
    [DesireRentChargeRange.SeventyThousandToSeventyFiveThousand]:
      '7万円以上～7.5万円以下',
    [DesireRentChargeRange.SeventyFiveThousandToEightyThousand]:
      '7.5万円以上～8万円以下',
    [DesireRentChargeRange.EightyThousandToEightyFiveThousand]:
      '8万円以上～8.5万円以下',
    [DesireRentChargeRange.EightyFiveThousandToNinetyThousand]:
      '8.5万円以上～9万円以下',
    [DesireRentChargeRange.NinetyThousandToNinetyFiveThousand]:
      '9万円以上～9.5万円以下',
    [DesireRentChargeRange.NinetyFiveThousandToOneHundredThousand]:
      '9.5万円以上～10万円以下',
    [DesireRentChargeRange.OneHundredThousandToOneHundredFiveThousand]:
      '10万円以上～10.5万円以下',
    [DesireRentChargeRange.OneHundredFiveThousandToOneHundredTenThousand]:
      '10.5万円以上～11万円以下',
    [DesireRentChargeRange.OneHundredTenThousandToOneHundredTenFiveThousand]:
      '11万円以上～11.5万円以下',
    [DesireRentChargeRange.OneHundredTenFiveThousandToOneHundredTwentyThousand]:
      '11.5万円以上～12万円以下',
    [DesireRentChargeRange.OneHundredTwentyThousandToOneHundredTwentyFiveThousand]:
      '12万円以上～12.5万円以下',
    [DesireRentChargeRange.OneHundredTwentyFiveThousandToOneHundredThirtyThousand]:
      '12.5万円以上～13万円以下',
    [DesireRentChargeRange.OneHundredThirtyThousandToOneHundredThirtyFiveThousand]:
      '13万円以上～13.5万円以下',
    [DesireRentChargeRange.OneHundredThirtyFiveThousandToOneHundredFourtyThousand]:
      '13.5万円以上～14万円以下',
    [DesireRentChargeRange.OneHundredFourtyThousandToOneHundredFourtyFiveThousand]:
      '14万円以上～14.5万円以下',
    [DesireRentChargeRange.OneHundredFourtyFiveThousandToOneHundredFiftyThousand]:
      '14.5万円以上～15万円以下',
    [DesireRentChargeRange.OneHundredFiftyThousandToOneHundredFiftyFiveThousand]:
      '15万円以上～15.5万円以下',
    [DesireRentChargeRange.OneHundredFiftyFiveThousandToOneHundredSixtyThousand]:
      '15.5万円以上～16万円以下',
    [DesireRentChargeRange.OneHundredSixtyThousandToOneHundredSixtyFiveThousand]:
      '16万円以上～16.5万円以下',
    [DesireRentChargeRange.OneHundredSixtyFiveThousandToOneHundredSeventyThousand]:
      '16.5万円以上～17万円以下',
    [DesireRentChargeRange.OneHundredSeventyThousandToOneHundredSeventyFiveThousand]:
      '17万円以上～17.5万円以下',
    [DesireRentChargeRange.OneHundredSeventyFiveThousandToOneHundredEightyThousand]:
      '17.5万円以上～18万円以下',
    [DesireRentChargeRange.OneHundredEightyThousandToOneHundredEightyFiveThousand]:
      '18万円以上～18.5万円以下',
    [DesireRentChargeRange.OneHundredEightyFiveThousandToOneHundredNinetyThousand]:
      '18.5万円以上～19万円以下',
    [DesireRentChargeRange.OneHundredNinetyThousandToOneHundredNinetyFiveThousand]:
      '19万円以上～19.5万円以下',
    [DesireRentChargeRange.OneHundredNinetyFiveThousandToTwentyHundredThousand]:
      '19.5万円以上～20万円以下',
    [DesireRentChargeRange.TwentyHundredThousandToTwentyHundredTenThousand]:
      '20万円以上～21万円以下',
    [DesireRentChargeRange.TwentyHundredTenThousandToTwentyHundredTwentyThousand]:
      '21万円以上～22万円以下',
    [DesireRentChargeRange.TwentyHundredTwentyThousandToTwentyHundredThirtyThousand]:
      '22万円以上～23万円以下',
    [DesireRentChargeRange.TwentyHundredThirtyThousandToTwentyHundredFourtyThousand]:
      '23万円以上～24万円以下',
    [DesireRentChargeRange.TwentyHundredFourtyThousandToTwentyHundredFiftyThousand]:
      '24万円以上～25万円以下',
    [DesireRentChargeRange.TwentyHundredFiftyThousandToTwentyHundredSixtyThousand]:
      '25万円以上～26万円以下',
    [DesireRentChargeRange.TwentyHundredSixtyThousandToTwentyHundredSeventyThousand]:
      '26万円以上～27万円以下',
    [DesireRentChargeRange.TwentyHundredSeventyThousandToTwentyHundredEightyThousand]:
      '27万円以上～28万円以下',
    [DesireRentChargeRange.TwentyHundredEightyThousandToTwentyHundredNinetyThousand]:
      '28万円以上～29万円以下',
    [DesireRentChargeRange.TwentyHundredNinetyThousandToThirtyHundredThousand]:
      '29万円以上～30万円以下',
    [DesireRentChargeRange.ThirtyHundredThousandToThirtyHundredFiftyThousand]:
      '30万円以上～35万円以下',
    [DesireRentChargeRange.ThirtyHundredFiftyThousandToFourtyHundredThousand]:
      '35万円以上～40万円以下',
    [DesireRentChargeRange.FourtyHundredThousandToFourtyHundredFiftyThousand]:
      '40万円以上～45万円以下',
    [DesireRentChargeRange.FourtyHundredFiftyThousandToFiftyHundredThousand]:
      '45万円以上～50万円以下',
    [DesireRentChargeRange.FiftyHundredThousandToOneMillion]:
      '50万円以上～100万円以下',
    [DesireRentChargeRange.OneMillionOrMore]: '100万円以上',
  },
  en: {
    [DesireRentChargeRange.ThirtyThousandOrLess]: 'thirty thousand or less yen',
    [DesireRentChargeRange.ThirtyThousandToThirtyFiveThousand]:
      'thirty thousand to thirty five thousand yen',
    [DesireRentChargeRange.ThirtyFiveThousandToFourtyThousand]:
      'thirty five thousand to fourty thousand yen',
    [DesireRentChargeRange.FourtyThousandToFourtyFiveThousand]:
      'fourty thousand to fourty five thousand yen',
    [DesireRentChargeRange.FourtyFiveThousandToFiftyThousand]:
      'fourty five thousand to fifty thousand yen',
    [DesireRentChargeRange.FiftyThousandToFiftyFiveThousand]:
      'fifty thousand to fifty five thousand yen',
    [DesireRentChargeRange.FiftyFiveThousandToSixtyThousand]:
      'fifty five thousand to sixty thousand yen',
    [DesireRentChargeRange.SixtyThousandToSixtyFiveThousand]:
      'sixty thousand to sixty five thousand yen',
    [DesireRentChargeRange.SixtyFiveThousandToSeventyThousand]:
      'sixty five thousand to seventy thousand yen',
    [DesireRentChargeRange.SeventyThousandToSeventyFiveThousand]:
      'seventy thousand to seventy five thousand yen',
    [DesireRentChargeRange.SeventyFiveThousandToEightyThousand]:
      'seventy five thousand to eighty thousand yen',
    [DesireRentChargeRange.EightyThousandToEightyFiveThousand]:
      'eighty thousand to eighty five thousand yen',
    [DesireRentChargeRange.EightyFiveThousandToNinetyThousand]:
      'eighty five thousand to ninety thousand yen',
    [DesireRentChargeRange.NinetyThousandToNinetyFiveThousand]:
      'ninety thousand to ninety five thousand yen',
    [DesireRentChargeRange.NinetyFiveThousandToOneHundredThousand]:
      'ninety five thousand to one hundred thousand yen',
    [DesireRentChargeRange.OneHundredThousandToOneHundredFiveThousand]:
      'one hundred thousand to one hundred five thousand yen',
    [DesireRentChargeRange.OneHundredFiveThousandToOneHundredTenThousand]:
      'one hundred five thousand to one hundred ten thousand yen',
    [DesireRentChargeRange.OneHundredTenThousandToOneHundredTenFiveThousand]:
      'one hundred ten thousand to one hundred ten five thousand yen',
    [DesireRentChargeRange.OneHundredTenFiveThousandToOneHundredTwentyThousand]:
      'one hundred ten five thousand to one hundred twenty thousand yen',
    [DesireRentChargeRange.OneHundredTwentyThousandToOneHundredTwentyFiveThousand]:
      'one hundred twenty thousand to one hundred twenty five thousand yen',
    [DesireRentChargeRange.OneHundredTwentyFiveThousandToOneHundredThirtyThousand]:
      'one hundred twenty five thousand to one hundred thirty thousand yen',
    [DesireRentChargeRange.OneHundredThirtyThousandToOneHundredThirtyFiveThousand]:
      'one hundred thirty thousand to one hundred thirty five thousand yen',
    [DesireRentChargeRange.OneHundredThirtyFiveThousandToOneHundredFourtyThousand]:
      'one hundred thirty five thousand to one hundred fourty thousand yen',
    [DesireRentChargeRange.OneHundredFourtyThousandToOneHundredFourtyFiveThousand]:
      'one hundred fourty thousand to one hundred fourty five thousand yen',
    [DesireRentChargeRange.OneHundredFourtyFiveThousandToOneHundredFiftyThousand]:
      'one hundred fourty five thousand to one hundred fifty thousand yen',
    [DesireRentChargeRange.OneHundredFiftyThousandToOneHundredFiftyFiveThousand]:
      'one hundred fifty thousand to one hundred fifty five thousand yen',
    [DesireRentChargeRange.OneHundredFiftyFiveThousandToOneHundredSixtyThousand]:
      'one hundred fifty five thousand to one hundred sixty thousand yen',
    [DesireRentChargeRange.OneHundredSixtyThousandToOneHundredSixtyFiveThousand]:
      'one hundred sixty thousand to one hundred sixty five thousand yen',
    [DesireRentChargeRange.OneHundredSixtyFiveThousandToOneHundredSeventyThousand]:
      'one hundred sixty five thousand to one hundred seventy thousand yen',
    [DesireRentChargeRange.OneHundredSeventyThousandToOneHundredSeventyFiveThousand]:
      'one hundred seventy thousand to one hundred seventy five thousand yen',
    [DesireRentChargeRange.OneHundredSeventyFiveThousandToOneHundredEightyThousand]:
      'one hundred seventy five thousand to one hundred eighty thousand yen',
    [DesireRentChargeRange.OneHundredEightyThousandToOneHundredEightyFiveThousand]:
      'one hundred eighty thousand to one hundred eighty five thousand yen',
    [DesireRentChargeRange.OneHundredEightyFiveThousandToOneHundredNinetyThousand]:
      'one hundred eighty five thousand to one hundred ninety thousand yen',
    [DesireRentChargeRange.OneHundredNinetyThousandToOneHundredNinetyFiveThousand]:
      'one hundred ninety thousand to one hundred ninety five thousand yen',
    [DesireRentChargeRange.OneHundredNinetyFiveThousandToTwentyHundredThousand]:
      'one hundred ninety five thousand to twenty hundred thousand yen',
    [DesireRentChargeRange.TwentyHundredThousandToTwentyHundredTenThousand]:
      'twenty hundred thousand to twenty hundred ten thousand yen',
    [DesireRentChargeRange.TwentyHundredTenThousandToTwentyHundredTwentyThousand]:
      'twenty hundred ten thousand to twenty hundred twenty thousand yen',
    [DesireRentChargeRange.TwentyHundredTwentyThousandToTwentyHundredThirtyThousand]:
      'twenty hundred twenty thousand to twenty hundred thirty thousand yen',
    [DesireRentChargeRange.TwentyHundredThirtyThousandToTwentyHundredFourtyThousand]:
      'twenty hundred thirty thousand to twenty hundred fourty thousand yen',
    [DesireRentChargeRange.TwentyHundredFourtyThousandToTwentyHundredFiftyThousand]:
      'twenty hundred fourty thousand to twenty hundred fifty thousand yen',
    [DesireRentChargeRange.TwentyHundredFiftyThousandToTwentyHundredSixtyThousand]:
      'twenty hundred fifty thousand to twenty hundred sixty thousand yen',
    [DesireRentChargeRange.TwentyHundredSixtyThousandToTwentyHundredSeventyThousand]:
      'twenty hundred sixty thousand to twenty hundred seventy thousand yen',
    [DesireRentChargeRange.TwentyHundredSeventyThousandToTwentyHundredEightyThousand]:
      'twenty hundred seventy thousand to twenty hundred eighty thousand yen',
    [DesireRentChargeRange.TwentyHundredEightyThousandToTwentyHundredNinetyThousand]:
      'twenty hundred eighty thousand to twenty hundred ninety thousand yen',
    [DesireRentChargeRange.TwentyHundredNinetyThousandToThirtyHundredThousand]:
      'twenty hundred ninety thousand to thirty hundred thousand yen',
    [DesireRentChargeRange.ThirtyHundredThousandToThirtyHundredFiftyThousand]:
      'thirty hundred thousand to thirty hundred fifty thousand yen',
    [DesireRentChargeRange.ThirtyHundredFiftyThousandToFourtyHundredThousand]:
      'thirty hundred fifty thousand to fourty hundred thousand yen',
    [DesireRentChargeRange.FourtyHundredThousandToFourtyHundredFiftyThousand]:
      'fourty hundred thousand to fourty hundred fifty thousand yen',
    [DesireRentChargeRange.FourtyHundredFiftyThousandToFiftyHundredThousand]:
      'fourty hundred fifty thousand to fifty hundred thousand yen',
    [DesireRentChargeRange.FiftyHundredThousandToOneMillion]:
      'fifty hundred thousand to one million yen',
    [DesireRentChargeRange.OneMillionOrMore]: 'one million or more yen',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const desireRentChargeRangeEncoder = generateEncoder<
  DesireRentChargeRange
>(translations);
export const desireRentChargeRangeDecoder = generateDecoder<
  DesireRentChargeRange
>(reverseTranslations);
