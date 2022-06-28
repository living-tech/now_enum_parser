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
    [DesireRentChargeRange.ThirtyThousandOrLess]: '30,000 or less yen',
    [DesireRentChargeRange.ThirtyThousandToThirtyFiveThousand]:
      '30,000 to 35,000 yen',
    [DesireRentChargeRange.ThirtyFiveThousandToFourtyThousand]:
      '35,000 to 40,000 yen',
    [DesireRentChargeRange.FourtyThousandToFourtyFiveThousand]:
      '40,000 to 45,000 yen',
    [DesireRentChargeRange.FourtyFiveThousandToFiftyThousand]:
      '45,000 to 50,000 yen',
    [DesireRentChargeRange.FiftyThousandToFiftyFiveThousand]:
      '50,000 to 55,000 yen',
    [DesireRentChargeRange.FiftyFiveThousandToSixtyThousand]:
      '55,000 to 60,000 yen',
    [DesireRentChargeRange.SixtyThousandToSixtyFiveThousand]:
      '60,000 to 65,000 yen',
    [DesireRentChargeRange.SixtyFiveThousandToSeventyThousand]:
      '65,000 to 70,000 yen',
    [DesireRentChargeRange.SeventyThousandToSeventyFiveThousand]:
      '70,000 to 75,000 yen',
    [DesireRentChargeRange.SeventyFiveThousandToEightyThousand]:
      '75,000 to 80,000 yen',
    [DesireRentChargeRange.EightyThousandToEightyFiveThousand]:
      '80,000 to 85,000 yen',
    [DesireRentChargeRange.EightyFiveThousandToNinetyThousand]:
      '85,000 to 90,000 yen',
    [DesireRentChargeRange.NinetyThousandToNinetyFiveThousand]:
      '90,000 to 95,000 yen',
    [DesireRentChargeRange.NinetyFiveThousandToOneHundredThousand]:
      '95,000 to 100,000 yen',
    [DesireRentChargeRange.OneHundredThousandToOneHundredFiveThousand]:
      '100,000 to 105,000 yen',
    [DesireRentChargeRange.OneHundredFiveThousandToOneHundredTenThousand]:
      '105,000 to 110,000 yen',
    [DesireRentChargeRange.OneHundredTenThousandToOneHundredTenFiveThousand]:
      '110,000 to 115,000 yen',
    [DesireRentChargeRange.OneHundredTenFiveThousandToOneHundredTwentyThousand]:
      '115,000 to 120,000 yen',
    [DesireRentChargeRange.OneHundredTwentyThousandToOneHundredTwentyFiveThousand]:
      '120,000 to 125,000 yen',
    [DesireRentChargeRange.OneHundredTwentyFiveThousandToOneHundredThirtyThousand]:
      '125,000 to 130,000 yen',
    [DesireRentChargeRange.OneHundredThirtyThousandToOneHundredThirtyFiveThousand]:
      '130,000 to 135,000 yen',
    [DesireRentChargeRange.OneHundredThirtyFiveThousandToOneHundredFourtyThousand]:
      '135,000 to 140,000 yen',
    [DesireRentChargeRange.OneHundredFourtyThousandToOneHundredFourtyFiveThousand]:
      '140,000 to 145,000 yen',
    [DesireRentChargeRange.OneHundredFourtyFiveThousandToOneHundredFiftyThousand]:
      '145,000 to 150,000 yen',
    [DesireRentChargeRange.OneHundredFiftyThousandToOneHundredFiftyFiveThousand]:
      '150,000 to 155,000 yen',
    [DesireRentChargeRange.OneHundredFiftyFiveThousandToOneHundredSixtyThousand]:
      '155,000 to 160,000 yen',
    [DesireRentChargeRange.OneHundredSixtyThousandToOneHundredSixtyFiveThousand]:
      '160,000 to 165,000 yen',
    [DesireRentChargeRange.OneHundredSixtyFiveThousandToOneHundredSeventyThousand]:
      '165,000 to 170,000 yen',
    [DesireRentChargeRange.OneHundredSeventyThousandToOneHundredSeventyFiveThousand]:
      '170,000 to 175,000 yen',
    [DesireRentChargeRange.OneHundredSeventyFiveThousandToOneHundredEightyThousand]:
      '175,000 to 180,000 yen',
    [DesireRentChargeRange.OneHundredEightyThousandToOneHundredEightyFiveThousand]:
      '180,000 to 185,000 yen',
    [DesireRentChargeRange.OneHundredEightyFiveThousandToOneHundredNinetyThousand]:
      '185,000 to 190,000 yen',
    [DesireRentChargeRange.OneHundredNinetyThousandToOneHundredNinetyFiveThousand]:
      '190,000 to 195,000 yen',
    [DesireRentChargeRange.OneHundredNinetyFiveThousandToTwentyHundredThousand]:
      '195,000 to 200,000 yen',
    [DesireRentChargeRange.TwentyHundredThousandToTwentyHundredTenThousand]:
      '200,000 to 210,000 yen',
    [DesireRentChargeRange.TwentyHundredTenThousandToTwentyHundredTwentyThousand]:
      '210,000 to 220,000 yen',
    [DesireRentChargeRange.TwentyHundredTwentyThousandToTwentyHundredThirtyThousand]:
      '220,000 to 230,000 yen',
    [DesireRentChargeRange.TwentyHundredThirtyThousandToTwentyHundredFourtyThousand]:
      '230,000 to 240,000 yen',
    [DesireRentChargeRange.TwentyHundredFourtyThousandToTwentyHundredFiftyThousand]:
      '240,000 to 250,000 yen',
    [DesireRentChargeRange.TwentyHundredFiftyThousandToTwentyHundredSixtyThousand]:
      '250,000 to 260,000 yen',
    [DesireRentChargeRange.TwentyHundredSixtyThousandToTwentyHundredSeventyThousand]:
      '260,000 to 270,000 yen',
    [DesireRentChargeRange.TwentyHundredSeventyThousandToTwentyHundredEightyThousand]:
      '270,000 to 280,000 yen',
    [DesireRentChargeRange.TwentyHundredEightyThousandToTwentyHundredNinetyThousand]:
      '280,000 to 290,000 yen',
    [DesireRentChargeRange.TwentyHundredNinetyThousandToThirtyHundredThousand]:
      '290,000 to 300,000 yen',
    [DesireRentChargeRange.ThirtyHundredThousandToThirtyHundredFiftyThousand]:
      '300,000 to 350,000 yen',
    [DesireRentChargeRange.ThirtyHundredFiftyThousandToFourtyHundredThousand]:
      '350,000 to 400,000 yen',
    [DesireRentChargeRange.FourtyHundredThousandToFourtyHundredFiftyThousand]:
      '400,000 to 450,000 yen',
    [DesireRentChargeRange.FourtyHundredFiftyThousandToFiftyHundredThousand]:
      '450,000 to 500,000 yen',
    [DesireRentChargeRange.FiftyHundredThousandToOneMillion]:
      '500,000 to 1,000,000 yen',
    [DesireRentChargeRange.OneMillionOrMore]: '1,000,000 or more yen',
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
