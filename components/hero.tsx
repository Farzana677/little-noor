
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
            <div>
                <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800">
                    <Sparkles size={16} />
                    Little hearts, bright futures
                </span>

                <h1 className="max-w-xl text-5xl leading-tight font-extrabold tracking-tight text-slate-900 md:text-6xl">
                    Big discoveries for{" "}
                    <span className="text-emerald-700">little Muslims.</span>
                </h1>

                <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
                    A joyful place for little learners to explore Islamic values,
                    listen to wonderful stories, and grow with kindness every day.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                        href="/learn"
                        className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-7 py-4 font-bold text-white shadow-lg shadow-emerald-100 transition hover:-translate-y-0.5 hover:bg-emerald-800"
                    >
                        Explore Learning <ArrowRight size={18} />
                    </Link>

                    <a
                        href="#categories"
                        className="rounded-full border border-slate-200 bg-white px-7 py-4 font-bold text-slate-700 transition hover:bg-slate-50"
                    >
                        Discover activities
                    </a>
                </div>

                <p className="mt-6 text-sm text-slate-500">
                    Made with care for curious little minds, ages 3–8.
                </p>
            </div>

            <div className="relative flex min-h-80 items-center justify-center rounded-[2.5rem] bg-gradient-to-br from-emerald-100 via-amber-50 to-violet-100 p-10">
                <div className="absolute top-8 right-10 text-4xl">✨</div>
                <div className="absolute bottom-8 left-10 text-3xl">⭐</div>

                <div className="relative text-center">
                    <div className="text-8xl md:text-9xl">🌙</div>
                    <div className="mt-4 rounded-3xl bg-white/90 px-8 py-6 shadow-lg">
                        <p className="text-2xl font-extrabold text-emerald-800">
                            Bismillah!
                        </p>
                        <p className="mt-2 text-slate-600">
                            Every day is a chance to learn.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
