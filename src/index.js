import homeRender from "./home";
import contactRender from "./contact";
import menuRender from "./menu";

const content = document.querySelector(".content");
const main = document.createElement("main");

const header = document.createElement("header");
const nav = document.createElement("nav");
const navItems = document.createElement("ul");
const home = document.createElement("li");
const menu = document.createElement("li");
const contact = document.createElement("li");

main.classList.add("container");
nav.classList.add("container");
navItems.classList.add("nav-items");
home.classList.add("active");

home.textContent = "HOME";
menu.textContent = "MENU";
contact.textContent = "CONTACT";

content.appendChild(header);
header.appendChild(nav);
nav.appendChild(navItems);
navItems.appendChild(home);
navItems.appendChild(menu);
navItems.appendChild(contact);
content.appendChild(main);

const footer = document.createElement("footer");
const footerP = document.createElement("p");

footerP.textContent = "Made by Nishchal";
footer.appendChild(footerP);
content.appendChild(footer);

homeRender(main);

home.addEventListener("click", () => {
  menu.classList.remove("active");
  contact.classList.remove("active");
  home.classList.add("active");
  homeRender(main);
});

contact.addEventListener("click", () => {
  menu.classList.remove("active");
  home.classList.remove("active");
  contact.classList.add("active");
  contactRender(main);
});

menu.addEventListener("click", () => {
  home.classList.remove("active");
  contact.classList.remove("active");
  menu.classList.add("active");
  menuRender(main);
});
