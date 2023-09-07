let myName = document.getElementById("name");

document.body.addEventListener("keyup",(event)=>{
    changeText();
});

function changeText(){
    document.getElementById("greet").innerHTML = "Hello " + myName.value;
}