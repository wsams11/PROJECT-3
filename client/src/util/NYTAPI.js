import axios from "axios";

const API = {
    searchNYT: function(topic) {
        const KEY = "B0ITxIJa6DghrD6AK4fL3PHPsimxAuC1";
        const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${topic}&api-key=${KEY}`;

        return axios.get(URL);
    }
}

export default API;