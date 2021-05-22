const express=require('express')
const port=3000
const path=require('path')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/blog',{
    useNewUrlParser :true,
    useUnifiedTopology:true
})

let db=mongoose.connection;
db.once('open',function(){
  console.log('Connect to mongodb')
})

db.on('eror',function(err){
  console.log(err)
})


const app=express()
app.use(express.static(path.join(__dirname,'/public')));

//Bring in models 
let Article = require('./models/articles')

Article.insertMany([
  {
      title: 'Đay là lee tuan',
      author: 'Covid can quet Da Nang',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
])
Article.deleteMany()
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));

app.get('/',function(req,res){
  let articles=Article.find({},function(err,articles){
    if(err){
      console.log(err)
    }
    else{
      res.render('main.pug',{
        title : 'Trương Thị Mỹ Duyên',
        articles : articles
      })
    }
 
  })
})

app.get('/trang-chu',(req,res)=>{
  res.render('add_article.pug',{
    title:'Add ArtiCle'
  })
})
app.listen(port,()=>{
  console.log(`Example app listening is at : http:/localhost:${port}` )
})