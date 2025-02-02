//hàm build-in là những hàm được định nghĩa sẵn chúng chỉ việc sử dụng (backend không hay sử dụng lắm)

// alert("Xin chào các bạn")

// var result = confirm("bạn đã trên 18 tuổi ? ");//confirm dùng để trả về true false
// if (result==true) {
//     alert("tôi đã trên 18 tuổi");
// }
// else if (result ==false)
// {
//     alert("tôi chưa đủ 18 tuổi");
// }

// var result =prompt ("nhập n");
// console.log(result);
// console.warn(result);
// console.error(result);

// setTimeout(function () {
//     console.log("A")
// }, 1000)

// setInterval(function () {
//     console.log("B")
// }, 1000)

// var b = setInterval(function () {
//     console.log("B")
// }, 1000)   //chạy được sau 1 giây

// setTimeout(function () {
//     clearInterval(b) //tắt tự động chạy Interval sau 5 giây
// },5000)


 // Typeof
// var a = 10;
// var b = "Nội dung...";
// var c;
// var d = null;
// var e = true;
// console.log(typeof a); // number
// console.log(typeof b); // string
// console.log(typeof (a + b)); // string (number + string vẫn ra string)
// console.log(typeof c); // undefined
// console.log(typeof d); // object
// console.log(typeof e); // boolean
// console.log(typeof a == "number"); // true

//7. Làm việc với String

// var fullName ="Trương Nguyên Giáp"
// console.log(fullName.length)

//IndexOf
// var myString = `Xin chào! Tôi tên Nam. Tôi năm nay 18 tuổi.`;
// console.log(myString.indexOf("Tôi")); // Trả về 10
// console.log(myString.indexOf("Hải")); // Trả về -1
// console.log(myString.indexOf("Nam")); // Trả về 18
// console.log(myString.indexOf("nam")); // Trả về -1
// console.log(myString.indexOf("Tôi", 11)); // Trả về 23

//lastindexOf
// var myString = `Xin chào! Tôi tên Nam. Tôi năm nay 18 tuổi.`;
// console.log(myString.lastIndexOf("Tôi", 24)); // Trả về 23
// console.log(myString.lastIndexOf("Tôi", 22)); // Trả về 10
// console.log(myString.lastIndexOf("Tôi", 10)); // Trả về 10
// console.log(myString.lastIndexOf("Tôi", 9)); // Trả về -1

//cắt chuỗi slice 
// var myString = `Xin chào! Tôi tên Nam. Tôi năm nay 18 tuổi.`;
// console.log(myString.slice(10, 21)); // Tôi tên Nam
// console.log(myString.slice(0)); // Lấy toàn bộ chuỗi
// console.log(myString.slice(0, 1)); // X (Lấy ký tự đầu tiên của chuỗi)
// console.log(myString.slice(-1)); // . (Lấy ký tự cuối cùng của chuỗi)
// console.log(myString); // Vẫn giữ nguyên chuỗi gốc

//replace đổi kí tự đầu tiên
// var myString = `Xin chào! Tôi tên Nam. Tôi năm nay 18 tuổi.`;
// console.log(myString.replace("Tôi", "Mình"));
// console.log(myString.replace(/Tôi/g, "Mình"));//đổi tất cả chữ Tôi thành Mình regex là gì

// toUpperCase() và toLowerCase() viết hoa tất cả các chữ cái và viết thường tất cả các chữ cái
// var myString = `Xin chào! Tôi tên Nam. Tôi năm nay 18 tuổi.`;
// console.log(myString.toUpperCase());
// console.log(myString.toLowerCase());

//trim() cắt bỏ đi khoảng chắn giữa hai đầu
// var myString = ` Xin chào! Tôi tên Nam. Tôi năm nay 18 tuổi. `;
// console.log(myString);
// console.log(myString.trim());

//charAt
// var myString = `Đặng Phương Nam`;
// console.log(myString.charAt()); // Lấy ký tự đầu tiên
// console.log(myString.charAt(0)); // Lấy ký tự đầu tiên
// console.log(myString.charAt(1)); // Lấy ký tự thứ 2
// console.log(myString.charAt(myString.length - 1)); // Lấy ký tự cuối cùng. Giải thích: myString.length =11 kí tự thì 
// - 1 kí tự ở 11 sẽ lấy được kí tự cuối cùng 

//split() chuyển một chuỗi thành một mảng array
var myString = `HTML5, CSS3, Javascript`;
// console.log(myString.split()); // Cả string là 1 phần tử
// console.log(myString.split("")); // Mỗi ký tự là 1 phần tử
// console.log(myString.split(", ")); // Mỗi từ là 1 phần tử
console.log(myString.split(", ", 2)); // Mỗi từ là 1 phần tử, lấy tối đa 2 phần tử

//mất khoảng trắng và lấy ra phần tử
// var myString = `HTML5,      CSS3,       Javascript`;
// myString=myString.replace(/[\n\r\s\t]+/g, ' '); //mất đi khoảng trắng
// console.log(myString)
// console.log(myString.split(", ")); // Mỗi từ là 1 phần tử

//1h14p32s


