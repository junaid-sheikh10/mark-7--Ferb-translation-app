//console.log("script is working");
//var name=prompt("name")
//alert(name);

var txtinput=document.querySelector("#txt");
//console.log(txtinput);

var button=document.querySelector("#btn");
var division=document.querySelector("#divi");

var serverURL="https://api.funtranslations.com/translate/pirate.json?text=Hello%20sir%21%20my%20mother%20goes%20with%20me%20to%20the%20ocean."


function serverHandler(t){
     return serverURL+"?"+"text"+t
}

function clickHandler(){
    var input=txtinput.value;
    console.log(input);
    fetch()


    division.innerText=input;
    
}

button.addEventListener("click", clickHandler)