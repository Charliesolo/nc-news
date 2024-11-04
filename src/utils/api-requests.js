import axios from "axios"

const apiClient  = axios.create({
    baseURL: "https://charlies-nc-news.onrender.com/api",
    timeout: 2000,
})

export function getArticles(){
    const params = {
        id: 12345,
    }
    return apiClient.get('/articles?limit=500', params)
    .then(({data}) => {
        return data
    })
}

export function getArticleByID(articleID){
    return apiClient.get(`/articles/${articleID}`)
    .then(({data}) =>{
        return data.article
    })
}