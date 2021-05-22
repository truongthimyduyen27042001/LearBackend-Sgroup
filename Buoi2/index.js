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
//Tưởng tượng đây bạn là chủ nhà hàng 
//1. Thuê thằng quản lý 
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

//Taji dday chúng ta sẽ viết các hàm code để xem cac yêu cầu được require nếu thực hiện thì next , 
//Ví dụ như muốn ngồi được trong nhà hàng thì phải mặc vest đi giày 

//Hàm này ở đây đang là mặc định dẫn đến folder public
app.use(express.static(PUBLIC_PATH));




//2.Mình là chủ là app, app thực hiện yêu cầu , cung cấp một đườn link '/', gửi dữ liệu lên trang đó là hello world
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