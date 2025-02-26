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
const loginSuccess = () => {
    console.log("Đăng nhập thành công")
}
const checkLogin = (data,callback) => {
    const email = "truongnguyengiaps@gmail.com"
    const password = "123455"
    if(data.email === email && data.password === password){
        callback()
    }else {
        console.log("Đăng nhập thất bại")
    }
}
let data = {
    email : "truongnguyengiaps@gmail.com",
    password : "123455"
}
checkLogin(data,loginSuccess)
//45p05s