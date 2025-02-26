// 2.1 document Object mode lay theo id 
// const h1_01 =document.getElementById("h1-01")
// console.log(h1_01)
// const h1_02=document.getElementById("h1-02")
// console.log(h1_02)

// 2.2 DOM lay theo tagname 
// const listH1 = document.getElementsByTagName("h1")
// console.log(listH1)
// for (const h1 of listH1) {
//     console.log(h1)
// }

// 2.3 DOM lay theo class 
// const listTitle = document.getElementsByClassName("title");
// console.log(listTitle);
// for (const title of listTitle) {
//     console.log(title)
// }

// 2.4 
// const title =document.querySelector(".title")
// console.log(title)
// const tabA = document.querySelector("#menu li a")
// console.log(tabA)

// 2.5
// const tabA = document.querySelectorAll("#menu li a")
// for (const cardA of tabA) {
//     console.log(cardA)
// }
// //lay ra the a muc 2 trong menu 
// const cardA2 = document.querySelector("#menu li:nth-child(2) a")
// console.log(cardA2)

// 3.1 lay ra noi dung cua the trong html
// const innerHtml_h1_01 = document.querySelector("#h1-01").innerHTML;
// console.log(innerHtml_h1_01)
// const innerText_h1_01 = document.querySelector("#h1-01").innerText;
// console.log(innerText_h1_01)

// thay doi noi dung 
// document.querySelector("#h1-01").innerHTML= "test";

// 3.2 
// const h1_03 = document.querySelector("#h1-03");
// const classH1_03 =h1_03.getAttribute("class")
// const idH1_03 =h1_03.getAttribute("id")
// const testH1_03 =h1_03.getAttribute("test");
// const idProduct =h1_03.getAttribute("data-id");
// console.log(h1_03)
// console.log(classH1_03);
// console.log(idH1_03);
// console.log(testH1_03)
// console.log(idProduct)

//thay doi noi dung bang set...
// const h1_01 = document.querySelector("#h1-01");
// h1_01.setAttribute("class","test-2")

//show quang cao
// setTimeout(()=>{
//     const ads1=document.querySelector("#ads-1");
//     // ads1.setAttribute("class","ads ads-display");//khong giu duoc ten khac
//     ads1.classList.add("ads-display");//co the giu ca ten khac
//     ads1.classList.remove("ads")//xoa di ten
// },3000)

//DOM CSS
const h1_02 = document.querySelector("#h1-02");
h1_02.style.fontSize ="60px"
h1_02.style.color="green"
h1_02.style.background="red"