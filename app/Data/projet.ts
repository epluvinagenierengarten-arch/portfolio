export type Projet = {
  id: number
  slug: string
  titre: string
  annee:number
  resume: string
  description: string
  categorie: string
  misEnAvant: boolean
  image: string
}
 
export const PROJETS: Projet[] = [
  {
    id: 1,
    slug: "spacetogone",
    titre: "Spacetogone",
    annee: 2025,
    resume: "Jeu de plateau",
    description: "Creation d'un site internet pour la promotion d'un jeu de plateau créé en équipe lors de l'epic digital day, a remporte le prix du meilleur site lors de l'évènement",
    categorie: "Site",
    misEnAvant: true,
    image: "/projets/spacetogone.png"
  },
  {
    id: 2,
    slug: "orpaillage",
    titre: "Guyane sans saccage",
    annee: 2026,
    resume: "Projet transversal",
    description: "Creation d'un site internet lors du projet transversal, où l'objectif était de créer une association qui dénonçait l'orpaillage illégal en Guyane",
    categorie: "Site",
    misEnAvant: true,
    image: "/projets/orpaillage.png"
  },
  {
    id: 3,
    slug: "histoire",
    titre: "Histori'art",
    annee: 2026,
    resume: "Projet de fin d'année",
    description: "conception d'un site internet pour le jeu de carte histori'art, un jeu de carte conssacré à l'histoire de l'art",
    categorie: "Site",
    misEnAvant: true,
    image: "/projets/histoire.png"
  },
  {
    id: 4,
    slug: "eastcape",
    titre: "Eastcape",
    annee: 2026,
    resume: "Projet de fin d'année",
    description: "Développement d'un jeu vidéo naratif, sur le thème de la guerre froide",
    categorie: "jeu vidéo",
    misEnAvant: false,
    image: "/projets/eastcape.png"
  },
  {
    id: 5,
    slug: "dewey",
    titre: "Dewey",
    annee: 2026,
    resume: "Le potit robot",
    description: "Construction d'un petit robot, en ft. avec Terry",
    categorie: "Robot",
    misEnAvant: false,
    image: "/projets/dewey.png"
  },
]
