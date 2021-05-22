const express=require('express')
const {join}=require('path')

const database=require('./config/database')
const Article = require('./model/article')

const PORT=3000
const PUBLIC_PATH=join(__dirname,'public')

const app=express()

database()

app.set('view engine', 'pug');
app.set('views', join(__dirname, 'views'));


app.use(express.static(PUBLIC_PATH))

app.get('/',async(req,res)=>{
    const articles=await Article.find()
    return res.render('pages/home.pug',{
        articles
    })
})
// render ra trang detail 

app.get('/:id',async(req,res)=>{
    const id=req.params.id;
    const article=await Article.findById(id);
    return res.render('pages/detail.pug',{
        article
    })
})

// app.get('/articles/detail', (req, res, next) => {
//     return res.render('pages/detail.pug');
// })

app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`)
})
