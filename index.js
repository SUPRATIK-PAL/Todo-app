const inputBox = document.getElementById("input-box");
const list = document.getElementById("list-container");
const numOfLists = document.getElementById("count");

let count = 0;

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
        count++;
        numOfLists.innerText = count + " tasks left";
        console.log(count);
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
        if(count === 0){
            count = 0;
        }else{
            count--;
        }
        numOfLists.innerText = count + " tasks left";
        saveData();
        removeTodoToast();
    }
}, false);

function saveData(){
    localStorage.setItem("data", list.innerHTML);
    localStorage.setItem("data2", numOfLists.innerText);
}

function showData(){
    list.innerHTML = localStorage.getItem("data");
    numOfLists.innerText = localStorage.getItem("data2")
}

showData();







