const checkBtn = () => {
    const inputCheckBoxElement = document.querySelector("#inputCheckBox");
    const changeLableElement = document.querySelector("#changeLable");
    if(inputCheckBoxElement.checked === true){
    changeLableElement.classList.toggle("strike-through");
    changeLableElement.style.color="red";
    }else{
    changeLableElement.classList.toggle("strike-through");
    changeLableElement.style.color="green";
    }
    }