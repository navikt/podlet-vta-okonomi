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

interface Authdata {
  authenticated: boolean;
  securityLevel: "3" | "4";
  name: string;
}

interface Oppfolgingdata {
  underOppfolging: string;
}

interface Brukerdata {
  erSykmeldtMedArbeidsgiver: boolean;
}

const fetcher = async (url: string) => {
  const response = await fetch(url, { method: "GET", credentials: "include" });
  const data = await response.json();
  return data;
};

const OkonomiRad = () => {
  const { data: auth } = useSWR<Authdata>(authUrl, fetcher);
  const isLevel4 = auth?.securityLevel === "4";

  const { data: oppfolgingsdata } = useSWR<Oppfolgingdata>(oppfolgingUrl, fetcher);
  const underOppfolging = oppfolgingsdata?.underOppfolging;

  const { data: sykemeldtdata } = useSWR<Brukerdata>(brukerinfoUrl, fetcher);
  const erSykmeldtMedArbeidsgiver = sykemeldtdata?.erSykmeldtMedArbeidsgiver;

  const kanViseKomponent = isLevel4 && underOppfolging;

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
