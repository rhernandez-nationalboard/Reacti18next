#### Setup overview
1. Install packages
- Install `npm install react-i18next i18next`
- Install localizations async `npm install i18next-http-backend`
- Install language detection `npm install i18next-browser-languagedetector`
2. Create configuration i18n.js file. This is where we can plug in stuff like he language detection and async localizations

### Basic Overview
The framework exposes a function which takes a key and returns the text that is appropriate for our region. We have to specify the text using translation files which are json files located within our public / locales.

Each language we support will be split into different folders specified by the country code. For example to add support for english we create a folder named 'en'.

##### Example Translation File
`
{
  'label_1': 'This is the title of my page'
}
`

##### Example Code
Code: `<div>{t('label_1')}</div>`

Explanation: This performs a lookup in translation.json for the value given key `label_1`

### Displaying data
The 2nd parameter of our t function is the data we want to pass into our translation file. Our file displays this data by using curly braces.

#### Example: Displaying user name
##### Code
`<div>{t('line', { shoppingCart })}</div>`

##### Translation File
`
{ "line": "{{shoppingCart.name}} is buying some dogs" }
`
##### Explanation
This allows us to display the name property of the shopping cart variable

### Displaying plural data
In order to support plural data we can specify another line in our translation file with the same key but _other appended to the end of the name. We can do the same with zero by specifying _zero. We also have to leverage the keyword / parameter count in our translation file and pass this as a parameter.

##### Code
`<div>{t('line', { shoppingCart, count: shoppingCart.totalDogs })}</div>`

##### Translation file
`
{
  "plural_line_zero": "{{shoppingCart.name}} is not buying any dogs",
  "plural_line_one": "{{shoppingCart.name}} is buying 1 dog",
  "plural_line_other": "{{shoppingCart.name}} is buying {{count}} dogs"
}
`

Note: There's more details about formatting within our notes folder
