### Namespaces
Namespaces are groups that the framework uses to split translations into logical collections. These can be loaded only when they're needed. Translation is the default namespace and is what is used in this project.

### Locale codes
Locales define a language, region, and sometimes more. IETF tags are used such as en for English and es for Spanish. Adding a region with the ISO Alpha-2 code will help localize numbers and dates. We can specify american english using en-US

Language tags can be found here
https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes

ISO Tags can be found here
https://www.iso.org/obp/ui/#search

### Loading translation files asynchronously
Node Plugin to handle loading files asynchronously
https://github.com/i18next/i18next-http-backend