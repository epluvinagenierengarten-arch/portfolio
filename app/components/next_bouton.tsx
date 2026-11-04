import Link from "next/link";

type Props = {
    label: string,
    href: string
}

export default function NextBouton({label,href}: Props){
    return (
        <div className="mt-8">
            <Link href={href} className={`rounded px-5 py-2 text-white`}>
                {label}   
            </Link>
        </div>
    )
}