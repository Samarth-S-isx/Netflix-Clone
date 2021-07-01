const APIKEY = "14f2e999086e390a1cc8ea06c41986fc"

const request = {
    fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetflixOriginal: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchCrimeMovies: `/discover/movie?api_key=${APIKEY}&with_genres=80`,
    fetchUpcoming: `/movie/upcoming?api_key=${APIKEY}&language=en-US`,
}

export default request