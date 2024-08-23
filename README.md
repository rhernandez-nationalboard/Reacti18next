### Stats
Weekly Downloads: 3.3M
Last Publish: 14 days ago
Note: built on top of i18n

### Installing
Install `npm install react-i18next i18next`
Install localizations async `npm install i18next-http-backend`
Install language detection `npm install i18next-browser-languagedetector`

### Basic Overview
We create a translation files within our public/locales. Each language we support will be split into different folders. For example adding support for english means adding a en folder

Our translation file is a json key value pair where the key will be referenced in code and the value will be what gets displayed

##### Example JSON
`
{
  'label_1': 'This is the title of my page'
}
`

##### Example Translation
`<div>{t('label_1')}</div>`
This performs a look in in translation.json for the value given key `label_1`

### Supported Features


