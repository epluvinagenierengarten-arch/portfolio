import Image from "next/image";
import Presentation from "../components/presentation";
import Pastille from "../components/pastilleTechniques";

export default function Projets() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <div>
        <Presentation
        titre="Hello World"
        texte="Je m'appelle Evaëlle Pluvinage-Nierengarten et j'ai 19ans. Je suis actuellement en deuxieme année de bachelor en developpement web et innovation à l'IIM school of technologies. Voici ce qu'il faut savoir à propos de moi "
        />
      </div>
      <div className="text-white bold">
        <h2>Mes compétences techniques: </h2>
        <div className="mt-6">
          <Pastille/>
        </div>
      </div>
    </main>
  );
}