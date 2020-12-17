import React from "react";
import "./App.css";
import OkonomiRad from "./components/okonomi/okonomi-rad";
import useSWR from "swr";
import { authUrl, brukerinfoUrl, oppfolgingUrl, underOppfolgingUrl } from "./url";

interface Authdata {
  authenticated: boolean;
  securityLevel: "3" | "4";
  name: string;
}

interface Oppfolgingdata {
  underOppfolging: boolean;
}

interface Brukerdata {
  erSykmeldtMedArbeidsgiver: boolean;
}

const fetcher = async (url: string) => {
  const response = await fetch(url, { method: "GET", credentials: "include" });
  const data = await response.json();
  return data;
};

function App() {
  const { data: auth } = useSWR<Authdata>(authUrl, fetcher);

  const { data: underOppfolgingdata } = useSWR(auth?.securityLevel === "3" ? underOppfolgingUrl : null, fetcher);
  const underOppfolgingNivaa3 = underOppfolgingdata?.erBrukerUnderOppfolging;

  const { data: oppfolgingsdata } = useSWR<Oppfolgingdata>(auth?.securityLevel === "4" ? oppfolgingUrl : null, fetcher);
  const underOppfolgingNivaa4 = oppfolgingsdata?.underOppfolging;

  const { data: sykemeldtdata } = useSWR<Brukerdata>(brukerinfoUrl, fetcher);
  const erSykmeldtMedArbeidsgiver = sykemeldtdata?.erSykmeldtMedArbeidsgiver;

  return (
    <div className="podlet-vta-okonomi">
      <OkonomiRad
        oppfolgingNivaa3={underOppfolgingNivaa3}
        oppfolgingNivaa4={underOppfolgingNivaa4}
        erSykmeldtMedArbeidsgiver={erSykmeldtMedArbeidsgiver}
      />
    </div>
  );
}

export default App;
