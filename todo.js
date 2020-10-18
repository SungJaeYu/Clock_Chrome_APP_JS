const form = document.querySelector(".js-toDoForm"),
    toDoInput = form.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos != null){

    }
}
function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = doucument.createElement("button");
    delBtn.value = "X";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
}
function handleSubmit(EVENT){
    EVENT.PREVENTdEFAULT();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}
function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handelSubmit);
}

init();