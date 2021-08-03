const product = [
  {
    id: "1",
    main_img: ["http://styleguru.vn/wp-content/uploads/2021/03/kieu-vay-dam-xoe-cong-chua-1.jpg", "https://cf.shopee.vn/file/abf29ead7cb6ae33d2ee074721fb6ea3", "https://lamdepwiki.com/wp-content/uploads/2019/07/mau-vay-lien-than-dep-5.jpg", "https://media3.scdn.vn/img3/2019/8_1/HgDzGQ.png" ],  
    name: "Váy trắng mùa hè năng động",
    price: 270000,
    star: "4",
    stock: "199",
    sale_percent: "0",
    sold: "999",
    shop: "luon_vui_tuoi_official",
    shop_img: "data:image/png;base64,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",
    detail: "𝑪𝑪𝑯𝑨𝑻𝑪𝑳𝑶𝑻𝑯𝑬𝑺\nTHƯƠNG HIỆU THỜI TRANG THIẾT KẾ CAO CẤP\nTHÔNG TIN SẢN PHẨM\n- Sản phẩm: Váy cổ nơ khuy bèo TT\n- Mã sản phẩm: 11VHV0034XT.\n- Màu sắc : Xanh.\n- Kiểu dáng: Xoè.\n- Chất liệu: Voan..\nForm chuẩn với vóc dáng phụ nữ Việt Nam\n\n⭐Bảng kích thước/(CM)\n\nS:   Chiều dài: 33.5          Vòng eo: 62               Vòng hông: 88\n\nM:   Chiều dài: 34             Vòng eo: 66              Vòng hông: 92\n\nL:   Chiều dài: 34.5           Vòng eo: 70             Vòng hông: 96\n\nXL:   Chiều dài: 35            Vòng eo: 74             Vòng hông: 100\n\n⭐ Vui lòng cho phép sai số 1-3cm về số đo do cách đo lường thủ công.\n\n    #women #Korean #fashion #Casual #HighWaist #Slim #Plain #trend #Culottes #Bandage #autumn #Oversize",
    rating: "2",
    accessor: [
      {
        name: "ngochan113",
        content: "Váy xinh y như hình shop đăng nhé. Màu cũng rất đẹp. Tiếc là shop không đăng màu hình váy vàng lên để mọi người nhìn thấy và có thêm lựa chọn. Rất hài lòng.",
        star: "4",
        date: "12/07/2021",
        img: ["https://prices.vn/storage/photo/product/vay-hai-day-ngoc-5-tang-v1081-co-mut-nguc-1626267190582.png", "https://cf.shopee.vn/file/551a28277279e96d345b26f0b99725fb", "https://cf.shopee.vn/file/6b37fc6ceb80a4642a0a4499473ca9ee"]
      },
      {
        name: "nguyenhonghanh936",
        content: "Chất lượng sản phẩm tuyệt vời. Đóng gói sản phẩm rất đẹp và chắc chắn. Shop phục vụ rất tốt. Rất đáng tiền. Chất lượng sản phẩm tuyệt vời. Đóng gói sản phẩm rất đẹp và chắc chắn. Shop phục vụ rất tốt. Rất đáng tiền.",
        star: "4",
        date: "21/07/2021",
        img: ["https://cf.shopee.vn/file/8057705a10a5cba2a3e986e85304818e", "https://cf.shopee.vn/file/97834ffc39909d616d6f8cbfafdda2fb_tn", "https://ayleendress.com/img-20200729-215106.jpg"]
      }
    ],
    color: ["Yellow", "Blue", "Red", "Violet", "Green", "Pink"],
    size: ["XS", 'S', 'L', 'XL'],
    properties: ["XS", 'S', 'L', 'XL'],
    related: ["14","15","16"],
    location: 'TP.Hồ Chí Minh',
  },
  {
    id: "2",
    main_img: ["https://cdn.tgdd.vn/Products/Images/3357/77012/bhx/banh-cracker-vi-rau-afc-hop-200g-201912151449013041.jpg", "https://cdn.tgdd.vn/Products/Images/3357/77012/bhx/banh-cracker-vi-rau-afc-hop-200g-201912151449015652.jpg", "https://cdn.tgdd.vn/Products/Images/3357/77012/bhx/banh-cracker-vi-rau-afc-hop-200g-201912151449024848.jpg", "https://cdn.tgdd.vn/Products/Images/3357/77012/bhx/banh-cracker-vi-rau-afc-hop-200g-201912151449021896.jpg" ],  
    name: "Bánh cracker vị rau AFC",
    price: 28600,
    star: "5",
    stock: "934",
    sold: "10",
    shop: "Kinh đô",
    shop_img: "data:image/png;base64,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",
    detail: "Bánh có bổ sung khoai tây, cung cấp năng lượng, protein, chất xơ, đặc biệt là vitamin D và canxi giúp xương chắc khỏe và đồng thời tăng cường hệ tiêu hóa. Bánh cracker vị rau AFC Dinh Dưỡng hộp 200g thích hợp làm món ăn nhẹ bổ dưỡng cho những người bận rộn.\nBánh quy dinh dưỡng vị rau AFC hộp 200g là một trong những sản phẩm của công ty bánh kẹo Kinh Đô được nhiều người yêu thích. Bánh được làm từ nguồn nguyên liệu chất lượng đã qua kiểm định.\nSản phẩm không có đường hóa học, không sử dụng các hóa chất độc hại và đã qua kiểm nghiệm đảm bảo an toàn cho sức khỏe người dùng.\nĐối tượng sử dụng: Trẻ em từ 24 tháng tuổi trở lên.",
    rating: "1",
    accessor: [
      {
        name: "binhminh211",
        content: "Cái bánh này mình để ăn sáng cũng được luôn đó, bánh mặn chứ không phải ngọt nè mình ăn rồi uống thêm ly sữa nữa là ok luôn, bánh giòn thơm",
        star: "5",
        date: "30/07/2021",
        img: ["https://cdn-images.kiotviet.vn/shoptanhung/c0c3425cd4f2462dbcebcd0be0260a1b.jpeg", "http://asha.com.vn/upload/product/kinhdo-10-4456.jpg", "https://media3.scdn.vn/img3/2019/1_30/rCD765.jpg"]
      }
    ],
    color: [],
    size: [],
    related: ["17","18","19"]
  },
  {
      id: "3",
      main_img: ["https://file.hstatic.net/1000321355/file/mua-dam-vay-dep-3_1c62c63733fc4f8d942492b832ae6d2e_grande.jpg"],
      sale_percent: "50",
      name: "Váy trắng bạn nữ cá tính",
      first_price: 450000,
      price: 225000,
      star: '5',
      location: 'TP.Hồ Chí Minh',
      stock: "45"
  },
  {
      id: "4",
      main_img: ["https://kapani.com.vn/wp-content/uploads/2018/09/kapani-005.jpg"],
      sale_percent: "30",
      name: "Bộ 3 nồi chống dính vân đá ceramic",
      first_price: 1450000,
      price: 1015000,
      star: '4',
      location: 'TP.Hồ Chí Minh',
      stock: "20"
  },
  {
      id: "5",
      main_img: ["https://didongviet.vn/pub/media/catalog/product/i/p/iphone-11-64gb-chinh-hang_1_3.jpg"],
      sale_percent: "10",
      name: "Điện thoại iphone 11 64GB",
      first_price: 13000000,
      price: 11700000,
      star: '4',
      location: 'TP.Hồ Chí Minh',
      stock: "657"
  },
  {
      id: "6",
      main_img: ["https://vidatuixachlouiskimmi.com/wp-content/uploads/2018/09/TB2otgNhvxNTKJjy0FjXXX6yVXa_2869830957.jpg"],
      sale_percent: "13",
      name: "Ví nam đẹp chất lượng",
      first_price: 360000,
      price: 300000,
      star: '5',
      location: 'Tây Ninh',
      stock: "78"
  },
  {
      id: "7",
      main_img: ["https://hc.com.vn/i/ecommerce/media/00032078_FEATURE_59920.jpg"],
      sale_percent: "20",
      name: "Tủ lạnh LG Inverter 2021",
      first_price: 18000000,
      price: 14400000,
      star: '4',
      location: 'TP.Hồ Chí Minh',
      stock: "123"
  },
  {
      id: "8",
      main_img: ["https://product.hstatic.net/1000148058/product/upload_689d150f2233440a89723e93365bfbce_1024x1024.jpg"],
      name: "Mì 3 miền tôm chua cay",
      stock: "30"
  },
  
  {
    id: "9",
    main_img: ["https://cdn.nguyenkimmall.com/images/detailed/707/10047640-may-choi-game-sony-ps4-pro-1tb-om2-bundle-cuh-7218b-1.jpg"],
    sale_percent: "10",
    properties: ['Normal', 'Standard', 'Premium'],
    shop: 'GameStop',
    shopID: "GameStop",
    name: "Máy chơi game Playstation 4",
    first_price: 10000000,
    price: 8999000,
    star: '4',
    location: 'TP.Hồ Chí Minh',
    stock: "5"
},
  {
    id: '10',
    main_img: ["https://cdn.vjshop.vn/hightech/may-choi-game/ps5/sony-ps-5-1.jpg"],
    sale_percent: "15",
    shop: 'GameStop',
    shopID: "GameStop",
    properties: ['Normal', 'Standard', 'Premium'],
    name: "Máy chơi game Playstation 5",
    first_price: 14999000,
    price: 12750000,
    star: '5',
    location: 'TP.Hồ Chí Minh',
    stock: "9"
},
  {
    id: '11',
    main_img: ["https://www.electrolux.vn/globalassets/appliances/stovehob/egt7838ck_vn_700x700-cropped.png?preset=medium"],
    sale_percent: "20",
    shop: "abc",
    shopID: "abc",
    properties: ['Normal', 'Standard', 'Premium'],
    name: "Bếp ga Potenza 78cm với 3 mâm chia lửa",
    first_price: 6989999,
    price: 5591999,
    star: '4',
    location: 'TP.Hồ Chí Minh',
    stock: "8"
},
  {
    id: '12',
    main_img: ["https://www.electrolux.vn/globalassets/appliances/stovehob/etd29kc_th_700x700-cropped.png?preset=medium"],
    sale_percent: "",
    name: "Bếp nấu điện từ để bàn kích thước 30cm",
    first_price: 0,
    price: 1389999,
    star: '4',
    location: 'TP.Hồ Chí Minh',
    stock: "653"
},
  {
    id: '13',
    main_img: ["https://cdn.nguyenkimmall.com/images/thumbnails/600/336/detailed/618/10044194-chao-chong-dinh-goldsun-fp-gsc628-1.jpg"],
    sale_percent: "53",
    name: "Chảo chống dính Goldsun FP-GSC628",
    first_price: 210000,
    price: 99000,
    star: '4',
    location: 'TP.Hồ Chí Minh',
    stock: "144"
},
    {
      id: '14',
      main_img: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ssNkD2gu0S8243do-mGZSKSiXMAyM5qCGq4Z91DyutQALqXtHIliMjOudIDIvHGGQ3_QYUSL&usqp=CAc"],
      sale_percent: "50",
      name: "Đầm - váy trễ vai voan tơ 2 màu",
      first_price: 260000,
      price: 130000,
      star: '4',
      location: 'TP.Hồ Chí Minh',
      sold: '1k',
      stock: "3"
  },
  {
    id: '15',
    main_img: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0KN0h_JaBOWNphI7N3KKRWPWu5HoZPFBf2ZaCzPxFUkTPyp-SrjfqI4ER2EoDkptIh3whAl0R&usqp=CAc"],
    sale_percent: "",
    name: "Đầm body 2 dây rút dây",
    first_price: 0,
    price: 99000,
    star: '3',
    location: 'TP.Hồ Chí Minh',
    sold: '991',
    stock: "45"
  },
  {
    id: '16',
    main_img: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ssNkD2gu0S8243do-mGZSKSiXMAyM5qCGq4Z91DyutQALqXtHIliMjOudIDIvHGGQ3_QYUSL&usqp=CAc"],
    sale_percent: "40",
    name: "Đầm hoa nhí cổ V",
    first_price: 350000,
    price: 210000,
    star: '5',
    location: 'TP.Hồ Chí Minh',
    sold: '1,2k',
    stock: "67"
  },
  {
    id: '17',
    main_img: ["https://inbaongoc.com/wp-content/uploads/2017/03/in-hop-banh-quy-tra-xanh.jpg"],
    sale_percent: "50",
    name: "Hộp bánh quy trà xanh Cozy",
    first_price: 200000,
    price: 100000,
    star: '5',
    location: 'TP.Hồ Chí Minh',
    sold: '29',
    stock: "658"
  },
  {
    id: '18',
    main_img: ["https://cdn.tgdd.vn/Products/Images/7622/76993/bhx/banh-choco-pie-396g-12-cai-201903151505091563.jpg"],
    sale_percent: "",
    name: "Hộp 12 bánh Choco-pie 33g",
    first_price: 0,
    price: 399000,
    star: '5',
    location: 'Đồng Nai',
    sold: '762',
    stock: "235"
  },
  {
    id: '19',
    main_img: ["https://cdn.tgdd.vn/Products/Images/7622/77027/bhx/banh-lotte-pie-180g-2-700x467.jpg"],
    sale_percent: "20",
    name: "Hộp bánh LottePie",
    first_price: 400000,
    price: 320000,
    star: '3',
    location: 'Hà Nội',
    sold: '47',
    stock: "13"
  },
  {
    id: '20',
    main_img: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmw42VCVCtpErOY0xHCvtzpaZBtQVxyp8bIp_TL_-cOoGT_P_FLhAO9pxgb1J3KL5uJ69RtNWu&usqp=CAc"],
    sale_percent: "31",
    name: "YODY Áo polo",
    first_price: 289000,
    price: 199000,
    star: '2',
    location: 'Hải Phòng',
    stock: "123"
  },
  {
    id: '21',
    main_img: ["https://salt.tikicdn.com/cache/w444/ts/product/87/01/5b/35285cccfc55dec7cdf65e3c42f480e1.jpg"],
    sale_percent: "48",
    name: "Thảm Tập Gym Và Yoga TPE 2 Lớp 6MM2L (6mm)",
    first_price: 297000,
    price: 155555,
    star: '3',
    location: 'TP.Hồ Chí Minh',
    stock: "76"
  },
  {
    id: '22',
    main_img: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCG4JYoSY3ekK0EGYlH6V34PMivCzh4EC6Cf90tQWQHuo39AjGOfbZ1EKd4ed8d1bsWMJ7HvM&usqp=CAc"],
    sale_percent: "20",
    name: "Chuột logitech",
    first_price: 2890000,
    price: 2600000,
    star: '4',
    location: 'Đồng Nai',
    stock: "2"
  },
  {
    id: '23',
    main_img: ["https://lh3.googleusercontent.com/proxy/P3-kxdUozVMdTzthFdE6y652p0JaPbkRfeuzTrP95LKAZfMeOzcuXJoIiJaPlo7_a6dqPHQgxbnfVzAL5ls8duWQGI9B-Zf1pxXGMnc38j56Bki1TXXSE9bb98Xd_cziURfP06xV4fzB54kqTjvb5leZ1nV_gnGsZdwalXcB4mNoFdXsngKAa_B9hPhKOsQKaQ"],
    sale_percent: "",
    name: "Hộp bánh LottePie",
    first_price: 0,
    price: 1287000,
    star: '5',
    location: 'TP.Hồ Chí Minh',
    stock: "7"
  },
  {
    id: '24',
    main_img: ["data:image/jpeg;base64,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"],
    sale_percent: "20",
    name: "Bàn phím Logitech K380 Bluetooth Màu đen (MULTI-DEVICE)",
    first_price: 400000,
    price: 590000,
    star: '5',
    location: 'Hà Nội',
    stock: "78"
  },
  {
    id: '25',
    main_img: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNoCatW3mvYCd6w4OEtht2uaktfmpybbV2ATEGOKcAB6OEUm4bptATLvd7pxVNwWUM1urFv8s&usqp=CAc"],
    sale_percent: "31",
    name: "Bàn phím cơ Dareu EK810 Pink Multi-Led (Blue / Brown / Red Switch)",
    first_price: 99000,
    price: 670000,
    star: '4',
    location: 'Đồng Nai',
    stock: "65"
  },
  {
    id: '26',
    main_img: ["https://cf.shopee.vn/file/3a93b70f2d99a12012e040e8d363f763"],
    sale_percent: "",
    name: "Mô hình Figure Zoro GK Resin Hổ trắng - mô hình One Piece",
    first_price: "",
    price: 950000,
    star: '3',
    location: 'Đồng Nai',
    stock: "769"
  },
  {
    id: '27',
    main_img: ["https://product.hstatic.net/1000132959/product/screenshot_167_ab07c70415444459833299bd3b5ababa_master.png"],
    sale_percent: "40",
    name: "MÔ HÌNH ZORO CƯỠI KHỦNG LONG KHỔNG LỒ 50CM",
    first_price: 4000000,
    price: 2800000,
    star: '3',
    location: 'Hà Nội',
    stock: "534"
  },
  {
    id: '28',
    main_img: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMCm8AKWBwlcLdE-ctE8Dx02zLfpk9KG1--aTForgFsoA_efYaIVnrX4GpFvk&usqp=CAc"],
    sale_percent: "37",
    name: "💛Tận +5600game💛Máy Chơi Game Cầm Tay 4 Nút HDMI",
    first_price: 400000,
    price: 269000,
    star: '4',
    location: 'Thanh Hóa',
    stock: "9"
  },
  {//váy 
      id: "29",
      main_img: ["https://cf.shopee.vn/file/08920275f6d378e93ad71466866a8574"],
      sale_percent: "52",
      name: "chân váy công sở xếp ly đính khuy 3 màu xinh xắn",
      first_price: 156000,
      price: 75000,
      star: '5',
      location: 'Quảng Ninh',
      stock: "274"
  },
  {
      id: "30",
      main_img: ["https://diuhien.vn/wp-content/uploads/2020/11/chan-vay-2.jpg"],
      sale_percent: "39",
      name: "Chân váy dài ulzzang xòe vạt lệch phối đen trắng - Chân váy nữ phối 2 màu cạp cao ulzzang Hàn Quốc",
      first_price: 195000,
      price: 119000,
      star: '5',
      location: 'TP.Hồ Chí Minh',
    stock: "356"
  },
  {
      id: "31",
      main_img: ["https://file.hstatic.net/1000321355/file/mua-dam-vay-dep-3_1c62c63733fc4f8d942492b832ae6d2e_grande.jpg"],
      sale_percent: "36",
      name: "Váy công sở đẹp Louro L",
      first_price: 420000,
      price: 269000,
      star: '5',
      location: 'Bắc Ninh',
    stock: "785"
  },
  {
      id: "32",
      main_img: ["https://thamdangstore.vn/Content/Images/FileUpload/userfiles/images/cach-ket-hop-ao-voi-chan-vay-xep-ly-dai.jpg"],
      sale_percent: "",
      name: "Váy nữ MARC FASHION midi xếp li hợp",
      first_price: 0,
      price: 495000,
      star: '',
      location: 'Hòa Bình',
    stock: "674"
  },
  {
      id: "33",
      main_img: ["https://product.hstatic.net/1000197303/product/pro_nau_1_e0abb6ed6e77401b8c4e7692539f8076_large.jpg"],
      sale_percent: "",
      name: "Váy nữ MARC FASHION mini hạ eo bèo nhấn nắp túi",
      first_price: 0,
      price: 395000,
      star: '5',
      location: 'TP.Hồ Chí Minh',
    stock: "124"
  },
  {
      id: "34",
      main_img: ["https://vn-test-11.slatic.net/p/24fdbea5380491cb150541c44dac72eb.png"],
      sale_percent: "40",
      name: "Chân váy Midi dài Ulzzang Quảng Châu VVD17",
      first_price: 240000,
      price: 146250,
      star: '5',
      location: 'Hà Nội',
    stock: "231"
  },
  {
      id: "35",
      main_img: ["https://salt.tikicdn.com/cache/280x280/ts/product/e3/88/6a/69ea15814e2d40236670e0d8afeb64c0.jpg"],
      sale_percent: "61",
      name: "Chân váy dài XẺ 1 BÊN cá tính",
      first_price: 189000,
      price: 75000,
      star: '4',
      location: 'Quảng Ngãi',
    stock: "641"
  },
  {
      id: "36",
      main_img: ["https://salt.tikicdn.com/ts/tmp/fd/9a/f5/717202865a684971d8c1999112992553.jpg"],
      sale_percent: "51",
      name: "Chân váy voan mềm tung bay",
      first_price: 350000,
      price: 174000,
      star: '4',
      location: 'TP.Hồ Chí Minh',
    stock: "56"
  },
  {
      id: "37",
      main_img: ["https://adayne.vn/wp-content/uploads/2021/04/chan-vay-xoe-dai-dep-cho-nang-cong-so-he-2016-duyen-dang-1-19.jpg"],
      sale_percent: "78",
      name: "Váy, chân váy xòe dáng dài",
      first_price: 250000,
      price: 57000,
      star: '4',
      location: 'Đà Nẵng',
    stock: "64"
  },
  {
      id: "38",
      main_img: ["https://cf.shopee.vn/file/0ebcca56fb3abba70b8c9ca66d6653b3"],
      sale_percent: "29",
      name: "Chân váy nữ đẹp 3 tầng dáng dài trẻ trung năng động",
      first_price: 120000,
      price: 86000,
      star: '5',
      location: 'An Giang',
    stock: "234"
  },
  {
      id: "39",
      main_img: ["https://media.phunutoday.vn/files/mai.doan/2016/12/04/chan-vay-xoe-phunutodayvn-5-1237.jpg"],
      sale_percent: "41",
      name: "Chân váy xoè nữ ren phối hoa xinh xắn nhiều màu DV06",
      first_price: 249000,
      price: 149000,
      star: '5',
      location: 'Cần Thơ',
    stock: "425"
  },
  {
      id: "40",
      main_img: ["https://salt.tikicdn.com/cache/w444/ts/product/bb/9d/7d/a6ccf2cc7a80b9f4d35e72e5982b6588.jpg"],
      sale_percent: "74",
      name: "Chân váy xòe ngang gối màu đen",
      first_price: 160000,
      price: 42000,
      star: '4',
      location: 'TP.Hồ Chí Minh',
    stock: "45"
  }
];

const discount = ['3', '4', '5', '6', '7'];

const best_saler = ['9', '10', '11', '12', '13'];

const newest = ['14', '26', '28', '17', '23'];

const sugggest = ['19', '20', '21', '22', '18', '24', '25', '15', '27', '16'];

const dress_products=['1','30','31','32','33','34','35','36','37','38','39','40'];

const findWithCamera=['2','8','31','4','10','12'];

// const noi_bat=["bộ chảo chống dính","tất cả thịt rau củ","rau củ quả","hàng đông lạnh","đồ hộp","hoa quả","ps4","nintendo","laptop","bếp điện từ"];

const noi_bat=[
  {
    keyword:"bộ chảo chống dính",
    date:"Hôm nay"
  },
  {
    keyword:"tất cả thịt rau củ",
    date:"Hôm nay"
  },
  {
    keyword:"rau củ quả",
    date:"Hôm qua"
  },
  {
    keyword:"hàng đông lạnh",
    date:"Hôm qua"
  },
  {
    keyword:"đồ hộp",
    date:"Hôm qua"
  },
  {
    keyword:"hoa quả",
    date:"31/07"
  },
  {
    keyword:"ps4",
    date:"31/07"
  },
  {
    keyword:"nintendo",
    date:"31/07"
  },
  {
    keyword:"laptop",
    date:"30/07"
  },
  {
    keyword:"bếp điện từ",
    date:"30/07"
  }
];

const gan_day=[
  {
    keyword:"Váy",
    date:"Hôm nay"
  },
  {
    keyword:"Váy ngắn",
    date:"Hôm nay"
  },
  {
    keyword:"chuột gaming",
    date:"Hôm qua"
  },
  {
    keyword:"ghế mát xa",
    date:"Hôm qua"
  },
  {
    keyword:"bao tay chơi game",
    date:"Hôm qua"
  },
  {
    keyword:"mô hình robot",
    date:"30/07"
  },
  {
    keyword:"laptop dell",
    date:"30/07"
  },
  {
    keyword:"playstation",
    date:"29/07"
  },
  {
    keyword:"psp",
    date:"28/07"
  },
  {
    keyword:"chảo chống dính",
    date:"28/07"
  },
  {
    keyword:"nồi hấp",
    date:"26/07"
  }
];

const receiver = [
  {
    name: "Nguyễn Anh An",
    phone: "0999999999",
    address: "227 Nguyễn Văn Cừ, phường 4, quận 5, Thành phố Hồ Chí Minh"
  },
  {
    name: "Nguyễn Anh An",
    phone: "0999999999",
    address: "280 An Dương Vương, phường 4, quận 5, Thành phố Hồ Chí Minh"
  },
  {
    name: "Lê Hoàng Phái",
    phone: "0988888888",
    address: "542 Tây Lân, phường 12, quận Bình Tân, Thành phố Hồ Chí Minh"
  },
]

function getProduct(id) {
  for (let i = 0; i < product.length; i++) {
    if(product[i].id === id)
      return product[i]
  }
}
const cart = ['9', '10', '11']

export default { product, discount, best_saler, newest, sugggest, noi_bat, gan_day, dress_products,receiver, findWithCamera,getProduct, cart};

