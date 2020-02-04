# now-enum-parser

> define enums and parsers for now project

## Installation
`yarn add ssh://git@project.revoneo.com:2224/active/living-tech/now_enum_parser.git`

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

const lang = Language.JAPANESE;

console.log(Language.JAPANESE)
// => "ja"

console.log(languageEncoder(Language.JAPANESE))
// => "日本語"

console.log(languageEncoder(Language.ENGLISH))
// => "English"

console.log(languageDecoder("日本語"))
// => "ja"

console.log(languageDecoder("日本語") === Language.JAPANESE)
// => true

console.log(Gender.MAN)
// => 0

console.log(genderEncoder(Gender.MAN, lang))
// => "男性"

console.log(genderDecoder("男性", lang))
// => 0

console.log(genderDecoder("男性", lang) === Gender.MAN)
// => true
```

## Contributing

create src/[EnumName].ts and import it from index.ts.  
see gender.ts as example.  
