// start

const elForm = document.getElementById("form");
const elInput = document.getElementById("input");
const elSelect = document.getElementById("select");
const elText = document.getElementById("text");

const dollar = 10689.7;
const euro = 12316.7021;
const ruble = 149.0957;

let elInputValue = Number(elInput.value);

elForm.addEventListener('submit', function(e){
    e.preventDefault();

    if(!isNaN(elInputValue)){
        if(elSelect.value === "dollar"){
            elText.textContent = (elInput.value / dollar).toFixed(2)+ ' $';
        }else if(elSelect.value === "euro"){
            elText.textContent = (elInput.value / euro).toFixed(2)+ ' euro';
        }else if(elSelect.value === "ruble"){
            elText.textContent = (elInput.value / ruble).toFixed(2)+ ' ruble';
        }

    }else{
        elText.textContent = "Error";
    }
    })
