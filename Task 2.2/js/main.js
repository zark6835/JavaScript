fetch("./js/menu.json")
  .then((res) => res.json())
  .then((data) => menuList(data));

function menuList(data) {
  const buttons = document.querySelectorAll("button");
  const cardsContainer = document.querySelector(".menu__wrapper");

  const cards = data.all.map((item) => {
    return `
      <div class="menu__content">
           <img src="${item.img}" alt="">
           <div>
              <div class="menu__price">
                 <h3>${item.name}</h3>
                 <p>${item.price}</p>
              </div>
              <p>${item.description}</p>
           </div>
        </div>`;
  });
  cardsContainer.insertAdjacentHTML("afterbegin", cards.join(""));

  const hendleClick = (event) => {
    const listId = event.target.id;
    console.log(listId);
    if (listId == "all") {
      const cards = data.all.map((item) => {
        return `
            <div class="menu__content">
                 <img src="${item.img}" alt="">
                 <div>
                    <div class="menu__price">
                       <h3>${item.name}</h3>
                       <p>${item.price}</p>
                    </div>
                    <p>${item.description}</p>
                 </div>
              </div>`;
      });
      if (cardsContainer != "") {
        cardsContainer.innerHTML = "";
      }
      cardsContainer.insertAdjacentHTML("afterbegin", cards.join(""));
    } else if (listId == "breakfast") {
      const cards = data.breakfast.map((item) => {
        return `
              <div class="menu__content">
                   <img src="${item.img}" alt="">
                   <div>
                      <div class="menu__price">
                         <h3>${item.name}</h3>
                         <p>${item.price}</p>
                      </div>
                      <p>${item.description}</p>
                   </div>
                </div>`;
      });
      if (cardsContainer != "") {
        cardsContainer.innerHTML = "";
      }
      cardsContainer.insertAdjacentHTML("afterbegin", cards.join(""));
    } else if (listId == "lunch") {
      const cards = data.lunch.map((item) => {
        return `
              <div class="menu__content">
                   <img src="${item.img}" alt="">
                   <div>
                      <div class="menu__price">
                         <h3>${item.name}</h3>
                         <p>${item.price}</p>
                      </div>
                      <p>${item.description}</p>
                   </div>
                </div>`;
      });
      if (cardsContainer != "") {
        cardsContainer.innerHTML = "";
      }
      cardsContainer.insertAdjacentHTML("afterbegin", cards.join(""));
    } else if (listId == "shakes") {
      const cards = data.shakes.map((item) => {
        return `
              <div class="menu__content">
                   <img src="${item.img}" alt="">
                   <div>
                      <div class="menu__price">
                         <h3>${item.name}</h3>
                         <p>${item.price}</p>
                      </div>
                      <p>${item.description}</p>
                   </div>
                </div>`;
      });
      if (cardsContainer != "") {
        cardsContainer.innerHTML = "";
      }
      cardsContainer.insertAdjacentHTML("afterbegin", cards.join(""));
    } else if (listId == "dinner") {
      const cards = data.dinner.map((item) => {
        return `
              <div class="menu__content">
                   <img src="${item.img}" alt="">
                   <div>
                      <div class="menu__price">
                         <h3>${item.name}</h3>
                         <p>${item.price}</p>
                      </div>
                      <p>${item.description}</p>
                   </div>
                </div>`;
      });
      if (cardsContainer != "") {
        cardsContainer.innerHTML = "";
      }
      cardsContainer.insertAdjacentHTML("afterbegin", cards.join());
    } else {
      console.log("Error");
    }
  };

  buttons.forEach((button) => {
    button.addEventListener("click", hendleClick);
  });
}
