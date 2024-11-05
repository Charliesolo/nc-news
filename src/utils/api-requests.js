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

export function setVotes(id, articleOrComment, incVotes){
    return apiClient.patch(`/${articleOrComment}/${id}`,{"inc_votes": incVotes}).then(({data}) => { 
            if(articleOrComment === 'articles'){
            return data.article.votes}
            if(articleOrComment === 'comments'){
            return data.comment.votes
        }
        })     
    
}

export function postComment(articleID, user, comment){
    return apiClient.post(`/articles/${articleID}/comments`, {"username": user, "body": comment })
    .then((response) => {
        console.log(response)
    })

}