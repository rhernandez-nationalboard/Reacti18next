### Stats
- Weekly Downloads: 3.3M
- Last Publish: 14 days ago
- Note: built on top of i18n

### Installing
- Install `npm install react-i18next i18next`
- Install localizations async `npm install i18next-http-backend`
- Install language detection `npm install i18next-browser-languagedetector`

### Basic Overview
The framework exposes a function which takes a key and returns the text that is appropriate for our region. We have to specify the text using translation files which are json file located within our public / locales.

Each language we support will be split into different folders specified by the country code. For example to add support for english we create a folder named 'en'.

##### Example JSON
`
{
  'label_1': 'This is the title of my page'
}
`

##### Example Translation
Code: `<div>{t('label_1')}</div>`

Explanation: This performs a look in in translation.json for the value given key `label_1`

### Displaying data
The 2nd parameter of our t function is the data we want to pass into our translation file. Our file displays this data by using curly braces.

#### Example: Display user that 
##### Code
`<div>{t('line', { shoppingCart })}</div>`

##### Translation File
`
{ "line": "{{shoppingCart.name}} is buying some dogs" }
`
##### Explanation
This allows us to display the name property of the shopping cart variable

