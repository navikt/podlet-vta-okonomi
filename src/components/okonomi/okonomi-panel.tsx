import React from "react";
import Lenke from "nav-frontend-lenker";
import { HoyreChevron } from "nav-frontend-chevron";
import { Normaltekst, Systemtittel } from "nav-frontend-typografi";
import "./okonomi-panel.less";
//import { OppfolgingContext } from '../../ducks/oppfolging';

interface OkonomiPanelProps {
  tittel: string;
  lenkeTekst: string;
  lenkeUrl: string;
  children: React.ReactNode;
}

const OkonomiPanel = (props: OkonomiPanelProps) => {
  const { tittel, lenkeTekst, lenkeUrl, children } = props;
  //const servicegruppe = React.useContext(OppfolgingContext).data.servicegruppe;

  const handleClick = () => {
    //lesOmOkonomi(lenkeUrl, servicegruppe);
  };

  return (
    <div className="okonomi-panel">
      {children}

      <Systemtittel className="blokk-xs okonomi-panel--tittel">{tittel}</Systemtittel>

      <Lenke href={lenkeUrl} className="okonomi-panel--lenke" onClick={handleClick}>
        <Normaltekst tag="span">{lenkeTekst}</Normaltekst>
        <HoyreChevron />
      </Lenke>
    </div>
  );
};

export default OkonomiPanel;
