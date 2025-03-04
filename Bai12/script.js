//1
// vi du 1
// const congViec1 = () => {
//     console.log("Cong viec 1")
// }
// const congViec2 = (callback) => {
//     // console.log(callback)
//     console.log("Cong viec 2")
//     callback()
// }
// congViec2(congViec1)

// vidu 2
// const kiemTraSoDuong = (number) => {
//     if (number >= 0) {
//         console.log("Đây là số dương")
//     } else {
//         console.log("Đây là số âm")
//     }
// }
// const kiemTraChanLe = (number) => {
//     if (number %2 ==0) {
//         console.log("Đây là số chẳn")
//     } else {
//         console.log("Đây là số lẻ")
//     }
// }
// const tinhTong = (a, b ,callBack) => {
//     const ketqua =a + b;
//     // console.log(callBack)
//     callBack(ketqua)
//     // kiemTraSoDuong(ketqua)
//     // kiemTraChanLe(ketqua)

// }
// // tinhTong(10, 20,kiemTraSoDuong)
// // tinhTong(10, 20,kiemTraChanLe)
// tinhTong(10 ,20, (number) => {
//     kiemTraSoDuong(number),
//     kiemTraChanLe(number)
// })

//ví dụ 3
// const loginSuccess = () => {
//     console.log("Đăng nhập thành công")
// }
// const checkLogin = (data,callback) => {
//     const email = "truongnguyengiaps@gmail.com"
//     const password = "123455"
//     if(data.email === email && data.password === password){
//         callback()
//     }else {
//         console.log("Đăng nhập thất bại")
//     }
// }
// let data = {
//     email : "truongnguyengiaps@gmail.com",
//     password : "123455"
// }
// checkLogin(data,loginSuccess)

// 2
// var a =10 ;
// var promise = new Promise ((resolve,reject) => {
//     if(a ===undefined){
//         reject()
//     }else {
//         resolve(a);
//     }
// });
// promise
//     .then((a)=>{
//         console.log(a)
//         return a
//     })
//     .then((a)=>{
//         const b = a + 10;
//         console.log(b)
//         return b
//     })
//     .then((b)=>{
//         const c = b * 20;
//         console.log(c)
//     })
//     .catch(()=>{
//         console.log("Thất bại")
//     })
    // .finally(()=>{
    //     console.log("Luôn chạy vào đây")
    // })

    // 3 trang thai 
    // const promise = new Promise((resolve,reject) =>{
    //     setTimeout(()=>{
    //         // resolve(10);
    //         reject("Loi")
    //     },3000)
    // });

    // setTimeout(()=>{
    //     console.log("Sau 1 giay: ",promise);
    // },1000)
    // setTimeout(()=>{
    //     console.log("Sau 2 giay: ",promise);
    // },2000)
    // setTimeout(()=>{
    //     console.log("Sau 3 giay: ",promise);
    // },3000)
//Jsonviewer
//4
fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then((data) =>{
        // console.log(data.products)

    const newArray = data.products.map((item) => {
        return `
        <div class="product-item">
            <img src="${item.thumbnail}">
            <h2>${item.title}</h2>
            <h3>${item.price}$</h3>
        </div>
        `
    })
    const htmls = newArray.join("")

    const productList = document.querySelector("#product-list")
    productList.innerHTML = htmls
    })