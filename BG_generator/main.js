const formInput = document.querySelector("form");
const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const directions = document.querySelectorAll('input[name="direction"]');
const answer = document.querySelector(".demo");

const bgGerenator = () => {
  let selectedValue;

  for (const item of directions) {
    if (item.checked) {
      selectedValue = item.value;
    }
  }

  let gradient = `linear-gradient(${selectedValue}, ${color1.value}, ${color2.value})`;

  document.body.style.backgroundImage = gradient;

  answer.textContent = `${color1.value}, ${color2.value}`;
};

formInput.addEventListener("change", bgGerenator);
