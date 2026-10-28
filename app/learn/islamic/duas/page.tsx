
import Link from "next/link";
import { ArrowLeft, Heart, Moon, Star } from "lucide-react";

export default function DuasPage() {
    return (
        <main className="min-h-screen bg-[#fffdf7] px-6 py-10">
            <div className="mx-auto max-w-4xl">
                <Link
                    href="/learn/islamic"
                    className="inline-flex items-center gap-2 font-semibold text-emerald-800"
                >
                    <ArrowLeft size={18} />
                    Back to Islamic Learning
                </Link>

                <section className="mt-8 rounded-[2rem] bg-emerald-800 px-8 py-12 text-white">
                    <div className="text-5xl">🤲</div>
                    <p className="mt-5 font-semibold text-emerald-200">
                        LITTLE NOOR LESSON
                    </p>
                    <h1 className="mt-3 text-4xl font-extrabold">
                        Everyday Duas
                    </h1>
                    <p className="mt-4 leading-7 text-emerald-50">
                        Learn simple supplications to remember Allah throughout your day.
                    </p>
                </section>

                <section className="mt-8 rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="rounded-2xl bg-amber-100 p-3 text-amber-800">
                            <Moon size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">
                            Before eating
                        </h2>
                    </div>

                    <p className="mt-6 text-sm font-semibold text-emerald-700">
                        Arabic
                    </p>
                    <p dir="rtl" lang="ar" className="mt-2 text-right text-3xl leading-relaxed text-slate-900">
                        بِسْمِ اللَّهِ
                    </p>

                    <p className="mt-5 text-sm font-semibold text-emerald-700">
                        Transliteration
                    </p>
                    <p className="mt-2 text-xl font-semibold text-slate-800">
                        Bismillah
                    </p>

                    <p className="mt-5 text-sm font-semibold text-emerald-700">
                        Meaning
                    </p>
                    <p className="mt-2 leading-7 text-slate-600">
                        In the name of Allah.
                    </p>
                </section>

                <section className="mt-6 rounded-3xl bg-violet-50 p-8">
                    <div className="flex items-center gap-3">
                        <Heart className="text-violet-700" size={24} />
                        <h2 className="text-2xl font-bold text-slate-900">
                            Remember together
                        </h2>
                    </div>
                    <p className="mt-3 leading-7 text-slate-700">
                        Practise saying “Bismillah” with a parent before your next meal.
                    </p>
                </section>

                <div className="mt-8 flex items-center gap-2 text-sm text-slate-500">
                    <Star size={16} className="text-amber-500" />
                    One little step at a time!
                </div>
            </div>
        </main>
    );
}
