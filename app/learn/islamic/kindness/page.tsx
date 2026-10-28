
import Link from "next/link";
import { ArrowLeft, Heart, Star } from "lucide-react";

const goodHabits = [
    {
        emoji: "😊",
        title: "Speak kindly",
        description: "Use gentle words and speak politely to others.",
    },
    {
        emoji: "🤝",
        title: "Help others",
        description: "Help your family, friends, and people who need support.",
    },
    {
        emoji: "🙏",
        title: "Say thank you",
        description: "Show gratitude when someone does something kind for you.",
    },
    {
        emoji: "💚",
        title: "Tell the truth",
        description: "Be honest, even when telling the truth feels difficult.",
    },
];

export default function KindnessPage() {
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

                <section className="mt-8 rounded-[2rem] bg-rose-500 px-8 py-12 text-white md:px-12">
                    <p className="font-semibold text-rose-100">
                        A LITTLE LESSON WITH A BIG HEART
                    </p>
                    <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">
                        Kindness and Good Manners 💛
                    </h1>
                    <p className="mt-4 max-w-2xl leading-7">
                        Discover small ways to make the world a happier place through
                        kindness, honesty, and gratitude.
                    </p>
                </section>

                <section className="py-10">
                    <h2 className="text-3xl font-extrabold text-slate-900">
                        Four ways to show kindness
                    </h2>

                    <div className="mt-8 grid gap-5 sm:grid-cols-2">
                        {goodHabits.map((habit, index) => (
                            <article
                                key={habit.title}
                                className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-4xl">{habit.emoji}</span>
                                    <span className="text-sm font-bold text-rose-500">
                                        Tip {index + 1}
                                    </span>
                                </div>

                                <h3 className="mt-5 text-xl font-bold text-slate-900">
                                    {habit.title}
                                </h3>
                                <p className="mt-2 leading-7 text-slate-600">
                                    {habit.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="rounded-3xl bg-amber-50 p-8">
                    <Heart size={30} className="text-rose-500" />
                    <h2 className="mt-4 text-2xl font-extrabold text-slate-900">
                        Your kindness challenge!
                    </h2>
                    <p className="mt-3 leading-7 text-slate-700">
                        Today, do one kind thing for someone. You could share a toy, help
                        at home, or say something nice to a friend.
                    </p>
                    <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-amber-800">
                        <Star size={16} />
                        Small acts of kindness matter!
                    </div>
                </section>
            </div>
        </main>
    );
}
