import React from "react";
import { Knapp } from "nav-frontend-knapper";
import Panel from "nav-frontend-paneler";
import { Systemtittel, Normaltekst } from "nav-frontend-typografi";
import "./alleskjema.less";

const AlleSkjema = () => {
  /*const amplitudeAktivitetsData = React.useContext(AmplitudeAktivitetContext);
    const { underOppfolging } = React.useContext(UnderOppfolgingContext).data;
    const kanViseKomponent = underOppfolging;

    React.useEffect(() => {
        if (kanViseKomponent) {
            loggAktivitet({ aktivitet: 'Viser alle skjema', ...amplitudeAktivitetsData });
        }
    }, [amplitudeAktivitetsData, kanViseKomponent]);*/

  const handleButtonClick = () => {
    // loggAktivitet({ aktivitet: 'Går til alle skjema', ...amplitudeAktivitetsData });
    //window.location.assign(alleSkjemaSoknadLenke);
  };

  /*return !kanViseKomponent ? null : */ return (
    <div className="alleskjema">
      <Panel border className="alleskjema-ramme blokk-l">
        <div className="innhold">
          <Systemtittel tag="h1" className="blokk-xs">
            {"Skjema og søknad"}
          </Systemtittel>
          <Normaltekst className="blokk-s dagpenger__tekst">{"Her finner du alle skjemaer i NAV."}</Normaltekst>
          <Knapp onClick={handleButtonClick} className="blokk-xs">
            {"Til alle skjemaer"}
          </Knapp>
        </div>
      </Panel>
    </div>
  );
};

export default AlleSkjema;
