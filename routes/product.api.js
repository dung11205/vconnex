// routes/product.api.js
const express = require('express');
const router = express.Router();

const products = [
  {
    name: "AI Camera Hub V2",
    image: "/images/Anh-san-pham-ai-camera-hub-v2-canh-trai-2.webp",
    category: "Camera thông minh"
  },
  {
    name: "Bộ điều khiển cửa cổng",
    image: "/images/bo-dieu-khien-cong-thong-minh-vconnex.webp",
    category: "Cổng - cửa thông minh"
  },
  {
    name: "Bộ điều khiển cửa cuốn",
    image: "/images/bo-dieu-khien-cua-cuon-thong-minh-vconnex.webp",
    category: "Cổng - cửa thông minh"
  },
  {
    name: "Cảm biến hiện diện",
    image: "/images/cam-bien-hien-dien-300x300px.jpg",
    category: "Cảm biến"
  },
  {
    name: "Ổ cắm thông minh chống giật",
    image: "/images/o-cam-thong-minh-chong-giat.webp",
    category: "Ổ cắm thông minh"
  },
  {
    name: "USB Converter",
    image: "/images/USB-Converter.webp",
    category: "Khác"
  },
  {
    name: "Động cơ rèm thông minh",
    image: "/images/dong-co-rem-thong-minh.webp",
    category: "Rèm thông minh"
  },
  {
    name: "Khóa thông minh cửa nhôm",
    image: "/images/khoa-thong-minh-danh-cho-cua-nhom.webp",
    category: "Khóa cửa thông minh"
  },
  {
    name: "AI Camera Hub",
    image: "/images/AI-Camera-Hub.webp",
    category: "Camera thông minh"
  },
  {
    name: "Bộ điều khiển hồng ngoại",
    image: "/images/bo-dieu-khien-hong-ngoai.webp",
    category: "Điều khiển hồng ngoại"
  },
  {
    name: "Cảm biến chuyển động",
    image: "/images/cam-bien-chuyen-dong.webp",
    category: "Cảm biến"
  },
  {
    name: "Cảm biến cửa",
    image: "/images/cam-bien-cua-thong-minh.webp",
    category: "Cảm biến"
  },
  {
    name: "Công tắc cửa cuốn - cổng",
    image: "/images/cong-tac-cua-cuon-thong-minh.webp",
    category: "Cổng - cửa thông minh"
  },
  {
    name: "Công tắc không dây",
    image: "/images/cong-tac-khong-day-thong-minh.webp",
    category: "Công tắc thông minh"
  },
  {
    name: "Công tắc rèm thông minh",
    image: "/images/cong-tac-rem-thong-minh.webp",
    category: "Công tắc thông minh"
  },
  {
    name: "Công tắc bình nước nóng",
    image: "/images/cong-tac-binh-nuoc-nong-thong-minh.webp",
    category: "Công tắc thông minh"
  },
  {
    name: "Bộ điều khiển trung tâm",
    image: "/images/bo-dieu-khien-trung-tam.webp",
    category: "Điều khiển trung tâm"
  },
  {
    name: "Khóa thông minh cửa gỗ",
    image: "/images/khoa-thong-minh-danh-cho-cua-go.webp",
    category: "Khóa cửa thông minh"
  },
  {
    name: "Cảm biến khói",
    image: "/images/cam-bien-khoi-thong-minh.webp",
    category: "Cảm biến"
  },
  {
    name: "Camera thông minh",
    image: "/images/camera-thong-minh.webp",
    category: "Camera thông minh"
  },
  {
    name: "Công tơ điện thông minh",
    image: "/images/cong-to-thong-minh.webp",
    category: "Công tơ thông minh"
  },
  {
    name: "Công tắc thông minh",
    image: "/images/cong-tac-thong-minh.webp",
    category: "Công tắc thông minh"
  }
];  

router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;
