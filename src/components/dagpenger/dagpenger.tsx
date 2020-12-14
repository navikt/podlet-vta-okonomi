import React from "react";
import { Knapp } from "nav-frontend-knapper";
import Panel from "nav-frontend-paneler";
import { Normaltekst, Systemtittel } from "nav-frontend-typografi";
import "./dagpenger.less";
import { dagpengerSoknadLenke } from "../../lenker";

const Dagpenger = () => {
  /* const amplitudeAktivitetsData = React.useContext(AmplitudeAktivitetContext);
    const { underOppfolging } = React.useContext(UnderOppfolgingContext).data;
    const { erSykmeldtMedArbeidsgiver } = React.useContext(BrukerInfoContext).data;
    const kanViseKomponent = underOppfolging && !erSykmeldtMedArbeidsgiver;

    React.useEffect(() => {
        loggAktivitet({ aktivitet: 'Viser dagpengesøknad', ...amplitudeAktivitetsData });
    }, [amplitudeAktivitetsData]);
*/
  const handleButtonClick = () => {
    //loggAktivitet({ aktivitet: 'Går til dagpengesøknad', ...amplitudeAktivitetsData });
    //window.location.assign(dagpengerSoknadLenke);
  };
  /*
    return !kanViseKomponent ? null : */ return (
    <div className="dagpenger">
      <Panel border className="dagpenger-ramme blokk-l">
        <div className="innhold">
          <Systemtittel tag="h1" className="blokk-xs">
            {"Dagpenger"}
          </Systemtittel>
          <Normaltekst className="blokk-s dagpenger__tekst">
            {"Dagpenger skal gi deg som har blitt arbeidsledig økonomisk støtte mens du søker ny jobb."}
          </Normaltekst>
          <Knapp onClick={handleButtonClick} className="blokk-xs">
            {"Til søknad"}
          </Knapp>
        </div>
      </Panel>
    </div>
  );
};

export default Dagpenger;
