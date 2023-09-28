const inputBox = document.getElementById("input-box");
const list = document.getElementById("list-container");

function clickHandler(){
    if(inputBox.value === ""){
        showErrorToast();
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
        showSuccessToast();
    }
    inputBox.value = "";
    saveData();
}

function showSuccessToast() {
    Toastify({
        text: 'Todo successfully added',
        duration: 3000, // Toast duration in milliseconds
        gravity: 'top', // Toast position (top, bottom, left, right, center)
        backgroundColor: 'green', // Toast background color
    }).showToast();
}

function removeTodoToast() {
    Toastify({
        text: 'Todo successfully removed',
        duration: 3000, // Toast duration in milliseconds
        gravity: 'top', // Toast position (top, bottom, left, right, center)
        backgroundColor: 'green', // Toast background color
    }).showToast();
}

function showErrorToast() {
    Toastify({
        text: 'input is empty',
        duration: 3000,
        gravity: 'top',
        backgroundColor: 'red',
    }).showToast();
}


list.addEventListener('click', (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
        removeTodoToast();
    }
}, false);

function saveData(){
    localStorage.setItem("data", list.innerHTML);
}

function showData(){
    list.innerHTML = localStorage.getItem("data");
}

showData();







