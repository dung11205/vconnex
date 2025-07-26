const express = require('express');
const router = express.Router();

const products = [
  {
    "name": "AI Camera Hub V2",
    "slug": "ai-camera-hub-v2",
    "image": "/images/Anh-san-pham-ai-camera-hub-v2-canh-trai-2.webp",
    "images": [
      "/images/Anh-san-pham-ai-camera-hub-v2-canh-trai-2.webp",
      "/images/Anh-san-pham-ai-camera-hub-v2-canh-phai-2 (1).webp",
      "/images/Anh-san-pham-ai-camera-hub-v2-chinh-dien-2 (1).webp"
    ],
    "category": "Camera thông minh",
    "description": "AI Camera Hub V2 là thiết bị giám sát thông minh với công nghệ AI tiên tiến, hỗ trợ kết nối đa camera.",
    "specs": {
      "CPU": "Octa-core 64-bit",
      "Memory": "8GB LPDDR4",
      "Kết nối": "Wi-Fi, Ethernet",
      "Nguồn điện": "DC 12V",
      "Chất liệu": "Nhựa ABS + Kim loại"
    },
    "features": [
      "Hỗ trợ lên tới 12 camera",
      "Tương thích ONVIF và RTSP",
      "Bảo hành 24 tháng"
    ],
    "price": "15,950,000 VNĐ"
  },
  {
    "name": "Bộ điều khiển cửa cổng",
    "slug": "bo-dieu-khien-cua-cong",
    "image": "/images/bo-dieu-khien-cong-thong-minh-vconnex.webp",
    "images": [
      "/images/bo-dieu-khien-cong-thong-minh-vconnex.webp",
      "/images/Anh-san-pham-Bo-dieu-khien-cua-cong-4-1.jpg",
      "/images/vo-hop-dong-co-cong.jpg"
    ],
    "category": "Cổng - cửa thông minh",
    "description": "Bộ điều khiển cửa cổng thông minh, cho phép điều khiển từ xa qua ứng dụng di động.",
    "specs": {
      "Kết nối": "Wi-Fi",
      "Nguồn điện": "220V",
      "Chất liệu": "Nhựa ABS",
      "Tải trọng": "500kg"
    },
    "features": [
      "Điều khiển từ xa",
      "Tích hợp với hệ thống thông minh",
      "Bảo hành 12 tháng"
    ],
    "price": "2,500,000 VNĐ"
  },
  {
    "name": "Bộ điều khiển cửa cuốn",
    "slug": "bo-dieu-khien-cua-cuon",
    "image": "/images/bo-dieu-khien-cua-cuon-thong-minh-vconnex.webp",
    "images": [
      "/images/bo-dieu-khien-cua-cuon-thong-minh-vconnex.webp",
      "/images/anh-bo-dieu-khien-cua-cuon-ava4.jpg",
      "/images/anh-bo-dieu-khien-cua-cuon-ava5.jpg"
    ],
    "category": "Cổng - cửa thông minh",
    "description": "Bộ điều khiển cửa cuốn thông minh, tích hợp công nghệ điều khiển từ xa và an toàn.",
    "specs": {
      "Kết nối": "Wi-Fi",
      "Nguồn điện": "220V",
      "Chất liệu": "Nhựa ABS",
      "Tải trọng": "700kg"
    },
    "features": [
      "Điều khiển từ xa",
      "Cảm biến an toàn",
      "Bảo hành 12 tháng"
    ],
    "price": "2,700,000 VNĐ"
  },
  {
    "name": "Cảm biến hiện diện",
    "slug": "cam-bien-hien-dien",
    "image": "/images/cam-bien-hien-dien-300x300px.jpg",
    "images": [
      "/images/cam-bien-hien-dien-300x300px.jpg",
      "/images/cam-bien-hien-dien-vconnex-3 (1).png",
      "/images/cam-bien-hien-dien-vconnex-5.png"
    ],
    "category": "Cảm biến",
    "description": "Cảm biến hiện diện thông minh, phát hiện chuyển động với độ chính xác cao.",
    "specs": {
      "Kết nối": "Wi-Fi",
      "Nguồn điện": "220V",
      "Chất liệu": "Nhựa ABS",
      "Phạm vi phát hiện": "5m"
    },
    "features": [
      "Phát hiện chuyển động tự động",
      "Tích hợp hệ thống thông minh",
      "Bảo hành 12 tháng"
    ],
    "price": "1,200,000 VNĐ"
  },
  {
    "name": "Ổ cắm thông minh chống giật",
    "slug": "o-cam-thong-minh-chong-giat",
    "image": "/images/o-cam-thong-minh-chong-giat.webp",
    "images": [
      "/images/o-cam-thong-minh-chong-giat.webp",
      "/images/o-cam-thong-minh-Vconnex-5QVvo0.webp",
      "/images/o-cam-do-dien-nang-thong-minh-Vconnex-28g8NF.webp"
    ],
    "category": "Ổ cắm thông minh",
    "description": "Ổ cắm thông minh chống giật, đảm bảo an toàn điện gia dụng.",
    "specs": {
      "Kết nối": "Wi-Fi",
      "Nguồn điện": "220V",
      "Chất liệu": "Nhựa ABS",
      "Công suất tối đa": "2500W"
    },
    "features": [
      "Chống giật an toàn",
      "Điều khiển qua ứng dụng",
      "Bảo hành 12 tháng"
    ],
    "price": "350,000 VNĐ"
  },
  {
    "name": "USB Converter",
    "slug": "usb-converter",
    "image": "/images/USB-Converter.webp",
    "images": [
      "/images/USB-Converter.webp",
      "/images/USB-Converter-Vconnex-Smarthome-2.webp",
      "/images/USB-Converter-Vconnex-Smarthome-4.webp"
    ],
    "category": "Khác",
    "description": "USB Converter đa năng, hỗ trợ chuyển đổi cổng kết nối hiệu quả.",
    "specs": {
      "Kết nối": "Wi-Fi",
      "Nguồn điện": "220V",
      "Chất liệu": "Nhựa ABS",
      "Cổng USB": "2 cổng"
    },
    "features": [
      "Chuyển đổi đa năng",
      "Dễ dàng lắp đặt",
      "Bảo hành 12 tháng"
    ],
    "price": "150,000 VNĐ"
  },
  {
    "name": "Động cơ rèm thông minh",
    "slug": "dong-co-rem-thong-minh",
    "image": "/images/dong-co-rem-thong-minh.webp",
    "images": [
      "/images/dong-co-rem-thong-minh.webp",
      "/images/dong-co-rem-thong-minh.webp",
      "/images/dong-co-rem-thong-minh.webp"
    ],
    "category": "Rèm thông minh",
    "description": "Động cơ rèm thông minh, điều khiển rèm tự động qua ứng dụng.",
    "specs": {
      "Kết nối": "Wi-Fi",
      "Nguồn điện": "220V",
      "Chất liệu": "Nhựa ABS",
      "Tải trọng rèm": "50kg"
    },
    "features": [
      "Điều khiển từ xa",
      "Tích hợp hệ thống thông minh",
      "Bảo hành 12 tháng"
    ],
    "price": "1,800,000 VNĐ"
  },
  {
    "name": "Khóa thông minh cửa nhôm",
    "slug": "khoa-thong-minh-cua-nhom",
    "image": "/images/khoa-thong-minh-danh-cho-cua-nhom.webp",
    "images": [
      "/images/khoa-thong-minh-danh-cho-cua-nhom.webp",
      "/images/kich-thuoc-khoa-thong-minh-cua-nhom.jpg",
      "/images/anh-san-pham-khoa-cua-nhom-3.jpg"
    ],
    "category": "Khóa cửa thông minh",
    "description": "Khóa thông minh dành cho cửa nhôm, an toàn và tiện lợi.",
    "specs": {
      "Kết nối": "Wi-Fi",
      "Nguồn điện": "220V",
      "Chất liệu": "Nhựa ABS + Thép",
      "Phương thức mở": "Mã số, vân tay"
    },
    "features": [
      "Mở khóa bằng ứng dụng",
      "Tích hợp hệ thống thông minh",
      "Bảo hành 12 tháng"
    ],
    "price": "3,000,000 VNĐ"
  },
  {
    "name": "AI Camera Hub",
    "slug": "ai-camera-hub",
    "image": "/images/AI-Camera-Hub.webp",
    "images": [
      "/images/AI-Camera-Hub.webp",
      "/images/AI-camera-hub-6.png",
      "/images/AI-camera-hub-1.png"
    ],
    "category": "Camera thông minh",
    "description": "AI Camera Hub với tính năng giám sát thông minh và độ phân giải cao.",
    "specs": {
      "Kết nối": "Wi-Fi",
      "Nguồn điện": "220V",
      "Chất liệu": "Nhựa ABS",
      "Độ phân giải": "1080p"
    },
    "features": [
      "Giám sát đa điểm",
      "Tích hợp hệ thống thông minh",
      "Bảo hành 12 tháng"
    ],
    "price": "12,000,000 VNĐ"
  },
  {
    "name": "Bộ điều khiển hồng ngoại",
    "slug": "bo-dieu-khien-hong-ngoi",
    "image": "/images/bo-dieu-khien-hong-ngoai.webp",
    "images": [
      "/images/bo-dieu-khien-hong-ngoai.webp",
      "/images/bo-dieu-khien-hong-ngoai.webp",
      "/images/bo-dieu-khien-hong-ngoai.webp"
    ],
    "category": "Điều khiển hồng ngoại",
    "description": "Bộ điều khiển hồng ngoại thông minh, thay thế remote truyền thống.",
    "specs": {
      "Kết nối": "Wi-Fi",
      "Nguồn điện": "220V",
      "Chất liệu": "Nhựa ABS",
      "Phạm vi điều khiển": "10m"
    },
    "features": [
      "Điều khiển từ xa",
      "Tích hợp hệ thống thông minh",
      "Bảo hành 12 tháng"
    ],
    "price": "400,000 VNĐ"
  },
  {
    "name": "Cảm biến chuyển động",
    "slug": "cam-bien-chuyen-dong",
    "image": "/images/cam-bien-chuyen-dong.webp",
    "images": [
      "/images/cam-bien-chuyen-dong.webp",
      "/images/DSC06872.jpg",
      "/images/DSC06861.jpg"
    ],
    "category": "Cảm biến",
    "description": "Cảm biến chuyển động thông minh, kích hoạt đèn hoặc thiết bị tự động.",
    "specs": {
      "Kết nối": "Wi-Fi",
      "Nguồn điện": "220V",
      "Chất liệu": "Nhựa ABS",
      "Phạm vi phát hiện": "7m"
    },
    "features": [
      "Phát hiện chuyển động",
      "Tích hợp hệ thống thông minh",
      "Bảo hành 12 tháng"
    ],
    "price": "900,000 VNĐ"
  },
  {
    "name": "Cảm biến cửa",
    "slug": "cam-bien-cua",
    "image": "/images/cam-bien-cua-thong-minh.webp",
    "images": [
      "/images/cam-bien-cua-thong-minh.webp",
      "/images/anh-san-pham-cam-bien-cua-5.jpg",
      "/images/anh-san-pham-cam-bien-cua-2.jpg"
    ],
    "category": "Cảm biến",
    "description": "Cảm biến cửa thông minh, phát hiện trạng thái mở/đóng cửa.",
    "specs": {
      "Kết nối": "Wi-Fi",
      "Nguồn điện": "220V",
      "Chất liệu": "Nhựa ABS",
      "Phạm vi phát hiện": "5m"
    },
    "features": [
      "Phát hiện trạng thái cửa",
      "Tích hợp hệ thống thông minh",
      "Bảo hành 12 tháng"
    ],
    "price": "800,000 VNĐ"
  },
  {
    "name": "Công tắc cửa cuốn - cổng",
    "slug": "cong-tac-cua-cuon-cong",
    "image": "/images/cong-tac-cua-cuon-thong-minh.webp",
    "images": [
      "/images/cong-tac-cua-cuon-thong-minh.webp",
      "/images/cong-tac-rem-thong-minh-vconnex-1.jpg",
      "/images/cong-tac-rem-thong-minh-vconnex-2.jpg"
    ],
    "category": "Cổng - cửa thông minh",
    "description": "Công tắc thông minh cho cửa cuốn và cổng, điều khiển dễ dàng.",
    "specs": {
      "Kết nối": "Wi-Fi",
      "Nguồn điện": "220V",
      "Chất liệu": "Nhựa ABS",
      "Tải trọng": "600kg"
    },
    "features": [
      "Điều khiển từ xa",
      "Tích hợp hệ thống thông minh",
      "Bảo hành 12 tháng"
    ],
    "price": "1,500,000 VNĐ"
  },
  {
    "name": "Công tắc không dây",
    "slug": "cong-tac-khong-day",
    "image": "/images/cong-tac-khong-day-thong-minh.webp",
    "images": [
      "/images/cong-tac-khong-day-thong-minh.webp",
      "/images/cong-tac-khong-day-vconnex-2.jpg",
      "/images/cong-tac-khong-day-vconnex-3.jpg"
    ],
    "category": "Công tắc thông minh",
    "description": "Công tắc không dây thông minh, không cần đi dây điện.",
    "specs": {
      "Kết nối": "Wi-Fi",
      "Nguồn điện": "Pin AA",
      "Chất liệu": "Nhựa ABS",
      "Công suất": "1000W"
    },
    "features": [
      "Không cần đi dây",
      "Tích hợp hệ thống thông minh",
      "Bảo hành 12 tháng"
    ],
    "price": "300,000 VNĐ"
  },
  {
    "name": "Công tắc rèm thông minh",
    "slug": "cong-tac-rem-thong-minh",
    "image": "/images/cong-tac-rem-thong-minh.webp",
    "images": [
      "/images/cong-tac-rem-thong-minh.webp",
      "/images/Cong-tac-rem-thong-minh-4dM7gA.webp",
      "/images/Cong-tac-rem-thong-minhkV37c.webp"
    ],
    "category": "Công tắc thông minh",
    "description": "Công tắc rèm thông minh, điều khiển rèm tự động.",
    "specs": {
      "Kết nối": "Wi-Fi",
      "Nguồn điện": "220V",
      "Chất liệu": "Nhựa ABS",
      "Tải trọng rèm": "40kg"
    },
    "features": [
      "Điều khiển từ xa",
      "Tích hợp hệ thống thông minh",
      "Bảo hành 12 tháng"
    ],
    "price": "1,200,000 VNĐ"
  },
  {
    "name": "Công tắc bình nước nóng",
    "slug": "cong-tac-binh-nuoc-nong",
    "image": "/images/cong-tac-binh-nuoc-nong-thong-minh.webp",
    "images": [
      "/images/cong-tac-binh-nuoc-nong-thong-minh.webp",
      "/images/cong-tac-binh-nuoc-nong-thong-minh.webp",
      "/images/cong-tac-binh-nuoc-nong-thong-minh.webp"
    ],
    "category": "Công tắc thông minh",
    "description": "Công tắc thông minh cho bình nước nóng, tiết kiệm năng lượng.",
    "specs": {
      "Kết nối": "Wi-Fi",
      "Nguồn điện": "220V",
      "Chất liệu": "Nhựa ABS",
      "Công suất": "3000W"
    },
    "features": [
      "Tiết kiệm năng lượng",
      "Tích hợp hệ thống thông minh",
      "Bảo hành 12 tháng"
    ],
    "price": "500,000 VNĐ"
  },
  {
    "name": "Bộ điều khiển trung tâm",
    "slug": "bo-dieu-khien-trung-tam",
    "image": "/images/bo-dieu-khien-trung-tam.webp",
    "images": [
      "/images/bo-dieu-khien-trung-tam.webp",
      "/images/bo-dieu-khien-trung-tam.webp",
      "/images/bo-dieu-khien-trung-tam.webp"
    ],
    "category": "Điều khiển trung tâm",
    "description": "Bộ điều khiển trung tâm, quản lý toàn bộ hệ thống nhà thông minh.",
    "specs": {
      "Kết nối": "Wi-Fi",
      "Nguồn điện": "220V",
      "Chất liệu": "Nhựa ABS",
      "Số thiết bị hỗ trợ": "50 thiết bị"
    },
    "features": [
      "Quản lý tập trung",
      "Tích hợp hệ thống thông minh",
      "Bảo hành 12 tháng"
    ],
    "price": "5,000,000 VNĐ"
  },
  {
    "name": "Khóa thông minh cửa gỗ",
    "slug": "khoa-thong-minh-cua-go",
    "image": "/images/khoa-thong-minh-danh-cho-cua-go.webp",
    "images": [
      "/images/khoa-thong-minh-danh-cho-cua-go.webp",
      "/images/khoa-dien-tu-thong-minh-product3.jpg",
      "/images/khoa-dien-tu-thong-minh-product4.jpg"
    ],
    "category": "Khóa cửa thông minh",
    "description": "Khóa thông minh dành cho cửa gỗ, an toàn và hiện đại.",
    "specs": {
      "Kết nối": "Wi-Fi",
      "Nguồn điện": "220V",
      "Chất liệu": "Nhựa ABS + Thép",
      "Phương thức mở": "Mã số, vân tay"
    },
    "features": [
      "Mở khóa bằng ứng dụng",
      "Tích hợp hệ thống thông minh",
      "Bảo hành 12 tháng"
    ],
    "price": "2,800,000 VNĐ"
  },
  {
    "name": "Cảm biến khói",
    "slug": "cam-bien-khoi",
    "image": "/images/cam-bien-khoi-thong-minh.webp",
    "images": [
      "/images/cam-bien-khoi-thong-minh.webp",
      "/images/Cam-bien-khoi-Bluetooth-Mesh-Vconnex_1.webp",
      "/images/cam-bien-khoi-vconnex-2.png"
    ],
    "category": "Cảm biến",
    "description": "Cảm biến khói thông minh, cảnh báo sớm nguy cơ cháy nổ.",
    "specs": {
      "Kết nối": "Wi-Fi",
      "Nguồn điện": "220V",
      "Chất liệu": "Nhựa ABS",
      "Phạm vi phát hiện": "50m²"
    },
    "features": [
      "Cảnh báo khói",
      "Tích hợp hệ thống thông minh",
      "Bảo hành 12 tháng"
    ],
    "price": "1,000,000 VNĐ"
  },
  {
    "name": "Camera thông minh",
    "slug": "camera-thong-minh",
    "image": "/images/camera-thong-minh.webp",
    "images": [
      "/images/camera-thong-minh.webp",
      "/images/camera-ai-thong-minh-vconnex-1.jpg",
      "/images/camera-ai-thong-minh-vconnex-2.jpg"
    ],
    "category": "Camera thông minh",
    "description": "Camera thông minh với độ phân giải cao, hỗ trợ giám sát từ xa.",
    "specs": {
      "Kết nối": "Wi-Fi",
      "Nguồn điện": "220V",
      "Chất liệu": "Nhựa ABS",
      "Độ phân giải": "1080p"
    },
    "features": [
      "Giám sát từ xa",
      "Tích hợp hệ thống thông minh",
      "Bảo hành 12 tháng"
    ],
    "price": "2,000,000 VNĐ"
  },
  {
    "name": "Công tơ điện thông minh",
    "slug": "cong-to-dien-thong-minh",
    "image": "/images/cong-to-thong-minh.webp",
    "images": [
      "/images/cong-to-thong-minh.webp",
      "/images/cong-to-thong-minh.webp",
      "/images/cong-to-thong-minh.webp"
    ],
    "category": "Công tơ thông minh",
    "description": "Công tơ điện thông minh, theo dõi mức tiêu thụ điện năng.",
    "specs": {
      "Kết nối": "Wi-Fi",
      "Nguồn điện": "220V",
      "Chất liệu": "Nhựa ABS",
      "Điện áp": "220-240V"
    },
    "features": [
      "Theo dõi tiêu thụ điện",
      "Tích hợp hệ thống thông minh",
      "Bảo hành 12 tháng"
    ],
    "price": "1,500,000 VNĐ"
  },
  {
    "name": "Công tắc thông minh",
    "slug": "cong-tac-thong-minh",
    "image": "/images/cong-tac-thong-minh.webp",
    "images": [
      "/images/cong-tac-thong-minh.webp",
      "/images/cong-tac-thong-minh.webp",
      "/images/cong-tac-thong-minh.webp"
    ],
    "category": "Công tắc thông minh",
    "description": "Công tắc thông minh, điều khiển thiết bị từ xa qua ứng dụng.",
    "specs": {
      "Kết nối": "Wi-Fi",
      "Nguồn điện": "220V",
      "Chất liệu": "Nhựa ABS",
      "Công suất": "2000W"
    },
    "features": [
      "Điều khiển từ xa",
      "Tích hợp hệ thống thông minh",
      "Bảo hành 12 tháng"
    ],
    "price": "250,000 VNĐ"
  }
];

router.get('/', (req, res) => {
  const { category } = req.query;
  const filtered = category
    ? products.filter(p => p.category === category)
    : products;
  res.render('products', { products: filtered, currentCategory: category });
});

router.get('/:slug', (req, res) => {
  const product = products.find(p => p.slug === req.params.slug);
  if (!product) {
    return res.status(404).send('Không tìm thấy sản phẩm');
  }
  res.render('product-detail', { product });
});

module.exports = router;