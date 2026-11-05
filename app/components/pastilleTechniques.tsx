const COMPETENCES = [
    { label: "Suite Adobe" },
    { label: "JavaScript" },
    { label: "Java" },
    { label: "Tailwind CSS" },
    { label: "Python" },
    {label: "HTML5"},
    {label: "CSS3"},
    {label: "MySQL"},
    {label: "Next.js"},
    {label:"Blender"},
    {label:"Canva"}
]

export default function Pastille() {
    return(
        <ul className="flex flex-wrap gap-2">
            {COMPETENCES.map((competence)=>(
                <li
                    key={competence.label}
                    className="rounded-full border border-neutral-200 px-4 py-1.5 text-sm text-neutral-600"
                >
                    {competence.label}
                </li>
            ))}
        </ul>
    )
}