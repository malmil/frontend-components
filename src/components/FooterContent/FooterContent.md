** FooterContent brukes i publikumsløsninger for å markere bunnen av siden.**

```js
import FooterContent from '@skatteetaten/frontend-components/FooterContent';
import Grid from '@skatteetaten/frontend-components/Grid';

<div>
  <FooterContent>
    <Grid>
      <Grid.Row>
        <Grid.Col sm={12} lg={12} xl={4}>
          <FooterContent.Logo />
        </Grid.Col>
        <Grid.Col sm={12} lg={12} xl={4}>
          <b>Kontakt oss</b>
        </Grid.Col>
        <Grid.Col sm={12} lg={12} xl={4}>
          noreply@skatteetaten.no
        </Grid.Col>
      </Grid.Row>
    </Grid>
  </FooterContent>
</div>;
```

```js noeditor
import Accordion from '@skatteetaten/frontend-components/Accordion';
import AccordionItem from '@skatteetaten/frontend-components/Accordion/AccordionItem';
<Accordion>
  <AccordionItem
    toggleContent
    isOpen
    toggleButtonText={'Bruk'}
    stepId={'step-1-1'}
  >
    <p>
      Footeren i løsningene våre inneholder typisk lenker for deling,
      kontaktopplysniger, personvernopplysninger og liknende.
    </p>
    <p>
      Teknisk sett kan FooterContent-komponenten innholde et vilkårlig
      underelementer, men det er anbefalt å bruke grid-systemet slik som i
      eksemplene fordi det da tilpasser seg ulike skjermstørrelser.
    </p>
    <p>
      Logo er en egen komponent på FooterContent-komponenten
      `FooterContent.Logo`. Logoen blir midtstilt når vinduet er mindre enn
      1024px som tilsvarer fra og med large i grid-systemet.
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
      tilgjengelige.
    </p>
  </AccordionItem>
</Accordion>;
```
