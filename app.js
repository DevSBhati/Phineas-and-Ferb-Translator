var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputBox = document.querySelector("#ouput");

var serverURL = "https://api.funtranslations.com/translate/ferb-latin.json"

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function clickHandler() {
    var textInput = txtInput.value;
    fetch(getTranslationURL(textInput))
       .then(response => response.json())
       .then(json => {
          var textTranslated = json.contents.translated;
          outputBox.innerText = textTranslated;
         })
       .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler)

function errorHandler(error) {
    console.log("error occured!",error)
    alert("some error occured, please try again later!")
}
