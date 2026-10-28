
import Link from "next/link";
import { ArrowLeft, BookOpen, Star } from "lucide-react";

const lessons = [
    {
        emoji: "🤲",
        title: "Everyday Duas",
        description: "Discover simple duas for everyday life.",
        level: "Beginner",
    },
    {
        emoji: "🌙",
        title: "The Five Pillars",
        description: "Learn about the five pillars of Islam.",
        level: "Beginner",
    },
    {
        emoji: "💛",
        title: "Kindness and Good Manners",
        description: "Explore kindness, honesty, and helping others.",
        level: "Beginner",
    },
    {
        emoji: "🕌",
        title: "Getting to Know the Mosque",
        description: "Discover what a mosque is and why it is special.",
        level: "Beginner",
    },
];

export default function IslamicLearningPage() {
    return (
        <main className="min-h-screen bg-[#fffdf7] px-6 py-10">
            <div className="mx-auto max-w-6xl">
                <Link
                    href="/learn"
                    className="inline-flex items-center gap-2 font-semibold text-emerald-800"
                >
                    <ArrowLeft size={18} />
                    Back to learning
                </Link>

                <section className="mt-8 rounded-[2rem] bg-emerald-800 px-8 py-12 text-white md:px-12">
                    <p className="font-semibold text-emerald-200">
                        LEARN WITH LITTLE NOOR
                    </p>
                    <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">
                        Islamic Learning 🌙
                    </h1>
                    <p className="mt-4 max-w-2xl leading-7 text-emerald-50">
                        Discover duas, learn about Islam, and practise good manners through
                        fun and simple lessons.
                    </p>
                </section>

                <section className="py-12">
                    <h2 className="text-3xl font-extrabold text-slate-900">
                        Choose a lesson
                    </h2>
                    <p className="mt-3 text-slate-600">
                        Start with any lesson that interests you.
                    </p>

                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {lessons.map((lesson) => (
                            <article
                                key={lesson.title}
                                className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-3xl">
                                    {lesson.emoji}
                                </div>

                                <h3 className="mt-5 text-xl font-bold text-slate-900">
                                    {lesson.title}
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    {lesson.description}
                                </p>

                                <div className="mt-5 flex items-center gap-2 text-sm text-emerald-700">
                                    <Star size={16} />
                                    {lesson.level}
                                </div>


                                <Link

                                    href={
                                        lesson.title === "Everyday Duas"
                                            ? "/learn/islamic/duas"
                                            : lesson.title === "The Five Pillars"
                                                ? "/learn/islamic/pillars"
                                                : lesson.title === "Kindness and Good Manners"
                                                    ? "/learn/islamic/kindness"
                                                    : lesson.title === "Getting to Know the Mosque"
                                                        ? "/learn/islamic/mosque"
                                                        : "/learn/islamic"
                                    }

                                    className="mt-6 block w-full rounded-full bg-emerald-700 px-4 py-3 text-center font-semibold text-white hover:bg-emerald-800"
                                >
                                    Start Lesson →
                                </Link>

                            </article>
                        ))}
                    </div>
                </section>

                <div className="rounded-3xl bg-violet-50 p-8">
                    <BookOpen size={30} className="text-violet-700" />
                    <h2 className="mt-4 text-2xl font-extrabold text-slate-900">
                        Learning begins with curiosity
                    </h2>
                    <p className="mt-2 leading-7 text-slate-600">
                        Take your time, ask questions, and enjoy discovering something new.
                    </p>
                </div>
            </div >
        </main >
    );
}
