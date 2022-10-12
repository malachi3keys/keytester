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