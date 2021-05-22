const {model}=require('mongoose')

const ArtilceModel=model('articles',{
    title:String,
    url:String,
    src:String,
    content:String
})

module.exports=ArtilceModel
