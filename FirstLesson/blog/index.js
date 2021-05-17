const express=require('express')
const port=3000
const app=express()
const path=require('path')

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


app.get(('/'),(req,res)=>{
  res.render('index')
})
app.listen(port,()=>{
  console.log(`Example app listening is at : http:/localhost:${port}` )
})