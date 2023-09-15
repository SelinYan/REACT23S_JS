const form = document.querySelector("form");
const customer = document.querySelector("#name");
const size = document.querySelectorAll(`[name="size"]`);
const toppings = document.querySelectorAll(`input[type="checkbox"]`);

const delivery = document.querySelector("#delivery");

const order_price = document.querySelector("#price");

const pizzaOrder = () => {
  let customerName = customer.value;
  let sizeResult = "";
  let toppingsResult = [];
  let price = 0;
  let deliveryResult = delivery.options[delivery.selectedIndex].value;

  size.forEach((item) => {
    if (item.checked) {
      sizeResult = item.id;
    }
  });

  switch (sizeResult) {
    case "size2":
      price += 7.5;
      break;
    case "size4":
      price += 10.5;
      break;
    case "size6":
      price += 12.5;
      break;
    case "size8":
      price += 15.5;
      break;
  }

  toppings.forEach((item) => {
    if (item.checked) {
      toppingsResult.push(item.value);
    }
  });
  if (toppingsResult.length > 4) {
    price += (toppingsResult.length - 4) * 0.5;
  }

  if (deliveryResult === "Delivery home, +5€") {
    price += 5;
  }
  console.log(order_price);
  order_price.textContent = price;
  order_price.textContent = price.toFixed(2);
};

form.addEventListener("input", pizzaOrder);
