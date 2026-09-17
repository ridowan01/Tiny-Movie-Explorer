import { useNavigate } from "react-router";

export default function Home() {
    const navigate = useNavigate();

    function handleButtonClick() {
        navigate("/movies");
    }

    return (
        <div className="w-full px-4 sm:px-6 lg:px-8">
            <section className="relative isolate mx-auto flex min-h-105 max-w-7xl items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-slate-950 px-5 py-16 text-white shadow-2xl shadow-purple-950/30 sm:min-h-125 sm:px-10 md:px-16 lg:min-h-140">
                {/* Background gradients */}
                <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(79,70,229,0.3),transparent_35%)]" />

                <div className="absolute -left-24 -top-24 -z-10 h-64 w-64 rounded-full bg-purple-600/25 blur-3xl sm:h-80 sm:w-80" />
                <div className="absolute -bottom-32 -right-24 -z-10 h-72 w-72 rounded-full bg-indigo-600/25 blur-3xl sm:h-96 sm:w-96" />

                {/* Subtle grid pattern */}
                <div className="absolute inset-0 -z-10 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-size-[40px_40px] mask-[linear-gradient(to_bottom,black,transparent)]" />

                {/* Decorative stars */}
                <div className="absolute left-[12%] top-[20%] h-1.5 w-1.5 animate-pulse rounded-full bg-purple-300" />
                <div className="absolute right-[18%] top-[28%] h-1 w-1 animate-pulse rounded-full bg-indigo-300 delay-300" />
                <div className="absolute bottom-[22%] left-[25%] h-1 w-1 animate-pulse rounded-full bg-white delay-700" />

                <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
                    {/* Badge */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-300/20 bg-white/5 px-4 py-2 text-xs font-medium text-purple-200 backdrop-blur-md sm:text-sm">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />
                        Your next favorite movie is waiting
                    </div>

                    {/* Heading */}
                    <h1 className="max-w-3xl bg-linear-to-r from-white via-purple-200 to-indigo-300 bg-clip-text text-4xl font-black leading-[1.05] tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
                        Explore movies from around the world
                    </h1>

                    {/* Description */}
                    <p className="mt-6 max-w-xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7 md:text-lg">
                        Discover unforgettable stories, hidden gems, and your next cinematic
                        obsession—all in one place.
                    </p>

                    {/* Button */}
                    <div className="mt-9">
                        <button
                            type="button"
                            onClick={handleButtonClick}
                            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-linear-to-r from-purple-600 to-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-indigo-900/40 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-purple-600/30 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 focus:ring-offset-slate-950 active:translate-y-0 active:scale-95 sm:px-8 sm:py-4 sm:text-base"
                        >
                            {/* Shine effect */}
                            <span className="absolute inset-y-0 -left-20 w-12 rotate-12 bg-white/30 blur-sm transition-all duration-700 group-hover:left-[120%]" />

                            <span className="relative">Explore Now</span>

                            <svg
                                aria-hidden="true"
                                className="relative h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}