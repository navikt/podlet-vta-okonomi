import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import { screen, render } from "@testing-library/react";
import OkonomiRad from "./okonomi-rad-dagpenger";

/*
describe('Tester rendring av komponenten', () => {
    test('Komponenten rendres IKKE som default', () => {
        const props: ProviderProps = {};
        const { container } = render(<OkonomiRad />, { wrapper: contextProviders(props) });
        expect(container).toBeEmptyDOMElement();
    });

    test('Komponenten rendres IKKE om man er sykmeldt med arbeidsgiver', () => {
        const props: ProviderProps = {
            brukerInfo: {
                erSykmeldtMedArbeidsgiver: true,
            },
            underOppfolging: {
                underOppfolging: true,
            },
        };
        const { container } = render(<OkonomiRad />, { wrapper: contextProviders(props) });
        expect(container).toBeEmptyDOMElement();
    });

    test('Komponenten rendres når man er under oppfølging', () => {
        const props: ProviderProps = {
            underOppfolging: {
                underOppfolging: true,
            },
        };
        render(<OkonomiRad />, { wrapper: contextProviders(props) });
        expect(screen.getByText(tekster['dagpenger-heading-tekst'])).toBeTruthy();
    });
});
*/
