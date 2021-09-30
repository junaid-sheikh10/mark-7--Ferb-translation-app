//console.log("script is working");
//var name=prompt("name")
//alert(name);

var txtinput=document.querySelector("#input");
//console.log(txtinput);

var button=document.querySelector("#btn");
var division=document.querySelector("#outputdiv");

//var serverURL="https://api.funtranslations.com/translate/pirate.json?text=Hello%20sir%21%20my%20mother%20goes%20with%20me%20to%20the%20ocean."

var serverURL="	https://api.funtranslations.com/translate/ferb-latin.json"

function serverHandler(t){
     return serverURL+"?"+"text"+t
}

function errorHandler(){
    alert("server is down , please try after some time")
}

function clickHandler(){
    var input=txtinput.value;
    console.log(input);
    fetch(serverHandler(serverURL))
    .then(Response=>Response.json())
    .then(json=>{division.innerText=json.contents.translated})
    .catch(errorHandler)

    //division.innerText=input;
    
}

button.addEventListener("click", clickHandler)