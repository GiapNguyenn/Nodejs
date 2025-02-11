//  1.1 - 1.2
// var a = 30;
// var b = 20;

// if(a > b) {
//     console.log("A lon hon b");
// }
// else {
//     console.log("A nhỏ hơn hoặc bằng B")
// }

//1.3
// var diemThi = 7;
// if (diemThi >= 9) {
//     console.log("Xuất Sắc");
// }
// else if (diemThi < 9 && diemThi >= 8) {
//     console.log("Giỏi");
// }
// else if (diemThi < 8 && diemThi >= 7) {
//     console.log("Khá");
// }
// else if (diemThi < 7 && diemThi >= 4) {
//     console.log("Trung bình");
// }
// else {
//     console.log("Yếu");
// }

// 1.4
// var diemToan = 8.5;
// var diemTin = 4.5;
// if(diemToan != null && diemTin != null)
// {
//     var diemTrungBinh =(diemToan+diemTin)/2
//     console.log(diemTrungBinh)
//     if (diemTrungBinh >= 9) {
//         console.log("Xuất Sắc");
//     }
//     else if (diemTrungBinh < 9 && diemTrungBinh >= 8) {
//         console.log("Giỏi");
//     }
//     else if (diemTrungBinh < 8 && diemTrungBinh >= 7) {
//         console.log("Khá");
//     }
//     else if (diemTrungBinh < 7 && diemTrungBinh >= 4) {
//         console.log("Trung bình");
//     }
//     else {
//         console.log("Yếu");
//     }
// }

//1.4 Toán tử 3 ngôi (?)
// var age =16;
// var check =age >= 18 ? "Đã đủ tuổi!": "Chưa đủ tuổi!";
// console.log(check)

//2 swicht case
// var number =2 ;
// switch (number) {
//     case 0:
//         console.log("Day la so 0")
//         break;
//     case 1:
//         console.log("Day la so 1")
//         break;
//     case 2:
//         console.log("Day la so 2")
//         break;
//     default:
//         console.log("Nhap sai vui long nhap lai")
//         break;
// }

//Truong hop gom nhom
// var string = "hello"
// switch (string) {
//     case "hello":
//     case "Hi":
//         console.log("Xin chao")
//         break;
//     case 2:
//         console.log("Xin chao 2")
//     default:
//         break;
// }
//3 vong lap for
// for(var i =0 ; i < 10; i++) {
//     console.log(i)
// }
// for(var i = 9 ; i >= 0 ; i--) {
//     console.log(i)
// }
// for (var i = 0; i < 10; i += 2) {
//     console.log(i)
// }
// for(var i = 9 ; i >=0; i-=3) {
//     console.log(i)
// }
// for(var i = 1 ; i < 5 ; i++)
// {
//     for( var j =1 ; j <= 5; j++){
//         console.log(`Hang ${i} cot ${j}`)
//     }
// }

//4 For in dung trong Object
// var inforUser = {
//     fullName: "Truong Nguyen Giap",
//     email : "truongnguyengiap@gmail.com",
//     age : "0123124124"
// };
// for( var key in inforUser) {
//     console.log(key)
//     console.log(inforUser[key])
// }
// var key = "fullName";
// console.log(inforUser.fullName);
// console.log(inforUser.key);
// console.log(inforUser[key]);

// 5 for of dung trong array and string khong su dung trong Object
// var list = ["HTML5" , "CSS3" ,"Javascript"]
// console.log(list);
// console.log(list.length)

// dung vong lap for
// for(var i =0 ; item < list.length; i++) {
//     console.log(i)
//     console.log(list[i])
// }

//dung vong lap for of
// for(var item of list) {
//     console.log(item)
// }

//dung trong string 
// var string ="Truong Nguyen Giap";
// for(var i =0 ; i< string.length ; i++)
// {
//     console.log(i)
//     console.log(string[i])
// }

// for(var char of string){
//     console.log(char)
// }

//6.1 
// var i = 1;
// while(i<=10)
// {
//     console.log(i)

//     i++
// }
// var list = ["HTML5", "CSS3", "Javascript"]
// var i = 0;
// while (i < list.length) {
//     console.log(list[i]);
//     i++;
// }

//6.2
// var i = 20;
// while (i <= 10) {
//     console.log(i)

//     i++
// }

// var i = 20;
// do {
//     console.log(i)

//     i++
// } while (i <= 10)

//7. break
// for(var i = 0 ; i < 10 ; i++)
// {
//     console.log(i);
//     if(i==5)
//     {
//         console.log("chuong trinh bi dung");
//         break;
//     }
// }

// 8. continue
// for(var i = 0; i < 10; i++)
// {
//     if(i % 2 ==0) // neu i chia het cho 2 thi se bo qua nhung ket qua do
//     {
//         continue
//     }
//     console.log(i)
// }
 //9 
// tu khoa var dung toan bo 
// var a= 10 ;
// if(a==10) {
//     var b = 20 ;
//     console.log(b); //in ra bien b trong if
// }
// console.log(b); // van in ra bien b ben ngoai if vay bien b la bien toan cuc

// tu khoa let dung trong mot {}
// var a= 10 ;
// if(a==10) {
//     let b = 20 ;
//     console.log(b); //in ra bien b trong if
// }
// console.log(b); //ket qua loi do bien b da khai bao 

// tu khoa const
//  var a =10;
//  if(a==10) 
//  {
//     const b =40;
//     console.log(b)
//  }
//  console.log(b)

// if(true){
//     const PI = 3.14;
//     PI = 5 //const khong the gan lai gia tri la sai
//     console.log(PI);
// }

// var a =1;
// let b =2;
// if(true) {
//     var a =3;
//     let b = 4;
//     console.log(`b=${b} trong if`)
// }
// console.log(a)
// console.log(b)

