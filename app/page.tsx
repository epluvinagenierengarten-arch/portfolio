import Hero from "./components/hero"
import Card from "./components/card"
import Bouton from "./components/bouton"
import { PROJETS } from "./Data/projet"
import NextBouton from "./components/next_bouton"

export default function Home() {
  // const projetsVedette = PROJETS.filter((p) => p.misEnAvant).slice(0,3)

  return (
    <main className="py-8">
      <Hero
        titre="Evaëlle Pluvinage-Nierengarten"
        texte="Étudiante en développement web."
      />
      <NextBouton
      label= "commencer ->"
      href="/a-propos"
      />
      {/* <section className="py-8">
        <h2 className="text-2xl font-semibold">Mes projets</h2>
        <ul className="mt-6 grid gap-6 md:grid-cols-3">
          {projetsVedette.map((projet) => (
            // <li key={projet.id}>
            //   <Card
            //     slug={projet.slug}
            //     title={projet.titre}
            //     category={projet.categorie}
            //     resume={projet.resume}
            //     etat="vedette"
            //   />
            // </li>
          ))}
        </ul>
        <div className="mt-8">
          <Bouton label="Voir tous les projets" href="/projets" variante="contour" />
        </div>
      </section> */}
    </main>
  )
}