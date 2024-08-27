#### Setup Overview
1. Install package: `npm install react-intl`
2. Create a Provider / Wrapper with messages and local
Note: we'll have to setup the default locale

##### App Code
```
const intl = useIntl();

<header>
  <img src={logo} alt={intl.$t({ id: "logo" })} />
</head>

<main>
  <p><FormattedMessage id="demo" /></p>
  <p>
    <FormattedMessage
      id="now"
      values={{ currentDateTime: Date.now() }}
    />
  </p>
</main>
```

##### Wrapper Component
```
import { useState } from "react";
import { IntlProvider } from "react-intl";

const messages = {
  // English (USA)
  "en-US": {
    logo: "logo",
    demo: "This demo app was internationalized by react-intl",

    // Interpolated date using ICU syntax.
    now: "Current date and time are {currentDateTime, date, ::EEE, MMM d, yyyy h:mm a}",
  },
  // Arabic (Egypt)
  "ar-EG": {
    logo: "رمز التطبيق",
    demo: "تم تدويل هذا التطبيق التجريبي بواسطة رياكت إنتل",
    now: "التاريخ والوقت الحاليان هما {currentDateTime, date, ::EEE, MMM d, yyyy h:mm a}",
  },
};

function I18n({ render }) {
  const [locale, setLocale] = useState("en-US");

  return (
    // Use the key prop to force react-intl's IntlProvider
    // to re-render its children on locale change.
    <IntlProvider 
       messages={messages[locale]}
       locale={locale}
       key={locale}>
      {render(setLocale)}
    </IntlProvider>
  );
}

export default I18n;
```