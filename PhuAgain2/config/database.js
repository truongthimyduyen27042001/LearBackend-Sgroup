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
         await ArticleModel.insertMany([{
             id:1,
             title: 'NS Nguyễn Văn Chung đăng tâm thư giữa "bão" Nathan Lee - Cao Thái Sơn, đáp trả thế nào khi bị nói "vì tiền bỏ bạn, toàn bài cũ rích"?',
             content:'Mở đầu bức tâm thư, nhạc sĩ Nguyễn Văn Chung khẳng định các ca khúc mà anh viết đều thuộc quyền sở hữu của anh, không phải của người khác nên việc anh muốn bán cho ai là quyền cá nhân. Nhạc sĩ cho biết đây là hành động đúng luật và đúng thỏa thuận. Anh cũng nhấn mạnh trong công việc không nên câu nệ tình cảm cá nhân mà phải đặt sự chuyên nghiệp lên hàng đầu.'
         },
         {
            id:2,
            title: 'NS Nguyễn Văn Chung đăng tâm thư giữa "bão" Nathan Lee - Cao Thái Sơn, đáp trả thế nào khi bị nói "vì tiền bỏ bạn, toàn bài cũ rích"?',
            content:'Mở đầu bức tâm thư, nhạc sĩ Nguyễn Văn Chung khẳng định các ca khúc mà anh viết đều thuộc quyền sở hữu của anh, không phải của người khác nên việc anh muốn bán cho ai là quyền cá nhân. Nhạc sĩ cho biết đây là hành động đúng luật và đúng thỏa thuận. Anh cũng nhấn mạnh trong công việc không nên câu nệ tình cảm cá nhân mà phải đặt sự chuyên nghiệp lên hàng đầu.'
         },
        {
            id:3,
            title: 'NS Nguyễn Văn Chung đăng tâm thư giữa "bão" Nathan Lee - Cao Thái Sơn, đáp trả thế nào khi bị nói "vì tiền bỏ bạn, toàn bài cũ rích"?',
            content:'Mở đầu bức tâm thư, nhạc sĩ Nguyễn Văn Chung khẳng định các ca khúc mà anh viết đều thuộc quyền sở hữu của anh, không phải của người khác nên việc anh muốn bán cho ai là quyền cá nhân. Nhạc sĩ cho biết đây là hành động đúng luật và đúng thỏa thuận. Anh cũng nhấn mạnh trong công việc không nên câu nệ tình cảm cá nhân mà phải đặt sự chuyên nghiệp lên hàng đầu.'
        },
        {
            id:4,
            title: 'NS Nguyễn Văn Chung đăng tâm thư giữa "bão" Nathan Lee - Cao Thái Sơn, đáp trả thế nào khi bị nói "vì tiền bỏ bạn, toàn bài cũ rích"?',
            content:'Mở đầu bức tâm thư, nhạc sĩ Nguyễn Văn Chung khẳng định các ca khúc mà anh viết đều thuộc quyền sở hữu của anh, không phải của người khác nên việc anh muốn bán cho ai là quyền cá nhân. Nhạc sĩ cho biết đây là hành động đúng luật và đúng thỏa thuận. Anh cũng nhấn mạnh trong công việc không nên câu nệ tình cảm cá nhân mà phải đặt sự chuyên nghiệp lên hàng đầu.'
        }])
      } catch (error) {
        console.log(error)
        process.exit(1);
      }
}