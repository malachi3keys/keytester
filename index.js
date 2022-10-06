//Keypress
const showkey = document.querySelector('#keypress');

document.addEventListener('keydown', function(event) {
    displayKey(event.key, event.code);
    keyAnimation(event.key); 
});


function displayKey(test, testcode) {
    if (testcode == 'Space'){
        showkey.innerHTML = testcode;     
    } else{
        showkey.innerHTML = `${test} ${testcode}`;
    }
}

function keyAnimation(currentKey) {
    var activeButton = document.querySelector('.' + currentKey);
    activeButton.classList.add('pressed', 'highlight');

    setTimeout(function(){
        activeButton.classList.remove('pressed');    
    }, 100);
}