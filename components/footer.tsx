import { Heart, Moon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-emerald-100 bg-white px-6 py-12">
            <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                    <Link href="/" className="inline-flex items-center gap-2">
                        <span className="rounded-2xl bg-emerald-100 p-3 text-emerald-700">
                            <Moon size={24} />
                        </span>
                        <span className="text-2xl font-extrabold text-emerald-800">
                            Little <span className="text-violet-600">Noor</span>
                        </span>
                    </Link>

                    <p className="mt-4 max-w-xs leading-7 text-slate-600">
                        A joyful place for little Muslims to learn, explore, and grow
                        through stories and meaningful activities.
                    </p>
                </div>

                <div>
                    <h3 className="font-bold text-slate-900">Explore</h3>
                    <ul className="mt-4 space-y-3 text-slate-600">
                        <li><Link className="hover:text-emerald-700" href="/learn">Learning activities</Link></li>
                        <li><Link className="hover:text-emerald-700" href="/stories">Stories & narration</Link></li>
                        <li><Link className="hover:text-emerald-700" href="/#categories">All categories</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-slate-900">For Families</h3>
                    <ul className="mt-4 space-y-3 text-slate-600">
                        <li><Link className="hover:text-emerald-700" href="/#parents">For parents</Link></li>
                        <li><Link className="hover:text-emerald-700" href="/#parents">Our approach</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-slate-900">Our Mission</h3>
                    <p className="mt-4 leading-7 text-slate-600">
                        Helping children discover the joy of learning, one little step
                        at a time.
                    </p>
                </div>
            </div>

            <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-slate-100 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                {/* <p>© {new Date().getFullYear()} Little Noor. All rights reserved.</p>
                 */}
                <p>© 2026 Little Noor. All rights reserved.</p>
                <p className="flex items-center gap-1">
                    Made with <Heart size={15} className="fill-rose-500 text-rose-500" /> for little learners
                </p>
            </div>
        </footer>
    )
}