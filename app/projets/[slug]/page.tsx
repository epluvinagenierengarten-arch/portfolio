import Image from "next/image"
import { notFound } from "next/navigation"
import { PROJETS } from "@/app/Data/projet"
 
type Props = {
  params: Promise<{ slug: string }>
}
 
export default async function PageProjet({ params }: Props) {
  const { slug } = await params
  const projet = PROJETS.find((p) => p.slug === slug)
 
  if (!projet) {
    notFound()
  }

  return (
    <article className="py-12">
      <h1 className="mt-2 text-4xl font-semibold">{projet.titre}</h1>
      <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden">
        <Image
          src={projet.image}
          alt={projet.titre}
          fill //remplit tout le 16/9
          className="object-cover"
        />
      </div>
      <p className="mt-6 max-w-xl text-neutral-600">{projet.description}</p>
    </article>
  )

}