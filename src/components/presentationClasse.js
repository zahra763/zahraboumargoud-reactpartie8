import { Component } from "react";

class PresentationClasse extends Component {
  render() {
    const personne = {
      nom: "Alami",
      prenom: "Sara",
      age: 20
    };

    const diplomes = [
      "Baccalauréat",
      "DTS",
      "Développement Digital"
    ];

    return (
      <div>
        <h1>Présentation d'une personne</h1>

        <p>Nom : {personne.nom}</p>
        <p>Prénom : {personne.prenom}</p>
        <p>Âge : {personne.age} ans</p>

        <h2>Diplômes</h2>
        <ul>
          {diplomes.map((diplome, index) => (
            <li key={index}>{diplome}</li>
          ))}
        </ul>

        <h2>Contenu des props.children</h2>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default PresentationClasse;