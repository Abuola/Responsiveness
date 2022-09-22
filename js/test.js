const mobileHeader = document.querySelector(".mobile-header");
const mbHeader =document.querySelector(".mb-header");
const burger = document.querySelector(".burger");
const mbNav = document.querySelector(".mb-nav");
const dropdown = document.querySelector(".dropdown");
const dropdownMenu = document.querySelector(".dropdown-menu");
const mbDropdown = document.querySelector(".mb-dropdown")
const mbDropdownMenu = document.querySelector(".mb-dropdown-menu");

burger.addEventListener("click", function(){
    burger.classList.toggle("active");
    mbNav.classList.toggle("active");
})

mbDropdown.addEventListener("click", function(){
    mbDropdown.classList.toggle("active");
    mbDropdownMenu.classList.toggle("active");
})
