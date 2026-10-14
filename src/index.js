import React from "react";
import ReactDOM from "react-dom/client";

import Presentation from "./components/presentation";
import PresentationClasse from "./components/presentationClasse";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <div>
    <Presentation>
      <p>Bonjour, je suis le contenu du composant fonction.</p>
    </Presentation>

    <hr />

    <PresentationClasse>
      <p>Bonjour, je suis le contenu du composant classe.</p>
    </PresentationClasse>
  </div>
);