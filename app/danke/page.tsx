import Link from "next/link"
export default function DankePage() {   
    return (
        <section className="min-h-[60vh] flex flex-col justify-center items-center bg-background-primary px-6 py-16">
            <div className="max-w-3xl text-center flex flex-col gap-2 "> 
                <h1 className="text-4xl font-bold mb-4">Danke für Ihre Nachricht!</h1>
                <p className="text-lg text-gray-600">
                    Wir haben Ihre Nachricht erhalten und werden uns so schnell wie möglich bei Ihnen melden.
                </p>
                <Link href="/" className="mt-4 p-2 px-2 w-full bg-black text-white border-2 border-black hover:bg-white hover:text-black">
                Zurück zur Homepage
                </Link>
            </div>
        </section>
    );
}