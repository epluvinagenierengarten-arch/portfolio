type Props = {
    titre: string
    texte: string
}

export default function Presentation({titre, texte}: Props){
    return(
        <div className="py-16">
            <h1 className="max-w-xl text-4xl text-white font-semibold">{titre}</h1>
            <p className="mt-4 max-w-lg text-neutral-600">{texte}</p>
        </div>
    )
}