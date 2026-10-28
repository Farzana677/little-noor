
import Link from "next/link";
import { ArrowLeft, Star } from "lucide-react";

const pillars = [
    {
        number: "1",
        title: "Shahada",
        description: "The declaration of faith.",
        emoji: "💚",
    },
    {
        number: "2",
        title: "Salah",
        description: "Praying to Allah.",
        emoji: "🤲",
    },
    {
        number: "3",
        title: "Zakat",
        description: "Giving to help people in need.",
        emoji: "💝",
    },
    {
        number: "4",
        title: "Sawm",
        description: "Fasting during Ramadan.",
        emoji: "🌙",
    },
    {
        number: "5",
        title: "Hajj",
        description: "The pilgrimage to Makkah.",
        emoji: "🕋",
    },
];

export default function PillarsPage() {
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

                <section className="mt-8 rounded-[2rem] bg-emerald-800 px-8 py-12 text-white md:px-12">
                    <p className="font-semibold text-emerald-200">
                        DISCOVER YOUR FAITH
                    </p>
                    <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">
                        The Five Pillars 🌙
                    </h1>
                    <p className="mt-4 max-w-2xl leading-7 text-emerald-50">
                        Learn about five important pillars of Islam through simple
                        explanations for little learners.
                    </p>
                </section>

                <section className="py-10">
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {pillars.map((pillar) => (
                            <article
                                key={pillar.number}
                                className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-2xl">
                                        {pillar.emoji}
                                    </span>
                                    <span className="text-sm font-bold text-emerald-700">
                                        Pillar {pillar.number}
                                    </span>
                                </div>

                                <h2 className="mt-5 text-xl font-bold text-slate-900">
                                    {pillar.title}
                                </h2>
                                <p className="mt-2 leading-7 text-slate-600">
                                    {pillar.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="rounded-3xl bg-violet-50 p-8">
                    <Star size={28} className="text-violet-700" />
                    <h2 className="mt-4 text-2xl font-extrabold text-slate-900">
                        Remember what you learned!
                    </h2>
                    <p className="mt-3 leading-7 text-slate-600">
                        Can you name all five pillars? Try remembering them with a parent.
                    </p>
                </section>
            </div>
        </main>
    );
}
