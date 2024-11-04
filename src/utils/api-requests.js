import axios from "axios"

const apiClient  = axios.create({
    baseURL: "https://charlies-nc-news.onrender.com/api",
    timeout: 2000,
})

export function getAllArticles(){
    return apiClient.get('/articles?limit=500')
    .then(({data}) => {
        return data
    })
}