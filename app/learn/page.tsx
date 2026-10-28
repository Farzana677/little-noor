
import Link from "next/link";
import { ArrowLeft, BookOpen, Star } from "lucide-react";

const lessons = [
    {
        emoji: "🌙",
        title: "Islamic Learning",
        description: "Discover duas, faith, and Islamic values.",
        color: "bg-emerald-50",
    },
    {
        emoji: "📚",
        title: "Stories & Narration",
        description: "Enjoy beautiful stories with meaningful lessons.",
        color: "bg-violet-50",
    },
    {
        emoji: "💛",
        title: "Good Habits",
        description: "Practise kindness, patience, and gratitude.",
        color: "bg-rose-50",
    },
    {
        emoji: "🔤",
        title: "Early Learning",
        description: "Explore letters, numbers, colours, and shapes.",
        color: "bg-sky-50",
    },
];

export default function LearnPage() {
    return (
        <main className="min-h-screen bg-[#fffdf7] px-6 py-10">
            <div className="mx-auto max-w-7xl">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 font-semibold text-emerald-800"
                >
                    <ArrowLeft size={18} />
                    Back to home
                </Link>

                <section className="mt-8 rounded-[2rem] bg-emerald-800 px-8 py-12 text-white md:px-14">
                    <p className="font-semibold text-emerald-200">
                        WELCOME, LITTLE LEARNER!
                    </p>
                    <h1 className="mt-4 max-w-2xl text-4xl font-extrabold md:text-5xl">
                        What shall we discover today?
                    </h1>
                    <p className="mt-4 max-w-xl leading-7 text-emerald-50">
                        Explore something new, enjoy a story, and grow a little every day.
                    </p>
                </section>

                <section className="py-12">
                    <h2 className="text-3xl font-extrabold text-slate-900">
                        Choose your adventure
                    </h2>


                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {lessons.map((lesson) => (
                            <Link
                                key={lesson.title}
                                href={
                                    lesson.title === "Islamic Learning"
                                        ? "/learn/islamic"
                                        : lesson.title === "The Five Pillars"
                                            ? "/stories"
                                            : "/learn"
                                }
                                className="block cursor-pointer rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div
                                    className={`flex h-16 w-16 items-center justify-center rounded-2xl text-3xl ${lesson.color}`}
                                >
                                    {lesson.emoji}
                                </div>

                                <h3 className="mt-5 text-xl font-bold text-slate-900">
                                    {lesson.title}
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    {lesson.description}
                                </p>

                                <span className="mt-6 inline-block font-semibold text-emerald-700">
                                    Explore →
                                </span>
                            </Link>
                        ))}
                    </div>

                </section>

                <div className="rounded-3xl bg-violet-50 p-8">
                    <BookOpen className="text-violet-700" size={32} />
                    <h2 className="mt-4 text-2xl font-extrabold text-slate-900">
                        Every day is a new adventure!
                    </h2>
                    <p className="mt-2 text-slate-600">
                        Little steps today, wonderful discoveries tomorrow.
                    </p>
                </div>
            </div>
        </main>
    );
}
