
import Link from "next/link";
import { ArrowLeft, Heart, Star } from "lucide-react";

const mosqueFacts = [
    {
        emoji: "🕌",
        title: "A special place",
        description:
            "A mosque is a place where Muslims gather to pray and worship Allah.",
    },
    {
        emoji: "🤲",
        title: "Praying together",
        description:
            "Muslims can pray together at the mosque and remember Allah.",
    },
    {
        emoji: "👋",
        title: "Kindness and respect",
        description:
            "We should be respectful, keep the mosque clean, and treat others kindly.",
    },
];

export default function MosquePage() {
    return (
        <main className="min-h-screen bg-[#fffdf7] px-6 py-10">
            <div className="mx-auto max-w-5xl">
                <Link
                    href="/learn/islamic"
                    className="inline-flex items-center gap-2 font-semibold text-emerald-800"
                >
                    <ArrowLeft size={18} />
                    Back to Islamic Learning
                </Link>

                <section className="mt-8 rounded-[2rem] bg-sky-700 px-8 py-12 text-white md:px-12">
                    <div className="text-5xl">🕌</div>
                    <p className="mt-5 font-semibold text-sky-100">
                        LETs EXPLORE
                    </p>
                    <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">
                        Getting to Know the Mosque
                    </h1>
                    <p className="mt-4 max-w-2xl leading-7 text-sky-50">
                        Discover what a mosque is and how Muslims come together to pray,
                        learn, and worship Allah.
                    </p>
                </section>

                <section className="py-10">
                    <h2 className="text-3xl font-extrabold text-slate-900">
                        Three things to discover
                    </h2>

                    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {mosqueFacts.map((fact) => (
                            <article
                                key={fact.title}
                                className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
                            >
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-50 text-3xl">
                                    {fact.emoji}
                                </div>
                                <h3 className="mt-5 text-xl font-bold text-slate-900">
                                    {fact.title}
                                </h3>
                                <p className="mt-3 leading-7 text-slate-600">
                                    {fact.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="rounded-3xl bg-amber-50 p-8">
                    <Heart size={28} className="text-rose-500" />
                    <h2 className="mt-4 text-2xl font-extrabold text-slate-900">
                        Your little challenge!
                    </h2>
                    <p className="mt-3 leading-7 text-slate-700">
                        If you visit a mosque with your family, remember to be kind,
                        respectful, and help keep the space clean.
                    </p>
                    <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-amber-800">
                        <Star size={16} />
                        Every good habit begins with a little step!
                    </div>
                </section>
            </div>
        </main>
    );
}
