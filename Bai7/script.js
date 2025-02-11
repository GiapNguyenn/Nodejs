//1.1 
//vidu 1
// function tong (a ,b) {
//     return a+b;
// }
// var  ketQua = tong(10,20);//tra ve 30
// console.log(ketQua)

//vidu 2
// function tong (a , b , c ,d){
//     return a + b + c +d;
// }
// var ketQua = tong(10,20,30,40);
// console.log(ketQua);

//1.2 declaration function (ham dinh nghia) co hoisting (dung ham do xong moi khai bao no)
// var ketQua = tong(10,20,30,40,50,60);
// console.log(ketQua);
// function tong (){
//     // console.log(arguments);
//     let tong = 0
//    for (const item of arguments) {
//     tong = tong +item;
//    }
//    return tong
// }


//1.2   Experession function (Ham bieu thuc) khong co hoisting
// var tong =function (){
//     // console.log(arguments);
//     let tong = 0
//    for (const item of arguments) {
//     tong = tong +item;
//    }
//    return tong
// }
// var ketQua = tong(10,20,30,40,50,60,70,80,90);
// console.log(ketQua);

//1.2 Arrow function (ham mui ten) ko su dung duoc arguments
//khong co hoisting
//vidu2
// var tong = (...test) => {
//     console.log(test)
//     // console.log(arguments);
//     let tong = 0
//     for (const item of test) {
//         tong = tong + item;
//     }
//     return tong
// }
// var ketQua = tong(10, 20, 30, 40, 50, 60, 70, 90, 100);
// console.log(ketQua);
//vi du 2
// setTimeout(()=>console.log("OK"),3000)

// 1.3

//  vi du 1: tinh tong cac phan tu trong mang
// const mang = [1,2,3,4,5,6,7,8,9,10];
// const tongSoChan = (array) =>{
//     let tong =0;
//     for(let i = 0 ; i < array.length; i++) // duyet cac phan tu trong mang 
//     {
//         if(array[i] % 2==0)//neu cac phan tu trong mang chia het cho 2 thi cong vao tong
//         {
//             tong =tong+array[i]; 
//         }
//     }
//     return tong; //tra ve tong
// }
// const resutl = tongSoChan(mang);
// console.log(resutl)

//vi du 2: viet chuong trinh cho nguoi dung  nhap vao so n lon hon 0 sau do 
// du vao n tinh gia tri bieu thuc
// const bieuThuc = (n) => {
//     let resutl = 0;
//     for(i = 1 ; i <= n ; i++)
//     {
//         resutl =resutl+i/n
//     }
//     return resutl
// }
// // tai sao dung do while vi de cho nguoi dung nhap vao 1 lan roi moi tinh tiep 

// let n;
// do {
//     n = parseInt(prompt("Nhap n: "))
//     if (n > 0) {
//         const resutl = bieuThuc(n)
//         console.log(resutl.toFixed(4));
//     }
//     else {
//         console.log("Vui long nhap so lon 0")
//     }
// } while (n <= 0);

//2 Try catch
//const a= 10;
// try {
//     console.log(" a = "+a)
// }
// catch(error) {
//     console.log(error)
// }
// finally {
//     console.log("luon chay o finally")
// }

// try {
//     console.log(" a = "+a);
// }
// catch(error) {
//     console.log(error);
// }
// console.log(" a = "+a);// neu dung cai nay cac phan code ben duoi se bi ngung lai het
// // dung try catch de co the tiep tuc chay chuong trinh du sai 

// console.log("code cua chuong trinh khac")

//3 . Object nang cao

// 3.1  them 1 key vao Object
// let infoUser = {
//     name : "Truong Nguyen Giap"
// }
// infoUser.phone="0123456789"
// infoUser.email = "truongnguyengiaps@gmail.com"
// infoUser["address"] ="dia chi 1"
// console.log(infoUser)

// 3.2 xoa 1 key khoi Object
// let infoUser = {
//     name : "Truong Nguyen Giap",
//     password:"123123",
//     email:"truongnguyengiaps@gmail.com"
// }
// delete infoUser.password
// console.log(infoUser)

//Array nang cao

// 5.1 forEach() dung de loc qua cac phan tu cua mang 
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let sum =0 ;
// numbers.forEach ((item) => {
//     sum += item;
// });
// console.log(sum)

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(numbers)
// numbers.forEach((item,index)=>{
//     numbers[index] = item  + 1;
// });
// console.log(numbers)

// 4.2 every Kiểm tra tất cả các phần tử của một mảng phải thỏa mãn một điều kiện gì đó.
// const monHoc = [
//     {
//         ten: "Toan",
//         diem: 8.6
//     },
//     {
//         ten: "Ly",
//         diem: 9.2
//     },
//     {
//         ten: "Hoa",
//         diem: 8.5
//     },
//     {
//         ten: "Tin",
//         diem: 8.1
//     }
// ]
// const hocSinhGioi = monHoc.every((item) => {
//     return item.diem >= 8;
// });

// console.log(hocSinhGioi);
// if (hocSinhGioi == true) // muon true thi every(item) phai thoa dieu kien true het
// {
//     console.log("Day la hoc sinh gioi");
// } else {
//     console.log("Day khong la hoc sinh gioi");
// }

// 4.3 Kiểm tra chỉ cần một phần tử của một mảng thỏa mãn một điều kiện gì đó là được.
// const monHoc = [
//     {
//         ten: "Toan",
//         diem: 8.6
//     },
//     {
//         ten: "Ly",
//         diem: 9.2
//     },
//     {
//         ten: "Hoa",
//         diem: 8.5
//     },
//     {
//         ten: "Tin",
//         diem: 5
//     }
// ]
// const oLaiLop =monHoc.some((item)=>{
//     return item.diem < 4 ;
// });

// if(oLaiLop==true) {
//     console.log("Hoc sinh chua du dieu kien len lop")
// }
// else
// {
//     console.log("Hoc sinh da du dieu kien len lop")
// }

// 4.4 find  chi tim 1 phan tu 
// const monHoc = [
//     {
//         ten: "Toan",
//         diem: 8.6
//     },
//     {
//         ten: "Ly",
//         diem: 9.2
//     },
//     {
//         ten: "Hoa",
//         diem: 8.5
//     },
//     {
//         ten: "Tin",
//         diem: 9
//     }
// ]
// const monTin= monHoc.find((item)=>{
//     return item.ten === "Tin";
// });

// console.log(monTin);
// console.log(monTin.diem)

// const monSinh= monHoc.find((item)=>{
//     return item.ten === "Sinh";
// });
// console.log(monSinh)

//filter giong ham find nhung khac la ham nay tim duoc nhieu phan tu
// const monHoc = [
//     {
//         ten: "Toan",
//         diem: 8.6
//     },
//     {
//         ten: "Ly",
//         diem: 9.2
//     },
//     {
//         ten: "Tin",
//         diem: 8.5
//     },
//     {
//         ten: "Tin",
//         diem: 9
//     }
// ]
// const monTin= monHoc.filter((item)=>{
//     return item.ten === "Tin";
// });

// console.log(monTin);
// console.log(monTin.diem)

// 4.6 map 
const monHoc = [
    {
        ten: "Toan",
        diem: 8.6
    },
    {
        ten: "Ly",
        diem: 9.2
    },
    {
        ten: "Tin",
        diem: 8.5
    },
    {
        ten: "Tin",
        diem: 9
    }
]
// console.log(monHoc);
// const mangMoi =monHoc.map((item) => {
//     return item.ten;
// });
// console.log(mangMoi)

// so sach forEach voi map
// console.log(monHoc);
// // forEach khong dung duoc return neu dung return se ra undefined
// const test1=monHoc.forEach((item1,index)=>{
//     return item1.diem
// })
// console.log(test1)
// const mangMoi=monHoc.map((item2)=>{
//     return item2.ten
// })
// console.log(mangMoi)

//4.7 reduce()
// const numbers = [1,2,3,4]
// const sum = numbers.reduce((total,item) => {
//     console.log(total);
//     console.log(item);
//     console.log("--------------")
//     return total +item
// },5)
// console.log(sum)

//dung forEach
// let tongDiem = 0;
// monHoc.forEach((item)=>{
//     tongDiem += item.diem;
// });
// console.log(tongDiem)

//dung reduce
// let tongDiem = monHoc.reduce((total,item)=>{
//     return total+item.diem
// },0);
// console.log(tongDiem)

let diemTrungBinh = monHoc.reduce((average,item)=>{
    return average + item.diem /monHoc.length;
},0);
console.log(diemTrungBinh)



