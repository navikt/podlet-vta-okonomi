# podlet-vta-okonomi

Template for en [podium-lib](https://podium-lib.io)-podlet med React, TypeScript og Express.

Følgende er satt opp:

- [craco](https://www.npmjs.com/package/@craco/craco)
- [nav-frontend](https://github.com/navikt/nav-frontend-moduler)
- [podlet-endepunkter](https://podium-lib.io/docs/podlet/getting_started) i express
- [msw](https://mswjs.io/) for mocking av API-kall med serviceworker
- [testing-library](https://testing-library.com/) for testing av komponenter
- Nais-deployment oppset med Dockerfile

## Kom i gang

Trykk på "Use this template" for å sette opp et nytt podlet-repo.
Når du har sjekket ut koden, kan du gjøre følgende for å få en ny og fungerende podlet:

1. Bytte ut `podlet-vta-okonomi` med ditt podletnavn overalt
2. Sette riktig `basepath` følgende steder:
   - `.github/workflows/deploy.yml`
   - `.github/workflows/vars.yml`
   - `podlet.js`
3. Sett `namespace` og `team` i `nais/dev/vars.yaml`
4. Sett rett `codeowner` i `CODEOWNERS`
5. Bytt ut port 7100 med noe annet hvis du skal kjøre podleten sammen med andre podlets lokalt
6. Legg til NAIS deploy key
7. Husk å kommentere inn deploy-jobben i `.github/workflows/deploy.yml`.

## Lokal kjøring

Hot-reloading, men uten støtte for layout-server:

```shell
npm start
```

Podlet standalone (uten layout-server):

```shell
npm run build
npm run podlet
```

Podlet med [layout-server](https://github.com/navikt/layout-dittnav):

```shell
npm run build
npm run podlet

# Fra layout-server:
npm run layout
```
