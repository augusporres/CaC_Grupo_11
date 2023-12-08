const add = document.querySelector("#add");
const sub = document.querySelector("#sub");
const quantity = document.querySelector("#cantidad");


add.addEventListener("click", () => quantity.value = Number(quantity.value) + 1)
sub.addEventListener("click", () => {

  if (Number(quantity.value) > 0) {
    quantity.value = Number(quantity.value) - 1;
  } 
}); 