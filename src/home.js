const homeRender = (mainContent) => {
  mainContent.innerHTML = "";
  mainContent.className = "container";

  const homeDiv = document.createElement("div");
  const title = document.createElement("h1");
  const subTitle = document.createElement("p");

  title.classList.add("title");
  subTitle.classList.add("sub-title");

  title.textContent = "King's Pizzaria";
  subTitle.textContent = "Eat . Drink . Enjoy";

  homeDiv.style.fontFamily = "Rye,cursive";

  homeDiv.appendChild(title);
  homeDiv.appendChild(subTitle);
  mainContent.appendChild(homeDiv);
};

export default homeRender;
