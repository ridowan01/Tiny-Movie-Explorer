export async function getMovies(title) {
    let url = `https://api.tvmaze.com/shows`;
    if (title) {
        url = `https://api.tvmaze.com/search/shows?q=${title}`;
    }

    const response = await fetch(url);
    const moviesArr = await response.json();
    
    if (title) {
        return moviesArr.map((item) => item.show);
    }

    return moviesArr;
}