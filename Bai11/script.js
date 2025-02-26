// 1.
// Toan cuc 
// const a = 10 ;
// function test() {
//     console.log(a)
// }
// test()

//cuc bo
// vi du 1 
// function test() {
//     var a =10;
//     console.log(a)
// }
// test();
// console.log(a)//khong the khai bao o ngoai

// vi du 2 
// function test1() {
//     var a =10;
//     function test2() {
//         var b =20;
//         console.log(a)
//     }
//     test2()
// }
// test1()
// console.log(a)

// 2.1 hosting 
// console.log(a)
// var a = "Hello world"
// // chuyen tuong duong thanh
// var a ;
// console.log(a)
// a="Hello world";
// console.log(a);

// 2.2 
// tu khoa let 
// console.log(a)
// let a = 10;

// tu khoa const

// console.log(a)
// const a = 10

// 2.3 
// Declaration Funcion 
// test()
// function test () {
//     console.log("Ok");
// }
//Expression funcion
// var test;
// test()

// test = function() {
//     console.log("Ok")
// }

// Arrow function 
// var test
// test();

// test = () => {
//     console.log("Ok")
// }

// 3.1 
// console.log(this) // coi this la doi tuong window

// const button =document.querySelector("#button")
// console.log(button)
// button.addEventListener("click", function() {
//     console.log(this)
// })

// 3.3 
// var infoUser = {
//     fullName : "Truong Nguyen Giap",
//     Email : "Truongnguyengiaps@gmail.com",
//     Phone : "0123142213",
//     getPhone : function () {
//         console.log(this.fullName)
//         console.log(infoUser.fullName)
//     }
// }
// infoUser.getPhone();

// 3.4
// const button =document.querySelector("#button")
// // button.addEventListener("click", function() {
// //     console.log(this)
// // })
// button.addEventListener("click", () => {
//     console.log(this)
//     console.log(button)
// })
