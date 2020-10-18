const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");
const USER_LS = "currentUser", SHOWING_CN = "showing";

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add();
    greeting.innerText = `Hello ${text}`;
}

function askForName(){
    form.classList.add(SHOWING_CN);
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser == null){
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init(){

}

init();