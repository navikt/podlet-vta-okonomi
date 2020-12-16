import * as React from "react";
import OkonomiPanel from "./okonomi-panel";
import "./okonomi-rad.less";
import DagpengerBilde from "./dagpenger";
import NyRettTilSykepengerBilde from "./ny-rett-til-sykepenger";
import OkonomiskSosialhjelpBilde from "./okonomisk-sosialhjelp";
import { dagpengerLesmerLenke, sosialhjelpLenke, sykepengerLenke } from "../../lenker";
import useSWR from "swr";
import OkonomiRadDagpenger from "./okonomi-rad-dagpenger";
import { authUrl, brukerinfoUrl, oppfolgingUrl } from "../../url";

const fetcher = async (url: string) => {
  const response = await fetch(url, { method: "GET", credentials: "include" });
  const data = await response.json();
  return data;
};

const OkonomiRad = () => {
  const { data: auth } = useSWR(authUrl, fetcher);
  const isLevel4 = auth.securityLevel === "Level4";

  const { data: underOppfolging } = useSWR(oppfolgingUrl, fetcher);
  const { data: erSykmeldtMedArbeidsgiver } = useSWR(brukerinfoUrl, fetcher);

  const kanViseKomponent = isLevel4 && underOppfolging && erSykmeldtMedArbeidsgiver;
  return !kanViseKomponent ? null : !erSykmeldtMedArbeidsgiver ? (
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
