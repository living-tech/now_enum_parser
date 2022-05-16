import { Translations } from './lib/interfaces';
import {
  generateReverseTranslations,
  generateEncoder,
  generateDecoder,
} from './lib/generators';

// Edit enum name and contents
export enum OrdinanceDesignatedCity {
  Sapporo = 'Sapporo',
  Sendai = 'Sendai',
  Saitama = 'Saitama',
  Chiba = 'Chiba',
  Kawasaki = 'Kawasaki',
  Yokohama = 'Yokohama',
  Sagamihara = 'Sagamihara',
  Niigata = 'Niigata',
  Shizuoka = 'Shizuoka',
  Hamamatsu = 'Hamamatsu',
  Nagoya = 'Nagoya',
  Kyoto = 'Kyoto',
  Osaka = 'Osaka',
  Sakai = 'Sakai',
  Kobe = 'Kobe',
  Okayama = 'Okayama',
  Hiroshima = 'Hiroshima',
  Kitakyushu = 'Kitakyushu',
  Fukuoka = 'Fukuoka',
  Kumamoto = 'Kumamoto',
}

// Edit contexts
const translations: Translations = {
  ja: {
    [OrdinanceDesignatedCity.Sapporo]: '札幌市',
    [OrdinanceDesignatedCity.Sendai]: '仙台市',
    [OrdinanceDesignatedCity.Saitama]: 'さいたま市',
    [OrdinanceDesignatedCity.Chiba]: '千葉市',
    [OrdinanceDesignatedCity.Kawasaki]: '川崎市',
    [OrdinanceDesignatedCity.Yokohama]: '横浜市',
    [OrdinanceDesignatedCity.Sagamihara]: '相模原市',
    [OrdinanceDesignatedCity.Niigata]: '新潟市',
    [OrdinanceDesignatedCity.Shizuoka]: '静岡市',
    [OrdinanceDesignatedCity.Hamamatsu]: '浜松市',
    [OrdinanceDesignatedCity.Nagoya]: '名古屋市',
    [OrdinanceDesignatedCity.Kyoto]: '京都市',
    [OrdinanceDesignatedCity.Osaka]: '大阪市',
    [OrdinanceDesignatedCity.Sakai]: '堺市',
    [OrdinanceDesignatedCity.Kobe]: '神戸市',
    [OrdinanceDesignatedCity.Okayama]: '岡山市',
    [OrdinanceDesignatedCity.Hiroshima]: '広島市',
    [OrdinanceDesignatedCity.Kitakyushu]: '北九州市',
    [OrdinanceDesignatedCity.Fukuoka]: '福岡市',
    [OrdinanceDesignatedCity.Kumamoto]: '熊本市',
  },
  en: {
    [OrdinanceDesignatedCity.Sapporo]: 'Sapporo',
    [OrdinanceDesignatedCity.Sendai]: 'Sendai',
    [OrdinanceDesignatedCity.Saitama]: 'Saitama',
    [OrdinanceDesignatedCity.Chiba]: 'Chiba',
    [OrdinanceDesignatedCity.Kawasaki]: 'Kawasaki',
    [OrdinanceDesignatedCity.Yokohama]: 'Yokohama',
    [OrdinanceDesignatedCity.Sagamihara]: 'Sagamihara',
    [OrdinanceDesignatedCity.Niigata]: 'Niigata',
    [OrdinanceDesignatedCity.Shizuoka]: 'Shizuoka',
    [OrdinanceDesignatedCity.Hamamatsu]: 'Hamamatsu',
    [OrdinanceDesignatedCity.Nagoya]: 'Nagoya',
    [OrdinanceDesignatedCity.Kyoto]: 'Kyoto',
    [OrdinanceDesignatedCity.Osaka]: 'Osaka',
    [OrdinanceDesignatedCity.Sakai]: 'Sakai',
    [OrdinanceDesignatedCity.Kobe]: 'Kobe',
    [OrdinanceDesignatedCity.Okayama]: 'Okayama',
    [OrdinanceDesignatedCity.Hiroshima]: 'Hiroshima',
    [OrdinanceDesignatedCity.Kitakyushu]: 'Kitakyushu',
    [OrdinanceDesignatedCity.Fukuoka]: 'Fukuoka',
    [OrdinanceDesignatedCity.Kumamoto]: 'Kumamoto',
  },
};

// DO NOT EDIT
const reverseTranslations = generateReverseTranslations(translations);

// Edit constants name
export const ordinanceDesignatedCityEncoder = generateEncoder<
  OrdinanceDesignatedCity
>(translations);
export const ordinanceDesignatedCityDecoder = generateDecoder<
  OrdinanceDesignatedCity
>(reverseTranslations);
