import * as React from "react";
import OkonomiPanel from "./okonomi-panel";
import "./okonomi-rad.less";
import DagpengerBilde from "./dagpenger";
import NyRettTilSykepengerBilde from "./ny-rett-til-sykepenger";
import OkonomiskSosialhjelpBilde from "./okonomisk-sosialhjelp";
import { dagpengerLesmerLenke, sosialhjelpLenke, sykepengerLenke } from "../../lenker";
import OkonomiRadDagpenger from "./okonomi-rad-dagpenger";

export interface Okonomiprops {
  oppfolgingNivaa4: boolean | undefined;
  oppfolgingNivaa3: boolean | undefined;
  erSykmeldtMedArbeidsgiver: boolean | undefined;
}

const OkonomiRad = (props: Okonomiprops) => {
  const { oppfolgingNivaa3, oppfolgingNivaa4, erSykmeldtMedArbeidsgiver } = props;
  const kanViseKomponent = oppfolgingNivaa3 || oppfolgingNivaa4;

  return !kanViseKomponent ? null : !erSykmeldtMedArbeidsgiver || !oppfolgingNivaa4 ? (
    <OkonomiRadDagpenger />
  ) : (
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
