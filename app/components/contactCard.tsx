import BoutonCopier from "./boutonCopier"

type Props = {
    label:string
    valeur:string
}

export default function Contacts({ label, valeur }:Props) {
    return (
        <article className="h-full rounded-lg border p-5 border-neutral-200">
            <p className="text-xs uppercase text-neutral-500">{label}</p>
            <p className="mt-1 break-all font-semibold text-white">{valeur}</p>
            <div className="mt-4">
                <BoutonCopier copiable={valeur} />
            </div>
        </article>
    )
}