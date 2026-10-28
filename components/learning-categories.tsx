
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const categories = [
    {
        icon: "🌙",
        title: "Islamic Learning",
        description: "Discover duas, Islamic values, and the beauty of faith.",
        color: "bg-emerald-50",
        href: "/learn/islamic",
    },
    {
        icon: "📚",
        title: "Stories & Narration",
        description: "Enjoy meaningful stories filled with wonderful lessons.",
        color: "bg-violet-50",
        href: "/stories",
    },
    {
        icon: "🌱",
        title: "Good Habits",
        description: "Practise kindness, gratitude, patience, and good manners.",
        color: "bg-rose-50",
        href: "/learn",
    },
    {
        icon: "🎨",
        title: "Early Learning",
        description: "Explore letters, numbers, colours, and shapes through play.",
        color: "bg-sky-50",
        href: "/learn",
    },
];

export default function LearningCategories() {
    return (
        <section id="categories" className="bg-white px-6 py-20">
            <div className="mx-auto max-w-7xl">
                <div className="text-center">
                    <p className="font-bold tracking-widest text-emerald-700 uppercase">
                        Explore & discover
                    </p>
                    <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
                        A little something for every curious mind
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                        Learn through playful activities, beautiful stories, and
                        everyday adventures.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {categories.map((category) => (
                        <Link
                            key={category.title}
                            href={category.href}
                            className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className={`flex h-16 w-16 items-center justify-center rounded-2xl text-3xl ${category.color}`}>
                                {category.icon}
                            </div>

                            <h3 className="mt-6 flex items-center justify-between gap-2 text-xl font-bold text-slate-800">
                                {category.title}
                                <ArrowUpRight
                                    size={19}
                                    className="shrink-0 text-slate-400 transition group-hover:text-emerald-700"
                                />
                            </h3>

                            <p className="mt-3 leading-7 text-slate-600">
                                {category.description}
                            </p>

                            <span className="mt-5 inline-block font-semibold text-emerald-700">
                                Explore →
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
