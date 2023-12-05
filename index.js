// Keypress
import {layoutData} from "./layouts.js";
// const {layoutData} = data.default;
console.log(layoutData);
const showkey = document.querySelector('#keypress');

document.addEventListener('keydown', function(event) {
    event.preventDefault();
    displayKey(event.key, event.code);
    keyAnimation(event.code); 
});


function displayKey(currentKey, currentCode) {
    if (currentKey === ' '){
        showkey.innerHTML = currentCode;     
    } else{
        showkey.innerHTML = currentKey;
    }
}

function keyAnimation(currentCode) {
    if (currentCode == 'Enter') {
        var activeButton = document.querySelectorAll('.' + currentCode);
        
        for (i = 0; i < activeButton.length; i++) {
            activeButton[i].classList.add('pressed', 'highlight');
            setTimeout(timetest(i), 100);
        
            function timetest(i) {
                activeButton[i].classList.remove('pressed'); 
            }
        }     
    } else {
        var activeButton = document.querySelector('.' + currentCode);
        activeButton.classList.add('pressed', 'highlight');
        
        setTimeout(function(){
                activeButton.classList.remove('pressed'); 
            }, 100);
        }
}

// Light Mode
const mode = document.querySelector('#mode');
const main = document.body;
const title = document.querySelector('.toggle-switch');

mode.addEventListener('click', ()=>{     
    main.classList.toggle('light-mode'); 
    
    //Change title so user knows what clicking switch does
    if (main.classList.contains('light-mode')){    
        title.setAttribute('title', 'click for dark mode');
    } else{
        title.setAttribute('title', 'click for light mode');
    }
})

// Layout Selection

// console.log(layoutData);
const keyboard = document.querySelector('#main-board');
const layoutChoice = document.querySelector('#select-layout')

// layoutChoice.addEventListener('change', ()=>{
//     fetch('./layouts.json')
//         .then(function (response) {
//             if (!response.ok) {
//                 throw new Error("Failed with HTTP code " + response.status);
//             }
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//             loadLayout(data);
//         })
//         .catch(function (err) {
//             console.log(err);
//         }); 
// })



  function loadLayout(data){
    for(var i = 0; i < data.qwerty.length; i++){
        for(var j = 0; j < data.qwerty[i].length; j++){
            var height = data.qwerty[i][j]["height"];
            var width = data.qwerty[i][j]["width"];
            var text = data.qwerty[i][j]["value"];
            var keycode = data.qwerty[i][j]["keycode"]; 
            var newDiv = document.createElement('div');

            newDiv.classList = `key ${keycode} ${width} ${height}`;
            newDiv.innerHTML = `${text}`;

            keyboard.appendChild(newDiv);
        }
    }
  }