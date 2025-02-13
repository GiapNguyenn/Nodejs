// 2.1
// console.log(window);
// // window.alert("Ok");

// const infoUser = {
//     name: "Le Van A",
//     render : ()=>{
//         console.log("Ok");
//     }
// };
// infoUser.render()

// 2.2
// console.log(window.innerHeight)
// console.log(window.innerWidth)

// 2.3

//dùng khi muốn chuyển sang trang mới
// const openTab = () =>{
//     window.open(
//         "https://28tech.com.vn/"
//     )
// }

//dùng khi muốn mở tab mới
// const openTab =() => {
//     window.open(
//         "https://28tech.com.vn/",
//         "_blank",
//         "width=1200, height=600 , left = 100, top=50"
//     )
// }

// 2.4
// var tab;
// const openTab =() => {
//     tab=window.open(
//         "https://28tech.com.vn/",
//         "_blank",
//         "width=1200, height=600 , left = 100, top=50"
//     )
// }

// const closeTab =()=> {
//     tab.close();
// }

// 3
// console.log(screen.width)
// console.log(screen.height)

// 4.1 
// console.log(location)

// // 4.2
// const reloadPage = () => {
//     location.reload();
// }
// setInterval(reloadPage,2000)

// 4.3
// file:///D:/New%20folder%20(5)/JavaScript/Bai8/index.html
// console.log(location)

// 5.1
// const goBack =() => {
//     history.back()
// }

// // 6
// console.log(navigator)

// 7 , 8 
// console.log(window)


// 9.1 cookie (quan trọng trong phỏng vấn)

// Tạo cookie
// Hàm để thiết lập giá trị (hàm này luôn đúng)
// function setCookie(cname, cvalue, exdays) {
// var d = new Date();
// d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
// var expires = "expires=" + d.toUTCString();
// document.cookie = cname + "=" + cvalue + "; " + expires;
// }
// const fullName = prompt("Nhap ten");
// console.log(fullName)
// setCookie("Tên" ,fullName,5);//TÊN , giá trị cần nhập , ngày hết hạn
// const fullName = "Truong Nguyen Giap";
// console.log(fullName);

// fullName="Trương Nguyên Giáp";
// document.cookie = `fullName=${fullName}`;

// 9.2
// hàm lấy ra 1 giá trị của cookie (hàm này luôn đúng )
// function getCookie(cname) {
//     var name = cname + "=";
//     var ca = document.cookie.split(";");
//     for (var i = 0; i < ca.length; i++) {
//     var c = ca[i];
//     while (c.charAt(0) == " ") {
//     c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//     return c.substring(name.length, c.length);
//     }
//     }
//     return "";
//     }
//     const fullName =getCookie ("Tên")
//     console.log(fullName)
// const cookie =document.cookie;
// console.log(cookie)

// xoa cookie
// hàm xoá cookie (hàm này luôn đúng)
// function deleteCookie(cname) {
//     document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
//     }
// deleteCookie("fullName")