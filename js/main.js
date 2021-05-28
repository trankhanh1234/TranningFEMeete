const listVoucher = [
  {
    id: "1",
    src: "https://media.meete.co/cache/0x0/2021/05/18/6a1ce3df-83dd-4ff7-9a4a-80021ab8d104.jpeg",
    store: "Chicken Plus",
    voucher: "89k Combo Cánh Gà Cho 2 - 3 Người",
    tag: ["Ẩm thực", "Ăn"],
    address: "412 Nguyễn Thị Thập - Quận 7",
    status: false,
  },
  {
    id: "2",
    src: "https://media.meete.co/cache/0x0/2019/10/10/96cc4866-36f8-45b5-a70d-0781911a3ea8.png",
    store: "ToCoToCo",
    voucher: "Đồng Giá 32K Toàn Menu Size L",
    tag: ["Uống", "Trà sữa", "Ẩm thực"],
    address: "58 Cao Thắng - Quận 3",
    status: true,
  },
  {
    id: "3",
    src: "https://media.meete.co/cache/0x0/2021/04/06/52a2d903-4575-4d84-9c27-b7b960673bf3.jpeg",
    store: "Vua Đậu - Bún Đậu Nhà Vua",
    voucher: "Giảm 20% Toàn Menu",
    tag: ["Ăn", "Ẩm thực"],
    address: "231 Nguyễn Thị Nhỏ - Tân Bình",
    status: false,
  },
  {
    id: "4",
    src: "https://media.meete.co/cache/0x0/2020/12/19/ac9e6fa0-eaab-4811-9187-bcb1ffdcdf8a.jpeg",
    store: "Yangs Cupbop",
    voucher: "Giảm 50% Toàn Menu Món Hàn Quốc Chính Hiệu",
    tag: ["Ăn", "Ẩm thực"],
    address: "51 Song Hành - Quận 2",
    status: true,
  },
];

const statusVocher = ["Đã dùng", "chưa dùng"];

var voucher = document.getElementById("listProduct");

function getListVocher() {
  listVoucher.forEach((item) => {
    console.log(item.id);
    voucher.innerHTML += `<a id="${item.id}" class="w-100">
    <div class="mt-container-item-deal bg-white my-2 rounder">
      <div class="mt-top-info">
        <img
          src="https://media.meete.co/cache/400x0/2021/05/21/5dcdb58f-9d96-407b-999b-276ea2ec454f.png"
          class="mt-img-deal mr-3 my-2"
          loading="lazy"
          alt="meete"
        />
        <div class="mt-content-deal">
          <div
            class="
              mt-specical-deal
              d-flex
              align-items-center
              my-1
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-tag"
              viewBox="0 0 16 16"
            >
              <path
                d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z"
              />
              <path
                d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z"
              />
            </svg>
            <p>
            ${item.voucher}
            </p>
          </div>
          <div
            class="mt-text-deal d-flex align-items-center my-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-compass-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M15.5 8.516a7.5 7.5 0 1 1-9.462-7.24A1 1 0 0 1 7 0h2a1 1 0 0 1 .962 1.276 7.503 7.503 0 0 1 5.538 7.24zm-3.61-3.905L6.94 7.439 4.11 12.39l4.95-2.828 2.828-4.95z"
              />
            </svg>
            <p>${item.store}</p>
          </div>
        </div>
      </div>
      <div
        class="
          mt-top-date
          jutyfi
          d-flex
          justify-content-center
          align-items-center
        "
      >
        Ngày đặt hàng 25-05-2020
      </div>
      <div class="mt-status-deal">${item.status ? "đã dùng" : "Chưa dùng"}</div>
    </div>
  </a>`;
  });
}

getListVocher();
