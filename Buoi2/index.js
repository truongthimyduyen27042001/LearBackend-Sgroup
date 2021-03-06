// const express=require('express')
// const {join} = require('path');
// const mongoose = require('mongoose')


// const database = require('./config/database');
// const Article = require('./model/article');

// const PORT =3000;
// const PUBLIC_PATH = join(__dirname, 'public');
// const app=express()
// const ArticleModel=require('./model/article')

// database();



// app.use(express.static(PUBLIC_PATH));
// //cach 2 cua cai duoi 
// // (async()=>{
// //     await mongoose.connect('mongodb://localhost:27017/buoi2',{
// //         useNewUrlParser :true,
// //         useUnifiedTopology:true
// //     });
// // })


// mongoose.connect('mongodb://localhost:27017/buoi2',{
//     useNewUrlParser :true,
//     useUnifiedTopology:true
// }).then(() => {
//     console.log('Connected')    
//     ArticleModel.deleteMany();
//     ArticleModel.insertMany([
//         {
//             id:1,
//             title : 'Covid can quet Da Nang',
//             content: 'Lorem dshduhudsudsubdsubdsbsd' 
//         },
//         {
//             id:2,
//             title : 'Covid can quet Ha Noi ',
//             content: 'Lorem dshduhudsudsubdsubdsbsd' 
//         },
//         {
//             id:3,
//             title : 'Covid can quet Quang Nam',
//             content: 'Lorem dshduhudsudsubdsubdsbsd' 
//         },
//         {
//             id:4,
//             title : 'Covid can quet Ninh Binh',
//             content: 'Lorem dshduhudsudsubdsubdsbsd' 
//         }
//     ]);
// }).catch((error) =>{
//     console.log(error)
// })


// app.set('view engine', 'pug')
// app.set(express.static('views'))

// app.get('/',(req,res)=>{
//     // return res.send("Hello My Duyen");
//     return res.render('views/pages/home.pug');
// })

// app.get('/',(req,res)=>{
//     const ariticles=[
//         {
//             id:1,
//             title : 'Covid can quet Da Nang'
//         },
//         {
//             id:2,
//             title : 'Covid can quet Ha Noi '
//         },
//         {
//             id:3,
//             title : 'Covid can quet Quang Nam'
//         },
//         {
//             id:4,
//             title : 'Covid can quet Ninh Binh'
//         }
//     ];
//     // return res.send("Hello My Duyen");
//     return res.render('pages/home.pug',{
//         ariticles
//     });
// })

// app.get('/aritcle/add',(req,res)=>{
//     // return res.send("Hello My Duyen");
//     return res.render('views/pages/newArticle.pug');
// })

// app.post('/articles',(res,req,next)=>{

// })

// app.listen(PORT,()=>{
//     console.log(`Server is listening on ${PORT}`)
// })

// Bai cua anh phu 
//T?????ng t?????ng ????y b???n l?? ch??? nh?? h??ng 
//1. Thu?? th???ng qu???n l?? 
const express = require('express');
const {join} = require('path');

const database = require('./config/database');
const Article = require('./model/article');

const PORT = 3000;
const PUBLIC_PATH = join(__dirname, 'public');

const app = express();

database();

app.set('view engine', 'pug');
app.set('views', join(__dirname, 'views'));

//Taji dday ch??ng ta s??? vi???t c??c h??m code ????? xem cac y??u c???u ???????c require n???u th???c hi???n th?? next , 
//V?? d??? nh?? mu???n ng???i ???????c trong nh?? h??ng th?? ph???i m???c vest ??i gi??y 

//H??m n??y ??? ????y ??ang l?? m???c ?????nh d???n ?????n folder public
app.use(express.static(PUBLIC_PATH));




//2.M??nh l?? ch??? l?? app, app th???c hi???n y??u c???u , cung c???p m???t ???????n link '/', g???i d??? li???u l??n trang ???? l?? hello world
// app.get('/',function(req,res){
//     res.send("hello world")
// })


// Pages
app.get('/', async (req, res, next) => {
    const articles = await Article.find();
    return res.render('pages/home.pug', {
        articles
    });
})

app.get('/articles/new', (req, res, next) => {
    return res.render('pages/newArticle.pug');
})

//Rest APIs
app.post('/articles', (req, res, next) => {
    return res.json({
        message: 'Hello world'
    })
})

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
});