//Keypress
const showkey = document.querySelector('#keypress');

document.addEventListener('keydown', function(event) {
    event.preventDefault();
    displayKey(event.key, event.code);
    keyAnimation(event.code); 
});


function displayKey(currentKey, currentCode) {
    if (currentKey === ''){
        showkey.innerHTML = currentCode;     
    } else{
        showkey.innerHTML = currentKey;
    }
}

function keyAnimation(currentCode) {
    var activeButton = document.querySelector('.' + currentCode);
    activeButton.classList.add('pressed', 'highlight');

    setTimeout(function(){
        activeButton.classList.remove('pressed');    
    }, 100);
}