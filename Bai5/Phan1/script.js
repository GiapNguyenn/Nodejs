// var button = document.querySelector("button");
// button.onclick =function () {
//     alert('Hello World 3')
// }
// var a =10;
// var b =20;
// var c= a+b ;
// console.log(c)  // in ra gia tri cua c

// Toan tu so hoc
var a=10;
var b=30;
var n=2;
var fullName="Nguyen Giap"
 var c= a+b;
 console.log(c);
 var d = a+fullName ;
 console.log(d); //10 + NguyenGiap -->thanh chuoi 10NguyenGiap
 //45:39p
 var e = b-a ;
 console.log(e);

 var f= a*b;
 console.log(f)

 var g = a / b ;
 console.log (g);

 var h= a / n 
 console.log(h)

 var i = a **n  // a mũ n
 console.log(i)

 var k =a % b; // chia lấy phần dư
 console.log (k)
 var m=++a;
 console.log(m) // gán cho a+1 vào đơn vị rồi mới đưa vào m (cộng trước rồi với gán giá trị)

 var n = a++;
 console.log(n) // gán a cho n rồi mới a+1 đơn vị (gán giá trị xong mới cộng cho a)

//vidu 1:
var a1=20;
var b1=a1++ - --a1 + ++a1;
    // 20 - 20 + 21= 21
console.log(b1);
// ví dụ 2 :
var a2=20;
var b2= a2++ - a2-- + --a2 * 3;
    //= 20   - 21  + 19  * 3 =56
console.log(b2)
// ví dụ 3:
var a3=20;
var b3= --a3 - ++a3 + --a3 - a3++ + a3-- * 2;
    //=  19  -  20  +   19 -  19  + 20 *2 =39
console.log(b3)
//ví dụ 4 :
var a4 =20;
var b4= --a4 - a4++ + a4++ - --a4 + a4++ * 2;
    //=  19 - 19 + 20   -  20 + 20 *2 =40
console.log(b4)

//Toán tử gán
var x =10;
var y= 20;
    y += x; // y=y+x
console.log(y)
var y2 =20
    y2 -= x
console.log(y2)
//  tương tự với *= ,/= ,%=
//Toán tử so sách 
// var a =20;
// var b = "20";
// var c =a==b; // 20 và "20" nếu dùng == thì vẫn bằng nhau
// var d = a===b;// 20 và "20" dùng === thì chắc chắn sẽ không bằng nhau
// var e = a!=b;
// var f= a!==b // a khác b và khác luôn cả kiểu dữ liệu
console.log(c)
console.log(d);
console.log(e);
console.log(f);
// //3.4 Logical (Toán tử login)
// var a = 10;
// var b = 20;
// var c = 30;
// var d = 40;
// var e = a > b && c < d ; // khi dùng && thì tất cả các vế phải true thì mới trả về true nếu false một cái thì vẫn là false
// var f = a > b || c > d ; // khi dùng || thì tất cả các vế phải false thì mới trả về false nếu true một cái thì vẫn là true
// console.log(e) // dùng ! để đổi true thành false và false thành true
// console.log(!e)
// console.log(f)
//kiểu dữ liệu nguyên thuỷ 
 // kiểu number
 var a = 10 // số nguyên 
 var b =10.5 // số thực
 var c = Infinity // dương vô cùng
 var d = -Infinity // âm vô cùng
 var e = 10/"a" // NaN

 //kiểu function 
//   var a = 10 + 20 + 30
//   console.log(a);
    function tinhTong ( a, b, c) {
        return a + b + c;
    }
    var x =tinhTong(10 ,20, 30);
    console.log(x);
    // Kiểu Object
        //Object
         var inforUser= {
            fullName : "Trương Nguyên Giáp",
            age : 21 ,
            phone : "012312312",
         };
         console.log(inforUser);
         console.log(inforUser.fullName);
         console.log(inforUser.age);
         console.log(inforUser.phone);
    // Array
    var listUser = [
        "Le Van A",
        "Nguyen Thi B",
        "Do Van C"
    ]
    console.log (listUser)
    console.log (listUser[0])
    console.log (listUser[1])
    console.log (listUser[2])
