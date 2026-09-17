import { Outlet, Link } from "react-router";

export default function Layout() {
    return (
        <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100 selection:bg-purple-500 selection:text-white">
            {/* Header */}
            <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
                <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    {/* Logo */}
                    <Link to="/" className="group flex items-center gap-2.5">
                        <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-linear-to-br from-purple-500 via-violet-600 to-indigo-600 shadow-lg shadow-purple-900/40 transition-transform duration-300 group-hover:scale-110">
                            <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="48" height="48" fill="white" fill-opacity="0.01" />
                                <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="#2F88FF" stroke="black" stroke-width="4" stroke-linejoin="round" />
                                <path d="M24 18C25.6569 18 27 16.6569 27 15C27 13.3431 25.6569 12 24 12C22.3431 12 21 13.3431 21 15C21 16.6569 22.3431 18 24 18Z" fill="#43CCF8" stroke="white" stroke-width="4" stroke-linejoin="round" />
                                <path d="M24 36C25.6569 36 27 34.6569 27 33C27 31.3431 25.6569 30 24 30C22.3431 30 21 31.3431 21 33C21 34.6569 22.3431 36 24 36Z" fill="#43CCF8" stroke="white" stroke-width="4" stroke-linejoin="round" />
                                <path d="M15 27C16.6569 27 18 25.6569 18 24C18 22.3431 16.6569 21 15 21C13.3431 21 12 22.3431 12 24C12 25.6569 13.3431 27 15 27Z" fill="#43CCF8" stroke="white" stroke-width="4" stroke-linejoin="round" />
                                <path d="M33 27C34.6569 27 36 25.6569 36 24C36 22.3431 34.6569 21 33 21C31.3431 21 30 22.3431 30 24C30 25.6569 31.3431 27 33 27Z" fill="#43CCF8" stroke="white" stroke-width="4" stroke-linejoin="round" />
                                <path d="M24 44H44" stroke="black" stroke-width="4" stroke-linecap="round" />
                            </svg>

                        </div>

                        <span className="bg-linear-to-r from-white via-slate-200 to-purple-300 bg-clip-text text-lg font-extrabold tracking-tight text-transparent sm:text-xl">
                            TinyExplorer
                        </span>
                    </Link>

                    {/* Navigation */}
                    <nav
                        aria-label="Main navigation"
                        className="flex items-center gap-1 rounded-2xl border border-white/10 bg-white/4 p-1 shadow-lg shadow-black/10"
                    >
                        <Link
                            to="/"
                            className="rounded-xl px-3 py-2 text-xs font-semibold text-slate-300 transition-all hover:bg-white/10 hover:text-white sm:px-4 sm:text-sm"
                        >
                            Home
                        </Link>

                        <Link
                            to="/movies"
                            className="rounded-xl px-3 py-2 text-xs font-semibold text-slate-300 transition-all hover:bg-white/10 hover:text-white sm:px-4 sm:text-sm"
                        >
                            Movies
                        </Link>
                    </nav>
                </div>
            </header>

            {/* Decorative page glow */}
            <div className="pointer-events-none fixed inset-x-0 top-16 z-0 h-96 overflow-hidden">
                <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-purple-600/10 blur-3xl" />
                <div className="absolute right-1/4 top-10 h-64 w-64 rounded-full bg-indigo-600/10 blur-3xl" />
            </div>

            {/* Main content */}
            <main className="relative z-10 mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="relative mt-auto overflow-hidden border-t border-white/10 bg-slate-950/80">
                <div className="absolute inset-0 bg-linear-to-t from-purple-950/20 to-transparent" />

                <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-7 px-4 py-8 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                        {/* Brand */}
                        <Link to="/" className="group flex items-center gap-3">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="48" height="48" fill="white" fill-opacity="0.01" />
                                <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="#2F88FF" stroke="black" stroke-width="4" stroke-linejoin="round" />
                                <path d="M24 18C25.6569 18 27 16.6569 27 15C27 13.3431 25.6569 12 24 12C22.3431 12 21 13.3431 21 15C21 16.6569 22.3431 18 24 18Z" fill="#43CCF8" stroke="white" stroke-width="4" stroke-linejoin="round" />
                                <path d="M24 36C25.6569 36 27 34.6569 27 33C27 31.3431 25.6569 30 24 30C22.3431 30 21 31.3431 21 33C21 34.6569 22.3431 36 24 36Z" fill="#43CCF8" stroke="white" stroke-width="4" stroke-linejoin="round" />
                                <path d="M15 27C16.6569 27 18 25.6569 18 24C18 22.3431 16.6569 21 15 21C13.3431 21 12 22.3431 12 24C12 25.6569 13.3431 27 15 27Z" fill="#43CCF8" stroke="white" stroke-width="4" stroke-linejoin="round" />
                                <path d="M33 27C34.6569 27 36 25.6569 36 24C36 22.3431 34.6569 21 33 21C31.3431 21 30 22.3431 30 24C30 25.6569 31.3431 27 33 27Z" fill="#43CCF8" stroke="white" stroke-width="4" stroke-linejoin="round" />
                                <path d="M24 44H44" stroke="black" stroke-width="4" stroke-linecap="round" />
                            </svg>


                            <div>
                                <p className="text-sm font-bold text-slate-200">
                                    Tiny Movie Explorer
                                </p>
                                <p className="text-xs text-slate-500">
                                    Discover your next favorite film
                                </p>
                            </div>
                        </Link>

                        {/* Footer links */}
                        <div className="flex items-center gap-5 text-sm text-slate-400 sm:gap-6">
                            <a
                                href="https://github.com/ridowan01/Tiny-Movie-Explorer"
                                target="_blank"
                                rel="noreferrer"
                                className="transition-colors hover:text-purple-300"
                            >
                                GitHub
                            </a>

                            <a
                                href="https://ridowan01.github.io/"
                                className="transition-colors hover:text-purple-300"
                            >
                                Portfolio
                            </a>

                            <Link
                                to="/movies"
                                className="transition-colors hover:text-purple-300"
                            >
                                Browse Movies
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-5 text-center sm:flex-row sm:text-left">
                        <p className="text-xs text-slate-500">
                            © 2026 Tiny Movie Explorer. All rights reserved.
                        </p>

                        <p className="text-xs text-slate-600">
                            Developed by Ridowan Ahmed
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}