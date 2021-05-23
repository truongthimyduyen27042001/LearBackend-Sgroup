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
             slug:'XEM-NGAY:-Rap-Việt-All-Star-Concert-mở-màn-với-loạt-sân-khấu-dàn-dựng-hoành-tráng,-các-rapper-bắn-rap-như-"súng-liên-thanh"!',
             title: 'XEM NGAY: Rap Việt All-Star Concert mở màn với loạt sân khấu dàn dựng hoành tráng, các rapper bắn rap như "súng liên thanh"!',
             content:'Mở đầu bức tâm thư, nhạc sĩ Nguyễn Văn Chung khẳng định các ca khúc mà anh viết đều thuộc quyền sở hữu của anh, không phải của người khác nên việc anh muốn bán cho ai là quyền cá nhân. Nhạc sĩ cho biết đây là hành động đúng luật và đúng thỏa thuận. Anh cũng nhấn mạnh trong công việc không nên câu nệ tình cảm cá nhân mà phải đặt sự chuyên nghiệp lên hàng đầu.'
         },
         {
            id:2,
            slug:'Thanh-Hóa-ghi-nhận-2-ca-mắc-Covid-19,-trong-đó-có-một-người-làm-nghề-xây-dựng-tự-do-về-từ-Hà-Nội',
            title: 'Thanh Hóa ghi nhận 2 ca mắc Covid-19, trong đó có một người làm nghề xây dựng tự do về từ Hà Nội',
            content:'Thì lần này, các rapper quen thuộc tại Rap Việt đã như một nghệ sĩ thực thụ khi hoà nhịp cùng dàn vũ công, tương tác cùng khán giả với cự ly gần và làm bùng nổ sự kiện ngay từ màn trình diễn mở đầu. Những câu "bắn" rap fast flow chắc chắn sẽ khiến ai thưởng thức đều phải "giật mình" vì sự trưởng thành không tưởng của các cựu thí sinh Rap Việt.'
         },
        {
            id:3,
            slug:'Nhân-viên-y-tế-kiệt-sức,-ngã-quỵ-giữa-trưa-hè-nắng-nóng-khi-lấy-mẫu-tại-Bắc-Ninh',
            title: 'Nhân viên y tế kiệt sức, ngã quỵ giữa trưa hè nắng nóng khi lấy mẫu tại Bắc Ninh',
            content:'Trong ngày, với mục tiêu lấy hơn 28.000 mẫu, 2 nhân viên y tế tại Trung tâm y tế huyện Quế Võ kiệt sức, được các y bác sĩ đồng nghiệp hỗ trợ, tiếp nước, sau đó dần ổn định sức khỏe. Hiện, tỉnh Bắc Ninh nói chung đang thần tốc trong mọi hoạt động, đặc biệt là công tác truy vết và xét nghiệm, để ngăn chặn, kiểm soát dịch bệnh.'
        },
        {
            id:4,
            slug:'Ảnh:-Hà-Nội-phong-tỏa-tạm-thời-tòa-Park-9,-khu-đô-thị-Times-City-sau-khi-ghi-nhận-ca-dương-tính-SARS-CoV-2',
            title: 'Ảnh: Hà Nội phong tỏa tạm thời tòa Park 9, khu đô thị Times City sau khi ghi nhận ca dương tính SARS-CoV-2',
            content:'Theo ghi nhận của chúng tôi, chính quyền địa phương lập hàng rào phong toả dưới chân toà Park 9. Người dân không được ra vào, mọi hoạt động mua bán thực phẩm được bảo vệ tiếp nhận rồi đưa vào bên trong cho cư dân.'
        }])
      } catch (error) {
        console.log(error)
        process.exit(1);
      }
}