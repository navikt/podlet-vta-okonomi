import * as React from "react";
import OkonomiPanel from "./okonomi-panel";
import "./okonomi-rad.less";

import DagpengerBilde from "./dagpenger";
import NyRettTilSykepengerBilde from "./ny-rett-til-sykepenger";
import OkonomiskSosialhjelpBilde from "./okonomisk-sosialhjelp";
import { dagpengerLesmerLenke, sosialhjelpLenke, sykepengerLenke } from "../../lenker";

import OkonomiRadDagpenger from "./okonomi-rad-dagpenger";

const OkonomiRad = () => {
  /*const { underOppfolging } = React.useContext(UnderOppfolgingContext).data;
    const { erSykmeldtMedArbeidsgiver } = React.useContext(BrukerInfoContext).data;
    const { securityLevel } = React.useContext(AutentiseringContext).data;
    const isLevel4 = securityLevel === InnloggingsNiva.LEVEL_4;
    const kanViseKomponent = isLevel4 && underOppfolging && erSykmeldtMedArbeidsgiver;
    return !kanViseKomponent ? null :*/ return (
    <div className="okonomi-rad blokk-l">
      <OkonomiPanel
        tittel="Dagpenger hvis du blir arbeidsledig"
        lenkeTekst="Les mer om dagpenger"
        lenkeUrl={dagpengerLesmerLenke}
      >
        <DagpengerBilde className="okonomi-panel--bilde blokk-s" />
      </OkonomiPanel>
      <OkonomiPanel tittel="Økonomisk sosialhjelp" lenkeTekst="Økonomisk sosialhjelp" lenkeUrl={sosialhjelpLenke}>
        <OkonomiskSosialhjelpBilde className="okonomi-panel--bilde blokk-s" />
      </OkonomiPanel>
      <OkonomiPanel
        tittel="Når du har rett til sykepenger igjen"
        lenkeTekst="Ny rett til sykepenger"
        lenkeUrl={sykepengerLenke}
      >
        <NyRettTilSykepengerBilde className="okonomi-panel--bilde blokk-s" />
      </OkonomiPanel>
    </div>
  );
};

export default OkonomiRad;
