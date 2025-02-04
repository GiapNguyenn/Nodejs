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
// var myString = `HTML5, CSS3, Javascript`;
// console.log(myString.split()); // Cả string là 1 phần tử
// console.log(myString.split("")); // Mỗi ký tự là 1 phần tử
// console.log(myString.split(", ")); // Mỗi từ là 1 phần tử
// console.log(myString.split(", ", 2)); // Mỗi từ là 1 phần tử, lấy tối đa 2 phần tử

//mất khoảng trắng và lấy ra phần tử
// var myString = `HTML5,      CSS3,       Javascript`;
// myString=myString.replace(/[\n\r\s\t]+/g, ' '); //mất đi khoảng trắng
// console.log(myString)
// console.log(myString.split(", ")); // Mỗi từ là 1 phần tử

// //isNaN()
// var a = 10;
// var b = "Test";
// var result = a / b;
// console.log(result); // Trả về NaN
// console.log(typeof result); //kieu du lieu cua result
// if(typeof result == "number") {
//     console.log("Day la so "+result);
// }
//  console.log(isNaN(result)); // Trả về true
// if (isNaN(result)) {
//     console.log("So nay bi loi!");
// }
// else {
//     console.log("Day la so "+result)
// }

//toString()
// var a = 10;
// var b = a.toString();
// var c = (10).toString();
// console.log(a); // Trả về số 10
// console.log(typeof a); // Trả về kiểu number
// console.log(b); // Trả về chuỗi 10
// console.log(typeof b); // Trả về kiểu string
// console.log(c); // Trả về chuỗi 10
// console.log(typeof c); // Trả về kiểu string

//toFixed()
// var a = 12.3456;
// console.log(a.toFixed()); // Trả về 12
// console.log(a.toFixed(0)); // Trả về 12
// console.log(a.toFixed(1)); // Trả về 12.3
// console.log(a.toFixed(2)); // Trả về 12.35
// console.log(a.toFixed(3)); // Trả về 12.346

//Lam viec voi Array

//toString()
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.toString());
// // Trả về: "HTML5,CSS3,Javascript"

//join
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.join()); // Trả về: "HTML5,CSS3,Javascript"
// console.log(list.join(",")); // Trả về: "HTML5,CSS3,Javascript"
// console.log(list.join("")); // Trả về: "HTML5CSS3Javascript"
// console.log(list.join(", ")); // Trả về: "HTML5, CSS3, Javascript"
// console.log(list.join(" - ")); // Trả về: "HTML5 - CSS3 - Javascript"
// console.log(list.join(" test ")) //tra ve : HTML5 test CSS3 test Javascript

//pop()
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.pop()); // Trả về: "Javascript"
// console.log(list); // Trả về: ["HTML5", "CSS3"]

//push() dung de them 1 hoac nhieu phan tu vao cuoi mang array
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.length)//dau tien mang co 3 phan tu
// console.log(list.push("Bootstrap 4", "ReactJS")); // Trả về: 5
// console.log(list);
// // Trả về: ["HTML5", "CSS3", "Javascript", "Bootstrap 4", "ReactJS"]

//shift()
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list)//danh sach luc dau
// console.log(list.shift()); // Trả về: "HTML5"
// console.log(list); // Trả về: ["CSS3", "Javascript"]

//unShift() dung de them 1 hoac nhieu phan tu vao dau mang array
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.length)
// console.log(list.unshift("Bootstrap 4", "ReactJS")); // Trả về: 5
// console.log(list);
// // Trả về: ["Bootstrap 4", "ReactJS", "HTML5", "CSS3", "Javascript"]

//splice
// Xóa hoặc chèn phần tử mới vào mảng.
// ● Trả về mảng bị xóa.
// ● Cú pháp: array.splice(index, howmany, item1, ....., itemX)
// ● Trong đó:
// ● index: Vị trí thêm/xóa phần tử (bắt buộc).
// ● howmany: Số phần tử cần xóa (không bắt buộc).
// ● item1, ..., itemX: Các phần tử mới được thêm vào (không bắt buộc).

// ● Ví dụ 1: Chèn phần tử mới vào mảng
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.splice(2, 0, "Bootstrap 4", "ReactJS")); // Trả về: [] do khong co phan tu nao duoc xoa
// console.log(list);
// Trả về: ["HTML5", "CSS3", "Bootstrap 4", "ReactJS", "Javascript"]

// Ví dụ 2: Xóa phần tử trong mảng
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.splice(1, 1)); // Trả về: ["CSS3"]
// console.log(list); // Trả về: ["HTML5", "Javascript"]

//Ví dụ 3: Xóa phần tử và chèn phần tử mới vào mảng
// var list = ["HTML5", "CSS3", "Javascript"];
// console.log(list.splice(2, 1, "Bootstrap 4", "ReactJS"));
// // Trả về: ["Javascript"]
// console.log(list);
// // Trả về: ["HTML5", "CSS3", "Bootstrap 4", "ReactJS"]

//concat()
// var list = ["HTML5", "CSS3", "Javascript"];
// var list2 = ["Bootstrap 4", "ReactJS"];
// var list3=list.concat(list2)
// console.log(list3)
// // Trả về: ["HTML5", "CSS3", "Javascript", "Bootstrap 4", "ReactJS"]
// console.log(list);
// // Trả về: ["HTML5", "CSS3", "Javascript"]

//slice
// var list = ["HTML5", "CSS3", "Javascript", "Bootstrap 4", "ReactJS"];
// console.log(list.slice(3)); // Trả về: ["Bootstrap 4", "ReactJS"]
// console.log(list.slice(1, 3)); // Trả về: ["CSS3", "Javascript"]
// console.log(list.slice(-3, -1)); // Trả về: ["Javascript", "Bootstrap 4"]
// console.log(list);
// // Trả về: ["HTML5", "CSS3", "Javascript", "Bootstrap 4", "ReactJS"]


