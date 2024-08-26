#### Setup overview
1. Install packages
`
npm install --save-dev @lingui/cli @lingui/macro
pm install @lingui/react
`
2. Create config file with path to translation files
3. Add cli scripts to extract and compile text.
4. Extract and compile messages.
5. Create a wrapper component that handles the active locale state and locale loading of the app.

#### Development Overview
- Use `<Trans>` and `t()` components / functions to mark our strings for translation. 
- Extract PO file
- Add translation to PO file
- Compile po file

##### App Code
`
<header>
  <img
    src={logo}
    alt={t({ id: "logo", message: "logo" })}
  />
<header>
<main>
  <p>
    { /* Marked for interpolation */ }
    <Trans>This demo app was internationalized using LinguiJS</Trans>
  </p>

  <p>
    { /* Interpolated date */ }
    <Trans>
      Current date and time are{" "}
      {i18n.date(Date.now(), {
        dateStyle: "medium",
        timeStyle: "medium",
      })}
    </Trans>
  </p>
</main>
`

##### English PO File
`
// src/locales/en-US/messages.po

msgid ""
msgstr ""
"POT-Creation-Date: 2022-12-14 17:49+0100\n"
"MIME-Version: 1.0\n"

msgid "Current date and time are {0}"
msgstr "Current date and time are {0}"

msgid "This demo app was internationalized using LinguiJS"
msgstr "This demo app was internationalized using LinguiJS"

msgid "logo"
msgstr "logo"
`

##### Arabic PO File
`
// src/locales/ar-EG/messages.po

msgid ""
msgstr ""
"POT-Creation-Date: 2022-12-14 17:49+0100\n"

msgid "Current date and time are {0}"
msgstr "التاريخ والوقت الحاليان هما {0}"

msgid "This demo app was internationalized using LinguiJS"
msgstr "تم تدويل هذا التطبيق التجريبي باستخدام لنجوي"

msgid "logo"
msgstr "رمز التطبيق"
`
##### Config file
`
{
  "locales": [
    "en-US",
    "ar-EG"
  ],
  "sourceLocale": "en-US",
  "catalogs": [
    {
      "path": "src/locales/{locale}/messages",
      "include": [
        "src"
      ]
    }
  ]
}
`