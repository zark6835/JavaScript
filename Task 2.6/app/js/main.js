const string = document.querySelector(".main-input__value");
const btn = document.querySelector(".main-input__btn");
const wrapper = document.querySelector(".main-wrapper__ex");

// функция редактирования текста
function editInput() {
  document.querySelectorAll(".main-edit").forEach((btn) => {
    btn.addEventListener("click", function (event) {
      const li = event.target.closest(".main-ex__content");
      const p = li.querySelector(".main-text__ex");
      p.style.display = "none";

      const input = li.querySelector(".main-edit__input");
      input.style.display = "block";
      input.focus();
      input.value = p.textContent;

      console.log(btn);
      document.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          p.textContent = input.value;
          input.style.display = "none";
          p.style.display = "block";
          saveToLocalStorage();
        }
      });
    });
  });
}

// функция удаления текста
function delInput() {
  document.querySelectorAll(".main-basket").forEach((basket) => {
    basket.addEventListener("click", function (del) {
      del.target.parentNode.parentNode.remove();
      saveToLocalStorage();
    });
  });
}

btn.addEventListener("click", function () {
  if (string.value != "") {
    const purpose = `
    <li class="main-ex__content">
    <p class="main-text__ex">${string.value}</p>
    <input class="main-edit__input" type="text">
    <form class="main-wrapper__btn">
    <input class="main-edit" type="button" value="">
    <input class="main-basket" type="button" value="">
    </form>
    </li>
    `;
    wrapper.insertAdjacentHTML("afterbegin", purpose);

    string.value = "";

    editInput()

    delInput()

    saveToLocalStorage();
  }
});

document.querySelector(".footer-del").addEventListener("click", function () {
  wrapper.innerHTML = "";
  saveToLocalStorage();
});

// загрузка списка при загрузке страницы
function saveToLocalStorage() {
  const items = [];
  wrapper.querySelectorAll('.main-text__ex').forEach((p) => {
    items.push(p.textContent);
  });
  localStorage.setItem('exerciseList', JSON.stringify(items));
}

// функция загрузки списка из локального хранилища
function loadFromLocalStorage() {
  const items = JSON.parse(localStorage.getItem('exerciseList'));
  if (items) {
    let purpose = '';
    items.forEach((text) => {
      purpose += `
        <li class="main-ex__content">
          <p class="main-text__ex">${text}</p>
          <input class="main-edit__input" type="text">
          <form class="main-wrapper__btn">
            <input class="main-edit" type="button" value="">
            <input class="main-basket" type="button" value="">
          </form>
        </li>
      `;
    });
    wrapper.insertAdjacentHTML("afterbegin", purpose);
  }
}

loadFromLocalStorage();
editInput()
delInput()
