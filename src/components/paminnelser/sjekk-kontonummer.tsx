import * as React from "react";
import Lenke from "nav-frontend-lenker";
import Panel from "nav-frontend-paneler";
import { Normaltekst, Systemtittel } from "nav-frontend-typografi";
import "./paminnelse.less";

const SjekkKontonummer = () => {
  /* const amplitudeAktivitetsData = React.useContext(AmplitudeAktivitetContext);
    const { underOppfolging } = React.useContext(UnderOppfolgingContext).data;

    const kanViseKomponent = underOppfolging;

    React.useEffect(() => {
        if (kanViseKomponent) {
            loggAktivitet({ aktivitet: 'Viser sjekk kontonummer', ...amplitudeAktivitetsData });
        }
    }, [amplitudeAktivitetsData, kanViseKomponent]);

    if (!kanViseKomponent) {
        return null;
    }*/

  const handleClick = () => {
    // loggAktivitet({ aktivitet: 'Går til sjekk kontonummer', ...amplitudeAktivitetsData });
  };

  return (
    <div className="wrapper">
      <Panel border className="ramme blokk-s">
        <section className="paminnelse">
          <div className="innhold">
            <Systemtittel tag="h2" className="blokk-xs">
              Sjekk kontonummer
            </Systemtittel>
            <Normaltekst className="blokk-xs">
              For å unngå forsinkelser i utbetalinger og saksbehandling er det viktig å sjekke at du har registrert det
              rette kontonummeret hos oss.
            </Normaltekst>
            <Lenke
              href="https://www.nav.no/person/personopplysninger/#utbetaling"
              onClick={handleClick}
              target="_blank"
            >
              Kontroller kontonummer
            </Lenke>
          </div>
        </section>
      </Panel>
    </div>
  );
};

export default SjekkKontonummer;
