import axios from "axios"

const apiClient  = axios.create({
    baseURL: "https://charlies-nc-news.onrender.com/api",
    timeout: 2000,
})

export function getArticles(){
    
    return apiClient.get('/articles', {params: {
        limit: 500
    }})
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

export function getCommentsByArticleID(articleID){
    return apiClient.get(`/articles/${articleID}/comments`)
    .then(({data}) =>{
        return data.comments
    })
}