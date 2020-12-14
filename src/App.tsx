import React, { useEffect, useState } from "react";
import "./App.css";
import Panel from "nav-frontend-paneler";
import Navn from "./components/navn";
import Status from "./components/status";
import OkonomiRadDagpenger from "./components/okonomi/okonomi-rad-dagpenger";
import OkonomiRad from "./components/okonomi/okonomi-rad";

function App() {
  const [name, setName] = useState("");
  useEffect(() => {
    fetch("https://api.nav.no/dittnav-api/personalia/navn", { credentials: "include" })
      .then((resp) => resp.json())
      .then((json) => setName(json.navn));
  }, []);

  return (
    <div className="podlet-vta-okonomi">
      <OkonomiRad />
    </div>
  );
}

export default App;
