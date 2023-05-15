const wrapper = document.querySelector(".main-cards");
const inputSearch = document.querySelector(".main-navigation__search");
const inputRegions = document.querySelector(".main-navigation__regions");

//функція яка додає класи для ефекту darkMode
function darkMode() {
  document.querySelector("body").classList.toggle("dark-mode");
  document.querySelector(".header-bg").classList.toggle("dark-mode");
  document.querySelector(".main-navigation__search").classList.toggle("dark-mode");
  document.querySelector(".main-navigation__regions").classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    document.querySelector(".header-mode__style").textContent = "Light Mode";
    document.querySelector(".header-mode__img").src = "./images/dey-mode.png";
  } else {
    document.querySelector(".header-mode__style").textContent = "Dark Mode";
    document.querySelector(".header-mode__img").src = "./images/night-mode.png";
  }
}

document.querySelector(".header-mode").addEventListener("click", darkMode);

//подія яка відбувається коли user натискає Enter в input
inputSearch.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    wrapper.innerHTML = "";
    searchСountry = inputSearch.value;
    country();
  }
});

let searchСountry = "brazil";

//функція в яку передається зміна searchСountry яка міняє link та після чого рендерить все що є в JSON цього link
async function country() {
  try {
    const resp = await fetch(`https://restcountries.com/v3.1/name/${searchСountry}`);
    const data = await resp.json();
    document.querySelector("body").classList.toggle("height");
    const cards = `
    <li class="main-cards__content">
    <img class="main-cards__img" src="${data[0].flags.svg}" alt="">
    <div class="main-cards__wrapper">
    <p class="main-cards__name">${data[0].name.common}</p>
    <div class="main-cards__information">
    <p class="main-cards__text">Population: ${data[0].population.toLocaleString()}</p>
    <p class="main-cards__text">Region: ${data[0].region}</p>
    <p class="main-cards__text">Captial: ${data[0].capital[0]}</p>
    </div>
    </div>
    </li>`;
    wrapper.insertAdjacentHTML("afterbegin", cards);
  } catch {
    countrAll();
    alert("This country not found");
    inputSearch.value = "";
  }
}

//функція яка міняє регіон
inputRegions.addEventListener("click", function () {
  let linkRegions = "";

  if (inputRegions.value == 1) {
    countrAll();
  } else if (inputRegions.value == 2) {
    linkRegions = "https://restcountries.com/v3.1/region/Africa";
  } else if (inputRegions.value == 3) {
    linkRegions = "https://restcountries.com/v3.1/region/North America";
  } else if (inputRegions.value == 4) {
    linkRegions = "https://restcountries.com/v3.1/region/South America";
  } else if (inputRegions.value == 5) {
    linkRegions = "https://restcountries.com/v3.1/region/Asia";
  } else if (inputRegions.value == 6) {
    linkRegions = "https://restcountries.com/v3.1/region/europe";
  } else if (inputRegions.value == 7) {
    linkRegions = "https://restcountries.com/v3.1/region/Oceania";
  }

  countrAll(linkRegions);
});

//функція в яку передається значення linkRegions якщо в ній щось знаходиться то в resp передається link якщо ні то вона рендерить всі країни
async function countrAll(linkRegions) {
  const resp = await fetch(linkRegions || `https://restcountries.com/v3.1/all`);
  const data = await resp.json();
  console.log(data);
  wrapper.innerHTML = "";
  inputSearch.value = "";
  data.forEach((element) => {
    const cards = `
                  <li class="main-cards__content">
                  <img class="main-cards__img" src="${element.flags.svg}" alt="">
                  <div class="main-cards__wrapper">
                  <p class="main-cards__name">${element.name.common}</p>
                  <div class="main-cards__information">
                  <p class="main-cards__text">Population: ${element.population.toLocaleString()}</p>
                  <p class="main-cards__text">Region: ${element.region}</p>
                  <p class="main-cards__text">Captial: ${element.capital}</p>
                  </div>
                  </div>
                  </li>`;
    wrapper.insertAdjacentHTML("afterbegin", cards);
  });
}

countrAll();
