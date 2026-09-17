export default function Card({ movie, onOpenModal }) {
    const { name, image, rating, premiered } = movie;

    return (
        <div className="flex h-full flex-col">
            {/* Poster */}
            <div className="group/poster relative mb-4 aspect-2/3 overflow-hidden rounded-xl bg-slate-800">
                {image?.medium ? (
                    <img
                        src={image.medium}
                        alt={`${name || "Movie"} poster`}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-500 group-hover/poster:scale-105"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center text-center text-sm text-slate-500">
                        No poster available
                    </div>
                )}

                {/* Poster overlay */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent opacity-70" />

                {rating?.average && (
                    <div className="absolute right-2 top-2 flex items-center gap-1 rounded-full border border-white/10 bg-slate-950/75 px-2.5 py-1 text-xs font-bold text-amber-300 backdrop-blur-md">
                        <span aria-hidden="true">★</span>
                        {rating.average}
                    </div>
                )}
            </div>

            {/* Movie information */}
            <div className="flex flex-1 flex-col">
                <h3
                    className="mb-3 line-clamp-2 text-base font-bold leading-5 text-white"
                    title={name}
                >
                    {name || "Untitled movie"}
                </h3>

                <div className="mb-4 space-y-2 text-sm">
                    <div className="flex items-center justify-between gap-3 border-b border-white/5 pb-2">
                        <span className="text-slate-500">Rating</span>
                        <span className="font-medium text-slate-200">
                            {rating?.average ? `${rating.average}/10` : "N/A"}
                        </span>
                    </div>

                    <div className="flex items-center justify-between gap-3">
                        <span className="text-slate-500">Premiered</span>
                        <span className="truncate font-medium text-slate-200">
                            {premiered || "N/A"}
                        </span>
                    </div>
                </div>

                {/* Details button */}
                <button
                    type="button"
                    onClick={onOpenModal}
                    className="group mt-auto inline-flex w-full items-center justify-center gap-2 rounded-xl border border-purple-400/20 bg-purple-500/10 px-4 py-2.5 text-sm font-semibold text-purple-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-400/40 hover:bg-purple-600 hover:text-white hover:shadow-lg hover:shadow-purple-900/30 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-900 active:translate-y-0"
                >
                    <span>View Details</span>

                    <svg
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
    );
}