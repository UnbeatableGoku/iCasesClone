let flag = false;
function sidemenu() {
  let sidebar = document.getElementById("responsive-sidebar");
  if (flag) {
    sidebar.style.left = "-50rem";
    flag = false;
  } else {
    sidebar.style.left = "0rem";
    flag = true;
  }
}
let uppermenuFlag = false;
function uppermenu() {
  let upperbar = document.getElementById("search-upperbar");
  if (uppermenuFlag) {
    upperbar.style.display = "none";
    uppermenuFlag = false;
  } else {
    upperbar.style.display = "block";
    uppermenuFlag = true;
  }
}
let flag2 = false;
function showMyCart() {
  let myCart = document.getElementById("my-cart-section");
  if (flag2) {
    myCart.style.display = "none";
    flag2 = false;
  } else {
    myCart.style.display = "inline-block";
    flag2 = true;
  }
}

let menuitem2 = document.getElementById("menuitem-content-2");
let menuitem1 = document.getElementById("menuitem-content-1");
let sidebtn1 = document.getElementById("sidemenu-btn-one");
let sidebtn2 = document.getElementById("sidemenu-btn-two");

function menuitemone() {
  sidebtn1.style.borderBottom = "2px solid black";
  menuitem1.style.display = "block";
  menuitem2.style.display = "none";
  sidebtn2.style.borderBottom = "none";
}
function menuitemtwo() {
  menuitem1.style.display = "none";
  menuitem2.style.display = "block";
  sidebtn2.style.borderBottom = "2px solid black";
  sidebtn1.style.borderBottom = "none";
}
