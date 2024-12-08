var userName=document.querySelector('#name-user')
var logout=document.querySelector('.logout')
var text=localStorage.getItem("text")
console.log(text);

userName.innerHTML=` <h1>WElCOME ${text}</h1>`
logout.addEventListener('click',function(){
    window.location.href="login.html";
})