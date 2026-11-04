import { PROJETS } from "../Data/projet";
import Link from "next/link";
import Card from "../components/card";

export default function Projets() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl text-white font-bold">Les projets</h1>
        <ul className="mt-6 grid gap-6 md:grid-cols-3">
            {PROJETS.map((projet)=>(
            <li key={projet.id}>
              <Card
                slug={projet.slug}
                title={projet.titre}
                category={projet.categorie}
                resume={projet.resume}
                etat={projet.misEnAvant ? "vedette" : "classique"}
              />
            </li>
            ))}
        </ul>
    </main>
  );
}
