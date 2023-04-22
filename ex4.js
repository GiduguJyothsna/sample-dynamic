const inputEl = document.querySelector("#input");
const listContainerEl = document.querySelector("#listContainer");

const clickBtn1 = () => {
const nameEl = inputEl.value;
inputEl.value = "";
listContainerEl.textContent = nameEl;
}
const inputItemEl = document.querySelector("#inputItem");
const listContainerItemsEl = document.querySelector("#listContainerItems");

const clickBtn2 = () => {
const nameEl = inputItemEl.value;
const listEl = document.createElement("li");
listEl.textContent = nameEl;
inputItemEl.value = "";
listContainerItemsEl.appendChild(listEl);
}