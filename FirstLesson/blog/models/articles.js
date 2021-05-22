let mongoose = require('mongoose')

//Ariticle Schema 
let articleSchema=mongoose.Schema({
    title:{
        type:String,
        require : true
    },
    author:{
        type:String,
        required:true
    },
    body:{
        type:String,
        require:true
    }
})

let Article=module.exports=mongoose.model('Article',articleSchema)