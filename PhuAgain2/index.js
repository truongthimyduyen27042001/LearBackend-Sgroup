const express=require('express')
const {join}=require('path')
const { createSecureContext } = require('tls')
const slug = require('slugify')


var bodyParser = require('body-parser')
// test
const methodOverride = require("method-override");



const database=require('./config/database')
const { create } = require('./model/article')
const Article = require('./model/article')

const PORT=3000
const PUBLIC_PATH=join(__dirname,'public')

const app=express()

database()


app.set('view engine', 'pug');
app.set('views', join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.use(express.static(PUBLIC_PATH))
// test


// end test

app.get('/',async(req,res)=>{
    const articles=await Article.find()
    return res.render('pages/home.pug',{
        articles
    })
})


app.get('/articles/new',(req,res)=>{
    return res.render('pages/newArticle.pug')
})

app.get('/articles/update',async(req,res)=>{
    return res.render('pages/updateArticle.pug')
})

app.get('/articles/:slug/update', async (req, res, next) => {
    const { slug } = req.params;
    const article = await Article.findOne({ slug });
    if (!article) {
        return res.render('pages/error.pug', {
            error: 'Not found article with title ' + slug
        });
    }
    return res.render('pages/updateArticle.pug', {
        article
    });
})



app.get('/articles/:slug', async (req, res) => {
    const { slug } = req.params;
    const article = await Article.findOne({ slug });
    if (!article) {
        return res.render('pages/error.pug');
    }
    return res.render('pages/detail.pug', {
        article
    });
})



app.post('/articles', async (req, res) => {
    let createSuccess = true;
    const articleExisted = await Article.findOne({title: req.body.title});
    if (articleExisted) {
        return res.render('pages/error.pug');
    }
    req.body.slug = slug(req.body.title);
    try {
        await Article.create(req.body);
    } catch (error) {
        console.log(error);
        createSuccess = false
    }
    return createSuccess ? res.redirect('/') : res.render('pages/error.pug');
})

// Thuc hien update, theo mang , test
app.post('/articles/:id/update',async(req,res)=>{
    const id=req.params.id;
    var updateArticle = {
        title:req.body.title,
        content:req.body.content
    };
    Article.findByIdAndUpdate(id,{
        $set:updateArticle
    }).then(article=>{
        res.redirect('/')
        res.article=article
    }).catch((error)=>{
        console.log(error)
    })
  
    console.log('thuc hien ham nay')
   
})



app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`)
})

