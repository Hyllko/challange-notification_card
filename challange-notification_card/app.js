let search = document.querySelector(".fa-search");
let burger = document.querySelector(".fa-bars");
let divSearch = document.querySelector(".search");
let notification = document.querySelector(".notification");
let burgerMenu = document.querySelector(".burgerMenu");

search.addEventListener("click", function () {
	divSearch.classList.toggle("active");
});
burger.addEventListener("click", function () {
	notification.classList.toggle("activeBurger");
	burgerMenu.classList.toggle("activeBurgerMenu");
});
