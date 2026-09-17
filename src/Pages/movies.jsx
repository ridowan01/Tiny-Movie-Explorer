import { useState, useEffect } from "react";
import { getMovies } from "../Services/get-movies";
import Card from "../Components/card";
import Modal from "../Components/modal"; // Import Modal here

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [searchedMovie, setSearchedMovie] = useState("");
    const [selectedMovie, setSelectedMovie] = useState(null); // Lifted state for modal

    useEffect(() => {
        async function fetchInitialMovies() {
            const data = await getMovies("");
            setMovies(data);
        }
        fetchInitialMovies();
    }, []);

    async function handleSubmitReload(event) {
        event.preventDefault();
        const title = searchedMovie.trim();
        const data = await getMovies(title);
        setMovies(data);
        setSearchedMovie("");
    }

    return (
        <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
            {/* Search section */}
            <section className="relative mb-10 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-4 shadow-2xl shadow-purple-950/20 backdrop-blur-xl sm:p-6">
                <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />

                <div className="relative z-10 mx-auto max-w-3xl text-center">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-purple-300">
                        Movie Explorer
                    </p>

                    <h1 className="text-2xl font-black tracking-tight text-white sm:text-3xl md:text-4xl">
                        Find your next favorite movie
                    </h1>

                    <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
                        Search through movies and discover something worth watching tonight.
                    </p>

                    <form
                        onSubmit={handleSubmitReload}
                        className="mt-6 flex w-full flex-col gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-2 shadow-xl sm:flex-row sm:p-2.5"
                    >
                        <label htmlFor="movie-search" className="sr-only">
                            Search for a movie
                        </label>

                        <div className="relative flex-1">
                            <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-500">
                                <svg
                                    aria-hidden="true"
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </span>

                            <input
                                id="movie-search"
                                type="search"
                                placeholder="Search a movie, e.g. Angry Birds"
                                value={searchedMovie}
                                onChange={(event) => setSearchedMovie(event.target.value)}
                                className="h-12 w-full rounded-xl border border-white/10 bg-white/6 pl-11 pr-4 text-sm text-white outline-none transition-all placeholder:text-slate-500 focus:border-purple-400/60 focus:bg-white/9 focus:ring-2 focus:ring-purple-500/20 sm:text-base"
                            />
                        </div>

                        <button
                            type="submit"
                            className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-purple-600 to-indigo-600 px-7 text-sm font-bold text-white shadow-lg shadow-purple-900/30 transition-all duration-300 hover:-translate-y-0.5 hover:from-purple-500 hover:to-indigo-500 hover:shadow-purple-600/30 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 focus:ring-offset-slate-950 active:translate-y-0 sm:w-auto sm:text-base"
                        >
                            <span>Search</span>
                            <svg
                                aria-hidden="true"
                                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 7l5 5m0 0-5 5m5-5H6"
                                />
                            </svg>
                        </button>
                    </form>
                </div>
            </section>

            {/* Results heading */}
            <div className="mb-5 flex items-end justify-between gap-4">
                <div>
                    <h2 className="text-xl font-bold text-white sm:text-2xl">
                        Movie results
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">
                        {movies?.length
                            ? `${movies.length} movie${movies.length === 1 ? "" : "s"} found`
                            : "Explore something new"}
                    </p>
                </div>
            </div>

            {/* Movies grid */}
            {movies?.length > 0 ? (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {movies.map((movie) => (
                        <article
                            key={movie.id}
                            className="group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 p-4 shadow-lg shadow-black/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-slate-900 hover:shadow-2xl hover:shadow-purple-950/30"
                        >
                            {/* Card glow */}
                            <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-purple-600/10 blur-3xl transition-opacity group-hover:bg-purple-600/25" />

                            <div className="relative z-10 mb-3 flex items-start justify-between gap-3">
                                <h3
                                    className="min-w-0 truncate text-base font-bold text-white transition-colors group-hover:text-purple-300 sm:text-lg"
                                    title={movie.name}
                                >
                                    {movie.name}
                                </h3>

                                <span className="shrink-0 rounded-full border border-purple-400/20 bg-purple-500/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-purple-300">
                                    Movie
                                </span>
                            </div>

                            <div className="relative z-10 flex-1">
                                <Card
                                    movie={movie}
                                    onOpenModal={() => setSelectedMovie(movie)}
                                />
                            </div>
                        </article>
                    ))}
                </div>
            ) : (
                <div className="rounded-3xl border border-dashed border-slate-700 bg-slate-900/40 px-6 py-16 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-300">
                        <svg
                            aria-hidden="true"
                            className="h-7 w-7"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.8"
                                d="m21 21-4.35-4.35m2.1-5.4a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
                            />
                        </svg>
                    </div>

                    <h3 className="text-lg font-bold text-white">No movies found</h3>
                    <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                        Try searching with a different movie title or explore another keyword.
                    </p>
                </div>
            )}

            {/* Modal */}
            {selectedMovie && (
                <Modal
                    movie={selectedMovie}
                    onClose={() => setSelectedMovie(null)}
                />
            )}
        </div>
    );
}