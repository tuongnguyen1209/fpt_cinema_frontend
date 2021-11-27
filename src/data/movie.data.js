const movieData = [
  {
    id: 1,
    name: "Godzilla vs. Kong – Godzilla đại chiến Kong (26/3)",
    image:
      "https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/6061eb3d14fcbf485386b98a_godzilla-kong-2.jpg",
    traller: "https://www.youtube.com/embed/odM92ap8_c0",
    dateStart: "26/3/2021",
    description:
      "Tựa phim được ra mắt ở cả các rạp chiếu phim lẫn HBO Max. Phần tiếp theo của “Godzilla: King of the Monsters” và “Kong: Skull Island” là trận chiến giữa những con quái vật mang tính biểu tượng hoàng tráng nhất. Cuộc đụng độ đẫm máu của hai quái vật mà con người được xem như nhỏ bé so với chúng, phần phim là sự liên kết của hai sự kiện trước đó, Kong vẫn đang phát triển tại Skull, hòn đảo hoang vắng được phát hành vào 2007. Hai loài dường như có mối thù từ trước, báo hiệu một cuộc chiến không thể không tránh khỏi giữa những sinh vật to lớn. Những màn giao tranh, quyết chiến ác liệt với nhau giữa hai quái thú hứa hẹn mang lại cho người xem những phút giây mãn nhãn, trận chiến sẽ là sự quyết định xem ai sẽ là vị chúa tể",
    time: "101'",
    status: "",
    category: "Hành động, Khoa học viễn tưởng",
  },
  {
    id: 2,
    name: "Mortal Kombat – Cuộc chiến sinh tử (16/4)",
    image:
      "https://img.tvzingvn.com/uploads/2021/04/6040b6750b2d836-58485_poster.jpg",
    traller: "https://www.youtube.com/embed/NYH2sLid0Zc",
    dateStart: "26/3/2021",
    description:
      "Lại một tựa phim hành động được chuyển thể từ trò chơi điện tử nổi tiếng, võ sĩ MMA Cole Young (Lewis Tan), hiện tại những thông tin về Cole Young vẫn còn được coi là một ẩn số. Đặc điểm nổi bật của anh là hình xăm rồng “người được chọn” và sự quen biết với Sonya Blade và Jax, có lẽ vẫn còn nhiều điều để nói khi có một lượng nhân vật sẽ được bổ sung thêm so với các phiên bản game cũ, những cái tên như Kung Lao (Công Lão), Kabal, Reiko. Có thể thấy hứa hẹn một trận chiến mãn nhãn với những pha đánh đấm thu hút người xem. ",
    time: "101'",
    status: "",
    category: "Hành động, võ thuật",
  },
  {
    id: 3,
    name: "VENOM: LET THERE BE CARNAGE",
    image:
      "https://image.thanhnien.vn/w660/Uploaded/2021/lxwpcqjwp/2021_10_01/vn-01_gaby.jpeg",
    traller: "https://www.youtube.com/embed/j2dqpq8MBBM",
    dateStart: "12/2021",
    description:
      "Venom: Let There Be Carnage tiếp tục câu chuyện vừa hài hước vừa máu me về chàng phóng viên Eddie Brock và bạn đồng hành Venom. Cả hai sẽ học cách sống chung thế nào khi nhân loại và quái vật ngoài hành tinh khác nhau quá đỗi? Thêm vào đó, sự xuất hiện của tên sát nhân hàng loạt Cletus / Carnage càng khiến cuộc sống yên bình quá xa với hai gã “loser”. Tom Hardy tiếp tục hóa thân vào Eddie Brock / Venom – một trong những nhân vật phức tạp nhất nhà Marvel Xem thêm tại: https://www.galaxycine.vn/dat-ve/venom-let-there-be-carnage",
    time: "101'",
    status: "",
    category: "Hành động ",
  },
];

export default movieData;

export const listTicketDefault = [
  {
    idMovie: 1,
    list: [
      {
        id: 1,
        customer: "Nguyen Van A",
        time: "25/11/2021",
        quantity: 2,
        seat: ["H7", "H8"],
        combo: [
          { id: 1, name: "Combo 1", price: 50000, quantity: 1 },
          { id: 2, name: "Combo 2", price: 70000, quantity: 1 },
        ],
      },
      {
        id: 1,
        customer: "Nguyen Van B",
        time: "25/11/2021",
        quantity: 1,
        seat: ["E7"],
        combo: [{ id: 1, name: "Combo 1", price: 50000, quantity: 1 }],
      },
    ],
  },
  {
    idMovie: 2,
    list: [
      {
        id: 1,
        customer: "Nguyen Van C",
        time: "24/11/2021",
        quantity: 2,
        seat: ["H7", "H8"],
        combo: [
          { id: 1, name: "Combo 1", price: 50000, quantity: 1 },
          { id: 3, name: "Combo 3", price: 90000, quantity: 1 },
        ],
      },
      {
        id: 1,
        customer: "Nguyen Van D",
        time: "26/11/2021",
        quantity: 1,
        seat: ["E7"],
        combo: [{ id: 4, name: "Combo 4", price: 120000, quantity: 5 }],
      },
    ],
  },
  {
    idMovie: 3,
    list: [
      {
        id: 1,
        customer: "Nguyen Van E",
        time: "24/11/2021",
        quantity: 2,
        seat: ["C7", "C8"],
        combo: [
          { id: 1, name: "Combo 1", price: 50000, quantity: 1 },
          { id: 2, name: "Combo 2", price: 70000, quantity: 1 },
        ],
      },
      {
        id: 1,
        customer: "Nguyen Van F",
        time: "26/11/2021",
        quantity: 1,
        seat: ["D7"],
        combo: [{ id: 1, name: "Combo 1", price: 120000, quantity: 1 }],
      },
    ],
  },
];

export const listUser = [
  {
    id: 1,
    name: "Nguyen van a",
    email: "a@gmail.com",
    phone: "012315152",
    status: 1,
    role: 0,
  },
  {
    id: 2,
    name: "Nguyen van B",
    email: "b@gmail.com",
    phone: "012315152",
    status: 1,
    role: 1,
  },
  {
    id: 3,
    name: "Nguyen van C",
    email: "C@gmail.com",
    phone: "012315152",
    status: 0,
    role: 1,
  },
  {
    id: 2,
    name: "Nguyen van B",
    email: "b@gmail.com",
    phone: "012315152",
    status: 1,
    role: 1,
  },
];
