const inputElement=document.querySelector("#input");
const cartItemsContainerElement=document.querySelector("#items");
const addItems = () => {
const cartItemText=inputElement.value;
const cartItemElement=document.createElement("li");
cartItemElement.textContent= cartItemText;
inputElement.value="";
cartItemElement.style.color="blue";
cartItemsContainerElement.appendChild(cartItemElement);
}