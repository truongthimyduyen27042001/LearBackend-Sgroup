const {model} = require('mongoose')

const ArticleModel=model('articles',{
    title:String,
    content:String,
    slug:String
})

module.exports=ArticleModel