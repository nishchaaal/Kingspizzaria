const contactRender = (mainContent) => {
  console.log("works i guess");
  mainContent.innerHTML = "";
  mainContent.className = "container";

  const contactDiv = document.createElement("div");
  const contactTitle = document.createElement("h1");
  const phone = document.createElement("p");
  const openInfo = document.createElement("h1");
  const openHours = document.createElement("p");

  contactDiv.classList.add("contact");
  contactTitle.classList.add("contact-title");

  contactTitle.textContent = "Phone Number:";
  phone.textContent = "123-456-7890";
  openInfo.textContent = "Open Hours:";
  openHours.textContent = "Monday to Thursday: 11:30am – last table 10:45pm";

  contactDiv.appendChild(contactTitle);
  contactDiv.appendChild(phone);
  contactDiv.appendChild(openInfo);
  contactDiv.appendChild(openHours);
  mainContent.appendChild(contactDiv);
};

export default contactRender;
