import Contacts from "../components/contactCard";

const CONTACTS = [
  { label: "Mail", valeur: "evaelle@pluvinage.org" },
  { label: "Téléphone", valeur: "07 67 87 70 01 " },
  { label: "LinkedIn", valeur: "linkedin.com/in/evaëlle-pluvinage-nierengarten" }
]

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl text-white font-bold">La page des contacts</h1>
      <ul className="mt-8 grid gap-4 sm:grid-cols-3">
        {CONTACTS.map((contact)=>(
          <li key={contact.label}>
            <Contacts
              label={contact.label}
              valeur={contact.valeur}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}