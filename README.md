# now-enum-parser

> define enums and parsers for now project

## Installation
`yarn add ssh://git@github.com:living-tech/now_enum_parser.git`

## Usage
```
import {
  Language,
  languageEncoder,
  languageDecoder,
  Gender,
  genderEncoder,
  genderDecoder,
} from 'now-enum-parser';

const lang = Language.ja;

console.log(Language.ja)
// => "ja"

console.log(languageEncoder(Language.ja))
// => "日本語"

console.log(languageEncoder(Language.en))
// => "English"

console.log(languageDecoder("日本語"))
// => "ja"

console.log(languageDecoder("日本語") === Language.ja)
// => true

console.log(Gender.Male)
// => "Male"

console.log(genderEncoder(Gender.Male, lang))
// => "男性"

console.log(genderDecoder("男性", lang))
// => "Male"

console.log(genderDecoder("男性", lang) === Gender.Male)
// => true
```

## Contributing

create src/[EnumName].ts and import it from index.ts.  
see gender.ts as example.  
