const menuRender = (mainContent) => {
  mainContent.innerHTML = "";
  mainContent.className = "container";

  const menuDiv = document.createElement("div");
  const menuTitle = document.createElement("h1");
  const menuFlex = document.createElement("div");
  menuDiv.classList.add("menu-div");
  menuFlex.classList.add("menu-flex");

  menuTitle.textContent = "MENU";

  menuDiv.appendChild(menuTitle);
  menuDiv.appendChild(menuFlex);
  menuFlex.appendChild(createMenuItem("Chicken"));
  menuFlex.appendChild(createMenuItem("Veg"));
  menuFlex.appendChild(createMenuItem("Pepperoni"));
  menuFlex.appendChild(createMenuItem("Mixed"));

  mainContent.classList.add("menu-main");
  mainContent.appendChild(menuDiv);
};

const createMenuItem = (name) => {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const pizzaName = document.createElement("p");
  pizzaName.textContent = name;

  const pizzaImage = document.createElement("img");
  pizzaImage.src = `./img/${name}.jpg`;
  pizzaImage.alt = `${name}`;

  menuItem.appendChild(pizzaImage);
  menuItem.appendChild(pizzaName);

  return menuItem;
};

export default menuRender;
