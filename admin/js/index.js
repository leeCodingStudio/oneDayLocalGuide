const NavMenu = document.querySelectorAll(".nav-menu > a");
const NavSubMenu = document.getElementsByClassName("nav-sub-menu");

console.log(NavMenu[1].innerHTML);
console.log(NavSubMenu[0].innerHTML);

NavMenu[1].addEventListener("click", function () {
  console.log(this.style.display);
});

function dropDown() {
  if (this.style.display === "none") {
    this.style.display = "block";
  }
  if (this.style.display === "block") {
    this.style.display = "none";
  }
}
