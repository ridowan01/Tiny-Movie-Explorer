import { createPortal } from "react-dom";

export default function Modal({ movie, onClose }) {
    const { name, image, language, officialSite, rating, premiered, type, summary } = movie;

    return createPortal(
        <div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="movie-modal-title"
            onClick={(event) => {
                if (event.target === event.currentTarget) {
                    onClose();
                }
            }}
        >
            <div className="relative my-auto max-h-[calc(100vh-2rem)] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-slate-900 text-white shadow-2xl shadow-purple-950/40 sm:max-h-[90vh]">
                {/* Background glow */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-32 -left-24 h-64 w-64 rounded-full bg-indigo-600/10 blur-3xl" />

                {/* Close icon */}
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close movie details"
                    className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-950/70 text-slate-300 backdrop-blur-md transition-all hover:rotate-90 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                >
                    <svg
                        aria-hidden="true"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6 6 18" />
                    </svg>
                </button>

                <div className="relative z-10 p-5 sm:p-7">
                    {/* Movie header */}
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                        {/* Poster */}
                        <div className="mx-auto w-40 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-slate-800 shadow-xl shadow-black/30 sm:mx-0 sm:w-44">
                            {image?.medium ? (
                                <img
                                    src={image.medium}
                                    alt={`${name || "Movie"} poster`}
                                    className="aspect-2/3 h-full w-full object-cover"
                                />
                            ) : (
                                <div className="flex aspect-2/3 items-center justify-center px-4 text-center text-sm text-slate-500">
                                    No poster available
                                </div>
                            )}
                        </div>

                        {/* Details */}
                        <div className="min-w-0 flex-1 text-center sm:pt-1 sm:text-left">
                            <span className="mb-2 inline-flex rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-300">
                                Movie details
                            </span>

                            <h2
                                id="movie-modal-title"
                                className="mt-2 wrap-break-word text-2xl font-black leading-tight text-white sm:text-3xl"
                            >
                                {name || "Untitled movie"}
                            </h2>

                            <div className="mt-5 grid grid-cols-2 gap-3 text-left">
                                <div className="rounded-xl border border-white/10 bg-white/4 p-3">
                                    <p className="text-xs text-slate-500">Rating</p>
                                    <p className="mt-1 font-semibold text-amber-300">
                                        {rating?.average ? `★ ${rating.average}/10` : "N/A"}
                                    </p>
                                </div>

                                <div className="rounded-xl border border-white/10 bg-white/4 p-3">
                                    <p className="text-xs text-slate-500">Premiered</p>
                                    <p className="mt-1 truncate font-semibold text-slate-200">
                                        {premiered || "N/A"}
                                    </p>
                                </div>

                                <div className="rounded-xl border border-white/10 bg-white/4 p-3">
                                    <p className="text-xs text-slate-500">Language</p>
                                    <p className="mt-1 truncate font-semibold text-slate-200">
                                        {language || "N/A"}
                                    </p>
                                </div>

                                <div className="rounded-xl border border-white/10 bg-white/4 p-3">
                                    <p className="text-xs text-slate-500">Type</p>
                                    <p className="mt-1 truncate font-semibold text-slate-200">
                                        {type || "N/A"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Summary */}
                    {summary && (
                        <div className="mt-7 border-t border-white/10 pt-6">
                            <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-purple-300">
                                Summary
                            </h3>

                            <div
                                className="prose prose-sm max-w-none text-sm leading-6 text-slate-400 prose-strong:text-slate-200 prose-a:text-purple-300"
                                dangerouslySetInnerHTML={{ __html: summary }}
                            />
                        </div>
                    )}

                    {/* Official site */}
                    {officialSite && (
                        <div className="mt-6">
                            <a
                                href={officialSite}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-purple-300 transition-colors hover:text-purple-200"
                            >
                                Visit official website
                                <svg
                                    aria-hidden="true"
                                    className="h-4 w-4"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4m-3-8h5v5m-5-1 5-5"
                                    />
                                </svg>
                            </a>
                        </div>
                    )}

                    {/* Footer actions */}
                    <div className="mt-7 border-t border-white/10 pt-5">
                        <button
                            type="button"
                            onClick={onClose}
                            className="w-full rounded-xl bg-linear-to-r from-purple-600 to-indigo-600 px-5 py-3 font-semibold text-white shadow-lg shadow-purple-900/30 transition-all duration-300 hover:-translate-y-0.5 hover:from-purple-500 hover:to-indigo-500 hover:shadow-purple-600/30 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-900 active:translate-y-0"
                        >
                            Close Details
                        </button>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}