
import Link from "next/link";
import { Moon, Menu } from "lucide-react";

export default function Navbar() {
    return (
        <header className="border-b border-emerald-100 bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <Link href="/" className="flex items-center gap-2">
                    <span className="rounded-2xl bg-emerald-100 p-3 text-emerald-700">
                        <Moon size={25} />
                    </span>

                    <span className="text-2xl font-extrabold text-emerald-800">
                        Little <span className="text-violet-600">Noor</span>
                    </span>
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    <Link href="/learn" className="text-slate-600 hover:text-emerald-700">
                        Learn
                    </Link>
                    <Link href="/stories" className="text-slate-600 hover:text-emerald-700">
                        Stories
                    </Link>
                    <a href="#parents" className="text-slate-600 hover:text-emerald-700">
                        For Parents
                    </a>
                </div>

                <Link
                    href="/learn"
                    className="hidden rounded-full bg-emerald-700 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800 sm:inline-block"
                >
                    Start Learning
                </Link>

                <button
                    type="button"
                    aria-label="Menu"
                    className="rounded-lg p-2 text-slate-700 md:hidden"
                >
                    <Menu size={25} />
                </button>
            </nav>
        </header>
    );
}
