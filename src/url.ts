function getEnvironment(): string {
  let environment = "development";
  if (process.env.NODE_ENV === "production") {
    environment = "production";
  }
  return environment;
}

const AUTH_URL: any = {
  development: "https://api.nav.no/innloggingsstatus/auth",
  production: "https://innloggingsstatus.dev.nav.no/person/innloggingsstatus/auth",
};
const BRUKERINFO_URL: any = {
  development: "/veilarbregistrering/api/startregistrering",
  production: "/person/layout-dittnav/podium-resource/podlet-vta-okonomi/api-veilarbregistrering",
};

const OPPFOLGING_URL: any = {
  development: "/veilarboppfolging/api/oppfolging",
  production: "/person/layout-dittnav/podium-resource/podlet-vta-okonomi/api-oppfolging",
};

const UNDER_OPPFOLGING_URL: any = {
  development: "https://api.nav.no/dittnav-api/oppfolging",
  production: "https://www.dev.nav.no/person/dittnav-api/oppfolging",
};

export const oppfolgingUrl = OPPFOLGING_URL[getEnvironment()];
export const underOppfolgingUrl = UNDER_OPPFOLGING_URL[getEnvironment()];
export const brukerinfoUrl = BRUKERINFO_URL[getEnvironment()];
export const authUrl = AUTH_URL[getEnvironment()];
