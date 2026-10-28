
import { BookOpen, Heart, ShieldCheck, Star } from "lucide-react";

const features = [
    {
        icon: BookOpen,
        title: "Meaningful Learning",
        description:
            "Help your child explore Islamic values, stories, duas, and early learning.",
        color: "bg-emerald-100 text-emerald-700",
    },
    {
        icon: Heart,
        title: "Learning with Kindness",
        description:
            "Encourage good habits, gratitude, patience, and kindness through activities.",
        color: "bg-rose-100 text-rose-700",
    },
    {
        icon: Star,
        title: "Learn at Their Own Pace",
        description:
            "Give little learners the freedom to explore and discover something new every day.",
        color: "bg-amber-100 text-amber-700",
    },
    {
        icon: ShieldCheck,
        title: "A Child-Friendly Experience",
        description:
            "Build a welcoming learning space designed with young children and families in mind.",
        color: "bg-violet-100 text-violet-700",
    },
];

export default function ParentSection() {
    return (
        <section id="parents" className="px-6 py-20">
            <div className="mx-auto max-w-7xl">
                <div className="grid items-center gap-12 md:grid-cols-2">
                    <div>
                        <p className="font-bold tracking-widest text-emerald-700 uppercase">
                            For parents
                        </p>

                        <h2 className="mt-3 text-3xl font-extrabold text-slate-900 md:text-4xl">
                            Little steps today, a brighter tomorrow.
                        </h2>

                        <p className="mt-5 leading-8 text-slate-600">
                            Little Noor makes learning joyful through stories, activities,
                            and lessons that encourage curiosity, confidence, and kindness.
                        </p>

                        <p className="mt-4 leading-8 text-slate-600">
                            Our goal is to help families make learning a happy part of
                            everyday life.
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {features.map((feature) => {
                            const Icon = feature.icon;

                            return (
                                <article
                                    key={feature.title}
                                    className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm"
                                >
                                    <div
                                        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${feature.color}`}
                                    >
                                        <Icon size={24} />
                                    </div>

                                    <h3 className="mt-4 font-bold text-slate-900">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-slate-600">
                                        {feature.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
