function getEnvironment(): string {
  let environment = "development";
  if (process.env.NODE_ENV === "production") {
    environment = "production";
  }
  return environment;
}

//TODO: Bytte om URL-ene under slik at de er rett. Nå er dev-endepunktet satt til 'production' pga deploy til NAIS
const OPPFOLGING_URL: any = {
  development: "",
  production: "/person/layout-dittnav/podium-resource/podlet-vta-okonomi/api-oppfolging",
};
const BRUKERINFO_URL: any = {
  development: "",
  production: "/person/layout-dittnav/podium-resource/podlet-vta-okonomi/api-veilarbregistrering",
};

const AUTH_URL: any = {
  development: "https://api.nav.no/innloggingsstatus/auth",
  production: "https://innloggingsstatus.dev.nav.no/person/innloggingsstatus/auth",
};

export const oppfolgingUrl = OPPFOLGING_URL[getEnvironment()];
export const brukerinfoUrl = BRUKERINFO_URL[getEnvironment()];
export const authUrl = AUTH_URL[getEnvironment()];
