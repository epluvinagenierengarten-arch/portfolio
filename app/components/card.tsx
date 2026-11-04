import Link from "next/link"
import BoutonJaime from "./bouton-jaime"

type Props = {
    slug:string
    title:string
    category:string
    resume:string
    etat?: "classique" | "vedette"
}

export default function Card({ slug, title, category, resume, etat="classique" }:Props) {
    return (
        <article className="h-full rounded-lg border p-5 border-neutral-200">
            {etat === "vedette" && <p className="text-neutral-300">En vedette</p>}
            <p className="text-xs uppercase text-neutral-500">{category}</p>
            <h3 className="mt-1 font-semibold text-white text-foreground">
                <Link href={`/projets/${slug}`}>{title}</Link>
            </h3>
            <p className="mt-2 text-sm text-neutral-600">{resume}</p>
            <div className="mt-4">
                <BoutonJaime/>
            </div>
        </article>
    )
}