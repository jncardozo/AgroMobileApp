const BASE_API  = 'https://yts.am/api/v2/';
const BASE_API2 = 'https://webapiagro2020.azurewebsites.net/api/Item/';
const BASE_API3 = 'https://webapiagro2020.azurewebsites.net/api/Categoria?';
const BASE_API4 = 'https://webapiagro2020.azurewebsites.net/api/Localidad/';
const BASE_API5 = 'https://webapiagro2020.azurewebsites.net/api/Localidad/Location/';


class Api {
    async getSuggestion(/*id*/) {
        // const query = await fetch(`${BASE_API}movie_suggestions.json?movie_id=${id}`);        
        // const {data} = await query.json();
        // return data.movies;
        const query = await fetch(`${BASE_API4}`)
            .then((response) => response.json())
            .then((responseJson) => 
            {
                return responseJson;
            });
        // console.log("getSuggestion",query);    
        return query.data;
    }
    async getMovies() {                
        // const query = await fetch(`${BASE_API}list_movies.json?`);
        // const {data} = await query.json();        
        // return data.movies;
        const query = await fetch(`${BASE_API3}`)
            .then((response) => response.json())
            .then((responseJson) => 
            {
                return responseJson;
            });
        // console.log("getMovies categorias",query.data); 
        return query.data;
    }
    async searchMovie(title) {
        // console.log("search movie title", title);
        // const query = await fetch(`${BASE_API}list_movies.json?limit=1&sort_by=rating&query_term= ${title}`);
        // const {data} = await query.json();             
        // return data.movies;
        const query = await fetch(`${BASE_API4}${title}`)
            .then((response) => response.json())
            .then((responseJson) => 
            {
                return responseJson;
            });
        // console.log("searchMovie",query.data);
        return query.data;
    }
    async searchLocation(description) {
        // console.log("search movie title", title);
        // const query = await fetch(`${BASE_API}list_movies.json?limit=1&sort_by=rating&query_term= ${title}`);
        // const {data} = await query.json();             
        // return data.movies;
        const query = await fetch(`${BASE_API5}${description}`)
            .then((response) => response.json())
            .then((responseJson) => 
            {
                return responseJson;
            });
        // console.log("searchMovie",query.data);
        return query.data;
    }
}

export default new Api();