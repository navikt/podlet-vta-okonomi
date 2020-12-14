import React from "react";
import { Systemtittel } from "nav-frontend-typografi";
import Rad from "../../rad";
import Dagpenger from "../dagpenger/dagpenger";
import AlleSkjema from "../alleskjema/alleskjema";
import SjekkKontonummer from "../paminnelser/sjekk-kontonummer";
import TrekkDagpengeSoknad from "../meldinger/trekk-dp-soknad";

const OkonomiRadDagpenger = () => {
  // const { underOppfolging } = React.useContext(UnderOppfolgingContext).data;
  //const { erSykmeldtMedArbeidsgiver } = React.useContext(BrukerInfoContext).data;
  //const kanViseKomponent = underOppfolging && !erSykmeldtMedArbeidsgiver;
  //return !kanViseKomponent ? null :
  return (
    <Rad>
      <Systemtittel tag="h2" className="dagpenger__heading blokk-s">
        Økonomi
      </Systemtittel>
      <div className="okonomi-dagpenger-rad">
        <Dagpenger />
        <AlleSkjema />
      </div>
      <div className="okonomi-dagpenger-rad">
        <SjekkKontonummer />
        <TrekkDagpengeSoknad />
      </div>
    </Rad>
  );
};

export default OkonomiRadDagpenger;
