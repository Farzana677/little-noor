
import Link from "next/link";
import { ArrowLeft, BookOpen, Headphones, Heart } from "lucide-react";

const stories = [
    {
        emoji: "🌙",
        title: "The Little Moon",
        description: "A gentle bedtime story about wonder and gratitude.",
        lesson: "Be grateful",
        color: "bg-violet-100",
        duration: "4 min",
    },
    {
        emoji: "🐦",
        title: "The Kind Little Bird",
        description: "Discover how a small act of kindness can make a big difference.",
        lesson: "Show kindness",
        color: "bg-sky-100",
        duration: "5 min",
    },
    {
        emoji: "🌳",
        title: "The Thankful Tree",
        description: "A story about appreciating the blessings around us.",
        lesson: "Say Alhamdulillah",
        color: "bg-emerald-100",
        duration: "4 min",
    },
    {
        emoji: "⭐",
        title: "A Promise Kept",
        description: "A little adventure about honesty and keeping promises.",
        lesson: "Be honest",
        color: "bg-amber-100",
        duration: "6 min",
    },
    {
        emoji: "🤝",
        title: "Sharing Is Caring",
        description: "Two friends learn the joy of sharing with others.",
        lesson: "Learn to share",
        color: "bg-rose-100",
        duration: "5 min",
    },
    {
        emoji: "🛏️",
        title: "Sleepy Little Stars",
        description: "A peaceful bedtime tale to end the day with gratitude.",
        lesson: "Bedtime routine",
        color: "bg-indigo-100",
        duration: "3 min",
    },
];

export default function StoriesPage() {
    return (
        <main className="min-h-screen bg-[#fffdf7] px-6 py-10">
            <div className="mx-auto max-w-7xl">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 font-semibold text-emerald-800 hover:text-emerald-600"
                >
                    <ArrowLeft size={18} />
                    Back to home
                </Link>

                <section className="mt-8 overflow-hidden rounded-[2rem] bg-violet-900 px-8 py-12 text-white md:px-14 md:py-16">
                    <p className="font-semibold tracking-widest text-violet-200 uppercase">
                        Little stories, big lessons
                    </p>

                    <h1 className="mt-4 max-w-2xl text-4xl leading-tight font-extrabold md:text-5xl">
                        Open a book. Discover a world.
                    </h1>

                    <p className="mt-5 max-w-xl leading-7 text-violet-100">
                        Explore gentle tales that encourage kindness, honesty,
                        gratitude, and love for learning.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <span className="rounded-full bg-white/15 px-4 py-2 text-sm">
                            📚 Fun stories
                        </span>
                        <span className="rounded-full bg-white/15 px-4 py-2 text-sm">
                            🎧 Narration planned
                        </span>
                        <span className="rounded-full bg-white/15 px-4 py-2 text-sm">
                            🌙 Bedtime favourites
                        </span>
                    </div>
                </section>

                <section className="py-14">
                    <div className="mb-8">
                        <p className="font-bold tracking-widest text-emerald-700 uppercase">
                            Storytime
                        </p>
                        <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
                            Which story shall we explore?
                        </h2>
                        <p className="mt-3 text-slate-600">
                            Pick a story and discover its little lesson.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {stories.map((story) => (
                            <article
                                key={story.title}
                                className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className={`flex h-44 items-center justify-center ${story.color}`}>
                                    <span className="text-7xl" aria-hidden="true">
                                        {story.emoji}
                                    </span>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center justify-between gap-3 text-sm text-slate-500">
                                        <span className="flex items-center gap-1">
                                            <BookOpen size={15} />
                                            {story.duration}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Heart size={15} className="text-rose-500" />
                                            {story.lesson}
                                        </span>
                                    </div>

                                    <h3 className="mt-4 text-xl font-bold text-slate-900">
                                        {story.title}
                                    </h3>

                                    <p className="mt-3 leading-7 text-slate-600">
                                        {story.description}
                                    </p>

                                    <button
                                        type="button"
                                        disabled
                                        className="mt-6 flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-full bg-violet-100 px-5 py-3 font-bold text-violet-800"
                                        title="Story playback will be added later"
                                    >
                                        <Headphones size={18} />
                                        Coming soon
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
