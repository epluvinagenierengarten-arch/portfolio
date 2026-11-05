"use client"

import { useState } from "react"

type Props = {
    copiable: string
}

export default function BoutonCopier({copiable}:Props){
    const [copie,setCopie]= useState(false)

    async function copier() {
        await navigator.clipboard.writeText(copiable)
        setCopie(true)
        setTimeout(()=>setCopie(false),1000)
    }

    return(
        <button
        onClick={copier}
        className="rounded-lg border px-3 py-1 text-sm border-neutral-200 text-white cursor-pointer"
        >
            {copie 
            ? "Copié !"
            : "Copier"}
        </button>
    )
}