** TopStripe er en svart menystripe øverst på innloggede sider for publikum. **

Standard bruk på skatteetaten.no:

```js
import TopStripe from '@skatteetaten/frontend-components/TopStripe';
import TopBanner from '@skatteetaten/frontend-components/TopBanner';

const meny = [
  {
    key: 'kontakt',
    label: 'Kontakt oss',
    href: 'https://skatteetaten.no/kontakt/',
    notSmallDevice: true
  },
  {
    key: 'spraak',
    label: 'Language / Språk',
    items: [
      {
        key: 'no',
        label: 'Bokmål',
        onClick: () => {
          console.log('Bokmål');
        },
        selected: true
      },
      {
        key: 'en',
        label: 'English',
        onClick: () => {
          console.log('English');
        }
      },
      {
        key: 'nn',
        label: 'Nynorsk',
        onClick: () => {
          console.log('Nynorsk');
        },
        selected: false
      }
    ]
  },
  {
    key: 'skrift',
    label: 'Endre skriftstørrelse',
    info:
      'Hold Ctrl-tasten nede (Cmd-tasten på Mac). Trykk på + for å forstørre eller - for å forminske.',
    notSmallDevice: true
  }
];

<div>
  <TopStripe items={meny} />
  <TopBanner
    external
    title={'Side for publikum'}
    homeText={'Tilbake til skatteetaten.no'}
  />
</div>;
```

Eksempel med innlogging:

```js
import TopStripe from '@skatteetaten/frontend-components/TopStripe';
import TopBanner from '@skatteetaten/frontend-components/TopBanner';

const meny = [
  {
    key: 'kontakt',
    label: 'Kontakt oss',
    href: 'https://skatteetaten.no/kontakt/',
    notSmallDevice: true
  },
  {
    key: 'spraak',
    label: 'Language / Språk',
    items: [
      {
        key: 'no',
        label: 'Bokmål',
        onClick: () => {
          console.log('Bokmål');
        },
        selected: true
      },
      {
        key: 'en',
        label: 'English',
        onClick: () => {
          console.log('English');
        }
      },
      {
        key: 'nn',
        label: 'Nynorsk',
        onClick: () => {
          console.log('Nynorsk');
        },
        selected: false
      }
    ]
  },
  {
    key: 'skrift',
    label: 'Endre skriftstørrelse',
    info:
      'Hold Ctrl-tasten nede (Cmd-tasten på Mac). Trykk på + for å forstørre eller - for å forminske.',
    notSmallDevice: true
  },
  {
    key: 'logginn',
    label: 'Logg inn',
    href: 'login'
  }
];

<div>
  <TopStripe items={meny} />
  <TopBanner
    external
    title={'Mulig å logge inn'}
    homeText={'Tilbake til skatteetaten.no'}
  />
</div>;
```

Innlogget eksempel:

```js
import TopStripe from '@skatteetaten/frontend-components/TopStripe';
import TopBanner from '@skatteetaten/frontend-components/TopBanner';

const meny = [
  {
    key: 'kontakt',
    label: 'Kontakt oss',
    href: 'https://skatteetaten.no/kontakt/',
    notSmallDevice: true
  },
  {
    key: 'spraak',
    label: 'Language / Språk',
    items: [
      {
        key: 'no',
        label: 'Bokmål',
        onClick: () => {
          console.log('Bokmål');
        },
        selected: true
      },
      {
        key: 'en',
        label: 'English',
        onClick: () => {
          console.log('English');
        }
      },
      {
        key: 'nn',
        label: 'Nynorsk',
        onClick: () => {
          console.log('Nynorsk');
        },
        selected: false
      }
    ]
  },
  {
    key: 'skrift',
    label: 'Endre skriftstørrelse',
    info:
      'Hold Ctrl-tasten nede (Cmd-tasten på Mac). Trykk på + for å forstørre eller - for å forminske.',
    notSmallDevice: true
  },
  {
    key: 'bruker',
    label: 'Bruker',
    noLabel: true,
    icon: 'Person',
    items: [
      {
        key: 'profil',
        label: 'Min profil',
        href: 'https://skatteetaten.no/'
      },
      {
        key: 'favoritter',
        label: 'Favoritter',
        icon: 'Favorite',
        onClick: () => {
          console.log('Favoritter');
        }
      },
      {
        key: 'loggut',
        label: 'Logg ut',
        onClick: () => {
          console.log('Logg ut');
        }
      }
    ]
  }
];

<div>
  <TopStripe items={meny} />
  <TopBanner
    external
    title={'Min side'}
    homeText={'Tilbake til skatteetaten.no'}
  />
</div>;
```

```js noeditor
import Accordion from '@skatteetaten/frontend-components/Accordion';
import AccordionItem from '@skatteetaten/frontend-components/Accordion/AccordionItem';

<Accordion>
  <AccordionItem
    isOpen
    toggleContent
    toggleButtonText={'Bruk'}
    stepId={'step-1-1'}
  >
    <p>
      TopStripe er den svarte, horisontale stripen helt i toppen. Dette er etter
      DIFIs anbefaling om en felles markering av innloggede tjenester som
      benytter MinID for innlogging. Alle innloggede publikumsløsninger skal ha
      en slik toppbar. Den skal inneholde et ikon for person, samt navnet på den
      som er logget inn. I tillegg skal det finnes en Logg ut lenke helt til
      høyre.
    </p>
    <p>
      På skatteetaten.no er det i tillegg overordnede lenker og funksjoner for
      nettstedet der, for eksempel «Kontakt oss» og «Endre skriftstørrelse».
    </p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Universell utforming'}
    stepId={'step-1-2'}
  >
    <p>Dette seksjonen er foreløpig tom.</p>
  </AccordionItem>
  <AccordionItem
    toggleContent
    toggleButtonText={'Tekniske detaljer'}
    stepId={'step-1-3'}
  >
    <p>
      Denne komponenten har vi laget selv fra bunnen av, så ingen flere props er
      tilgjengelig.
    </p>
  </AccordionItem>
</Accordion>;
```
