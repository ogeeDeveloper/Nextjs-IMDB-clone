// Will use to fetch top rated and trending movies

// declare API key
const API_KEY = process.env.API_KEY

export default{
    fetchTrending:{
        title: "Trending",
        url: `/treding/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated:{
        title:"Top Rated",
        url:`/movie/top_rated?api_key=${API_KEY}&language=en-US`
    }
}