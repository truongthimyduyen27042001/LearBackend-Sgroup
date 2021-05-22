const mongoose=require('mongoose')

const ArticleModel=require('../model/article')

module.exports=async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/test', { 
            useNewUrlParser: true,
            useUnifiedTopology: true
         });
         console.log('connect to mongodb')

         await ArticleModel.deleteMany();
         await ArticleModel.insertMany([
            {
                id:1,
                title: "What You Need To Know About CSS Variables",
                url: 'https://tutorialzine.com/2016/03/what-you-need-to-know-about-css-variables/',
                src: 'https://tutorialzine.com/media/2016/03/css-variables.jpg',
                content:'Web applications become more and more powerful every year, but there is still room for desktop apps with full access to the hardware of your computer. Today you can create desktop apps using the already familiar HTML, JS and Node.js, then package it into an executable file and distribute it accordingly across Windows, OS X and Linux.'
            },
            {
                id:2,
                title: "Freebie: 4 Great Looking Pricing Tables",
                url: 'https://tutorialzine.com/2016/02/freebie-4-great-looking-pricing-tables/',
                src:'https://tutorialzine.com/media/2016/02/great-looking-pricing-tables.jpg',
                content:'Web applications become more and more powerful every year, but there is still room for desktop apps with full access to the hardware of your computer. Today you can create desktop apps using the already familiar HTML, JS and Node.js, then package it into an executable file and distribute it accordingly across Windows, OS X and Linux.'
            },
            {
                id:3,
                title: "20 Interesting JavaScript and CSS Libraries for February 2016",
                url: 'https://tutorialzine.com/2016/02/20-interesting-javascript-and-css-libraries-for-february-2016/',
                src: 'https://tutorialzine.com/media/2016/02/interesting-resources-february.jpg',
                content:'Web applications become more and more powerful every year, but there is still room for desktop apps with full access to the hardware of your computer. Today you can create desktop apps using the already familiar HTML, JS and Node.js, then package it into an executable file and distribute it accordingly across Windows, OS X and Linux.'
            },
            {
                id:4,
                title: "Quick Tip: The Easiest Way To Make Responsive Headers",
                url: 'https://tutorialzine.com/2016/02/quick-tip-easiest-way-to-make-responsive-headers/',
                src: 'https://tutorialzine.com/media/2016/02/quick-tip-responsive-headers.png',
                content:'Web applications become more and more powerful every year, but there is still room for desktop apps with full access to the hardware of your computer. Today you can create desktop apps using the already familiar HTML, JS and Node.js, then package it into an executable file and distribute it accordingly across Windows, OS X and Linux.'
            },
            {
                id:5,
                title: "Learn SQL In 20 Minutes",
                url: 'https://tutorialzine.com/2016/01/learn-sql-in-20-minutes/',
                src: 'https://tutorialzine.com/media/2016/01/learn-sql-20-minutes.png',
                content:'Web applications become more and more powerful every year, but there is still room for desktop apps with full access to the hardware of your computer. Today you can create desktop apps using the already familiar HTML, JS and Node.js, then package it into an executable file and distribute it accordingly across Windows, OS X and Linux.5'
            },
            {
                id:6,
                title: "Creating Your First Desktop App With HTML, JS and Electron",
                url: 'https://tutorialzine.com/2015/12/creating-your-first-desktop-app-with-html-js-and-electron/',
                src:  'https://tutorialzine.com/media/2015/12/creating-your-first-desktop-app-with-electron.png',
                content:'Web applications become more and more powerful every year, but there is still room for desktop apps with full access to the hardware of your computer. Today you can create desktop apps using the already familiar HTML, JS and Node.js, then package it into an executable file and distribute it accordingly across Windows, OS X and Linux.'
            }
    ])
      } catch (error) {
        console.log(error)
        process.exit(1);
      }
}