import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import OkonomiRad from "./okonomi-rad";

describe("Tester at komponenten rendres som forventet", () => {
  test("Komponenten rendres IKKE om man ikke er under oppfolging", () => {
    const { container } = render(
      <OkonomiRad erSykmeldtMedArbeidsgiver={false} oppfolgingNivaa3={false} oppfolgingNivaa4={false} />
    );
    expect(container).toBeEmptyDOMElement();
  });

  test("OkonomiradDagpenger rendres om man ikke er logget inn med nivå 4", () => {
    const { container } = render(
      <OkonomiRad erSykmeldtMedArbeidsgiver={true} oppfolgingNivaa3={true} oppfolgingNivaa4={false} />
    );
    expect(screen.getByText(/trekk dagpengesøknaden/i)).toBeInTheDocument();
  });

  test("OkonomiradDagpenger rendres om man IKKE er sykmeldt med arbeidsgiver", () => {
    render(<OkonomiRad erSykmeldtMedArbeidsgiver={false} oppfolgingNivaa3={true} oppfolgingNivaa4={false} />);
    expect(screen.getByText(/trekk dagpengesøknaden/i)).toBeInTheDocument();
  });

  test("Okonomirad VISES om man er logget inn med nivå 4, under oppfølging OG sykmeldt med arbeidsgiver", () => {
    const { container } = render(
      <OkonomiRad erSykmeldtMedArbeidsgiver={true} oppfolgingNivaa3={true} oppfolgingNivaa4={true} />
    );
    expect(screen.getByText(/Dagpenger hvis du blir arbeidsledig/i)).toBeInTheDocument();
  });
});
