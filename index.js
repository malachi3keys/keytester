// Keypress
const showkey = document.querySelector('#keypress');

document.addEventListener('keydown', function(event) {
    event.preventDefault();
    displayKey(event.key, event.code);
    keyAnimation(event.code); 
});


function displayKey(currentKey, currentCode) {
    showkey.innerHTML = currentKey === ' ' ? currentCode : currentKey;
}

function keyAnimation(currentCode) {
    if (currentCode == 'Enter') {
        let activeButton = document.querySelectorAll('.' + currentCode);

        for (i = 0; i < activeButton.length; i++) {
            activeButton[i].classList.add('pressed', 'highlight');
            setTimeout(timetest(activeButton[i]), 100);
        }  
          
    } else {
        let activeButton = document.querySelector('.' + currentCode);
        activeButton.classList.add('pressed', 'highlight');
        setTimeout(timetest(activeButton), 100);
    }
}

function timetest(btn) {
    btn.classList.remove('pressed'); 
} 


// Light Mode
const mode = document.querySelector('#mode');
const main = document.body;
const title = document.querySelector('.toggle-switch');

mode.addEventListener('click', () => {     
    main.classList.toggle('light-mode'); 
    
    //Change title so user knows what clicking switch does
    if (main.classList.contains('light-mode')){    
        title.setAttribute('title', 'click for dark mode');
    } else{
        title.setAttribute('title', 'click for light mode');
    }
})


// Layout Selection
const keyboard = document.querySelector('#main-board');
const layoutChoice = document.querySelector('#select-layout')
window.addEventListener('load',() => loadLayout(qwerty))

layoutChoice.addEventListener('change', () => {
    keyboard.replaceChildren();
    switch(layoutChoice.value){
        case 'qwerty':
            loadLayout(qwerty);
            break;
        case 'colemak':
            loadLayout(colemak);
            break;
        case 'dvorak':
            loadLayout(dvorak);
            break;
        case 'workman':
            loadLayout(workman);
            break;
        default:
            loadLayout(qwerty);
            break;
    } 
});

function loadLayout(layout){
    let layoutCount = 0;

    defaultKeyboard.map((key) => {
        let keycode = key.keycode;
        let text = key.value;
        let height = key.height;
        let width = key.width;
        let border = ''
        
        if (keycode == '' && text == '') {
            keycode = layout[layoutCount][0];
            text = layout[layoutCount][1];
            layoutCount++;
        } else if (keycode == 'blank'){
            border = 'spborder'
        } 
    
        let newDiv = document.createElement('div');
        newDiv.classList = `key ${keycode} ${width} ${height} ${border}` ;
        newDiv.innerHTML = `${text}`;
        keyboard.appendChild(newDiv);
    })
}


const qwerty = [
    ["Minus","_<br>-"], ["Equal","+<br>="],
    ["KeyQ","Q"], ["KeyW","W"], ["KeyE","E"], ["KeyR","R"], ["KeyT","T"],["KeyY","Y"], ["KeyU","U"], ["KeyI","I"], ["KeyO","O"], ["KeyP","P"], ["BracketLeft","{<br>["], ["BracketRight","}<br>]"],
    ["KeyA","A"], ["KeyS","S"], ["KeyD","D"], ["KeyF","F"], ["KeyG","G"],["KeyH","H"], ["KeyJ","J"], ["KeyK","K"], ["KeyL","L"], ["Semicolon",":<br>;"], ["Quote","\"<br>'"],
    ["KeyZ","Z"], ["KeyX","X"], ["KeyC","C"], ["KeyV","V"], ["KeyB","B"],["KeyN","N"], ["KeyM","M"], ["Comma","&lt;<br>,"], ["Period","&gt;<br>."], ["Slash","?<br>/"]
]

const colemak = [
    ["Minus","_<br>-"], ["Equal","+<br>="],
    ["KeyQ","Q"], ["KeyW","W"], ["KeyF","F"], ["KeyP","P"], ["KeyB","B"],["KeyJ","J"], ["KeyL","L"], ["KeyU","U"], ["KeyY","Y"], ["Semicolon",":<br>;"], ["BracketLeft","{<br>["], ["BracketRight","}<br>]"],
    ["KeyA","A"], ["KeyR","R"], ["KeyS","S"], ["KeyT","T"], ["KeyG","G"],["KeyM","M"], ["KeyN","N"], ["KeyE","E"], ["KeyI","I"], ["KeyO","O"], ["Quote","\"<br>'"],
    ["KeyZ","Z"], ["KeyX","X"], ["KeyC","C"], ["KeyD","D"], ["KeyV","V"],["KeyK","K"], ["KeyH","H"], ["Comma","&lt;<br>,"], ["Period","&gt;<br>."], ["Slash","?<br>/"]
]

const dvorak = [
    ["BracketLeft","{<br>["], ["BracketRight","}<br>]"],
    ["Quote","\"<br>'"], ["Comma","&lt;<br>,"], ["Period","&gt;<br>."], ["KeyP","P"], ["KeyY","Y"],["KeyF","F"], ["KeyG","G"], ["KeyC","C"], ["KeyR","R"], ["KeyL","L"], ["Slash","?<br>/"],["Equal","+<br>="],
    ["KeyA","A"], ["KeyO","O"], ["KeyE","E"], ["KeyU","U"], ["KeyI","I"],["KeyD","D"], ["KeyH","H"], ["KeyT","T"], ["KeyN","N"], ["KeyS","S"], ["Minus","_<br>-"], 
    ["Semicolon",":<br>;"], ["KeyQ","Q"], ["KeyJ","J"], ["KeyK","K"], ["KeyX","X"], ["KeyB","B"],["KeyM","M"], ["KeyW","W"], ["KeyV","V"], ["KeyZ","Z"],
]

const workman = [
    ["Minus","_<br>-"], ["Equal","+<br>="],
    ["KeyQ","Q"], ["KeyD","D"], ["KeyR","R"], ["KeyW","W"], ["KeyB","B"],["KeyJ","J"], ["KeyF","F"], ["KeyU","U"], ["KeyP","P"], ["Semicolon",":<br>;"], ["BracketLeft","{<br>["], ["BracketRight","}<br>]"],
    ["KeyA","A"], ["KeyR","S"], ["KeyS","H"], ["KeyT","T"], ["KeyG","G"],["KeyY","Y"], ["KeyN","N"], ["KeyE","E"], ["KeyO","O"], ["KeyI","I"], ["Quote","\"<br>'"],
    ["KeyZ","Z"], ["KeyX","X"], ["KeyM","M"], ["KeyC","C"], ["KeyV","V"],["KeyK","K"], ["KeyL","L"], ["Comma","&lt;<br>,"], ["Period","&gt;<br>."], ["Slash","?<br>/"]
]

const defaultKeyboard = [
    {
        keycode: "Escape",
        value: "Esc",
        height: "",
        width: ""
    },  
    {
        keycode: "blank",
        value: "",
        height: "",
        width: "space1"
    },
    {
        keycode: "F1",
        value: "F1",
        height: "",
        width: ""
    },
    {
        keycode: "F2",
        value: "F2",
        height: "",
        width: ""
    },
    {
        keycode: "F3",
        value: "F3",
        height: "",
        width: ""
    },
    {
        keycode: "F4",
        value: "F4",
        height: "",
        width: ""
    },
    {
        keycode: "blank",
        value: "",
        height: "",
        width: "space2"
    },
    {
        keycode: "F5",
        value: "F5",
        height: "",
        width: ""
    },
    {
        keycode: "F6",
        value: "F6",
        height: "",
        width: ""
    },
    {
        keycode: "F7",
        value: "F7",
        height: "",
        width: ""
    },
    {
        keycode: "F8",
        value: "F8",
        height: "",
        width: ""
    },
    {
        keycode: "blank",
        value: "",
        height: "",
        width: "space2"
    },
    {
        keycode: "F9",
        value: "F9",
        height: "",
        width: ""
    },
    {
        keycode: "F10",
        value: "F10",
        height: "",
        width: ""
    },
    {
        keycode: "F11",
        value: "F11",
        height: "",
        width: ""
    },
    {
        keycode: "F12",
        value: "F12",
        height: "",
        width: ""
    },
    {
        keycode: "blank",
        value: "",
        height: "",
        width: "space3"
    },
    {
        keycode: "PrintScreen",
        value: "PrtSc",
        height: "",
        width: ""
    },
    {
        keycode: "ScrollLock",
        value: "Scroll<br>Lock",
        height: "",
        width: ""
    },
    {
        keycode: "Pause",
        value: "Pause<br>Break",
        height: "",
        width: ""
    },
    {
        keycode: "blank",
        value: "",
        height: "",
        width: "space3"
    },
    {
        keycode: "blank",
        value: "",
        height: "",
        width: "space1"
    },
    {
        keycode: "blank",
        value: "",
        height: "",
        width: "space1"
    },
    {
        keycode: "blank",
        value: "",
        height: "",
        width: "space1"
    },
    {
        keycode: "blank",
        value: "",
        height: "",
        width: "space1"
    },
    {
        keycode: "Backquote",
        value: "~<br>`",
        height: "",
        width: ""
    },
    {
        keycode: "Digit1",
        value: "!<br>1",
        height: "",
        width: ""
    },
    {
        keycode: "Digit2",
        value: "@<br>2",
        height: "",
        width: ""
    },
    {
        keycode: "Digit3",
        value: "#<br>3",
        height: "",
        width: ""
    },
    {
        keycode: "Digit4",
        value: "$<br>4",
        height: "",
        width: ""
    },
    {
        keycode: "Digit5",
        value: "%<br>5",
        height: "",
        width: ""
    },
    {
        keycode: "Digit6",
        value: "^<br>6",
        height: "",
        width: ""
    },
    {
        keycode: "Digit7",
        value: "&<br>7",
        height: "",
        width: ""
    },
    {
        keycode: "Digit8",
        value: "*<br>8",
        height: "",
        width: ""
    },
    {
        keycode: "Digit9",
        value: "(<br>9",
        height: "",
        width: ""
    },
    {
        keycode: "Digit0",
        value: ")<br>0",
        height: "",
        width: ""
    },
    {
        keycode: "",
        value: "",
        height: "",
        width: ""
    },
    {
        keycode: "",
        value: "",
        height: "",
        width: ""
    },
    {
        keycode: "Backspace",
        value: "Backspace",
        height: "",
        width: "u2"
    },
    {
        keycode: "blank",
        value: "",
        height: "",
        width: "space3"
    },
    {
        keycode: "Insert",
        value: "Insert",
        height: "",
        width: ""
    },
    {
        keycode: "Home",
        value: "Home",
        height: "",
        width: ""
    },
    {
        keycode: "PageUp",
        value: "PgUp",
        height: "",
        width: ""
    },
    {
        keycode: "blank",
        value: "",
        height: "",
        width: "space3"
    },
    {
        keycode: "NumLock",
        value: "Num<br>Lock",
        height: "",
        width: ""
    },
    {
        keycode: "NumpadDivide",
        value: "/",
        height: "",
        width: ""
    },
    {
        keycode: "NumpadMultiply",
        value: "*",
        height: "",
        width: ""
    },
    {
        keycode: "NumpadSubtract",
        value: "-",
        height: "",
        width: ""
    },
    {
        keycode: "Tab",
        value: "Tab",
        height: "",
        width: "u15"
    },
    {
        keycode: "",
        value: "",
        height: "",
        width: ""
    },
    {
        keycode: "",
        value: "",
        height: "",
        width: ""
    },
    {
        keycode: "",
        value: "",
        height: "",
        width: ""
    },
    {
        keycode: "",
        value: "",
        height: "",
        width: ""
    },
    {
        keycode: "",
        value: "",
        height: "",
        width: ""
    },
    {
        keycode: "",
        value: "",
        height: "",
        width: ""
    },
    {
        keycode: "",
        value: "",
        height: "",
        width: ""
    },
    {
        keycode: "",
        value: "",
        height: "",
        width: ""
    },
    {
        keycode: "",
        value: "",
        height: "",
        width: ""
    },
    {
        keycode: "",
        value: "",
        height: "",
        width: ""
    },
    {
        keycode: "",
        value: "",
        height: "",
        width: ""
    },
    {
        keycode: "",
        value: "",
        height: "",
        width: ""
    },
    {
        keycode: "Backslash",
        value: "|<br>\\",
        height: "",
        width: "u15"
    },
    {
        keycode: "blank",
        value: "",
        height: "",
        width: "space3"
    },
    {
        keycode: "Delete",
        value: "Delete",
        height: "",
        width: ""
    },
    {
        keycode: "End",
        value: "End",
        height: "",
        width: ""
    },
    {
        keycode: "PageDown",
        value: "PgDn",
        height: "",
        width: ""
    },
    {
        keycode: "blank",
        value: "",
        height: "",
        width: "space3"
    },
    {
        keycode: "Numpad7",
        value: "7<br>Home",
        height: "",
        width: ""
    },
    {
        keycode: "Numpad8",
        value: "8<br>↑",
        height: "",
        width: ""
    },
    {
        keycode: "Numpad9",
        value: "9<br>PgUp",
        height: "",
        width: ""
    },
    {
        keycode: "NumpadAdd",
        value: "+",
        height: "h2",
        width: ""
    },
    {
        keycode: "CapsLock",
        value: "Caps Lock",
        height: "",
        width: "u175"
    },
    {
        keycode: "",
        value: "",
        height: "",
        width: ""
    },
    {
        keycode: "",
        value: "",
        height: "",
        width: ""
    },
    {
        keycode: "",
        value: "",
        height: "",
        width: ""
    },
    {
        keycode: "",
        value: "",
        height: "",
        width: ""
    },
    {
        keycode: "",
        value: "",
        height: "",
        width: ""
    },
    {
        keycode: "",
        value: "",
        height: "",
        width: ""
    },
    {
        keycode: "",
        value: "",
        height: "",
        width: ""
    },
    {
        keycode: "",
        value: "",
        height: "",
        width: ""
    },
    {
        keycode: "",
        value: "",
        height: "",
        width: ""
    },
    {
        keycode: "",
        value: "",
        height: "",
        width: ""
    },
    {
        keycode: "",
        value: "",
        height: "",
        width: ""
    },
    {
        keycode: "Enter",
        value: "Enter",
        height: "",
        width: "u225"
    },
    {
        keycode: "blank",
        value: "",
        height: "",
        width: "space3"
    },
    {
        keycode: "blank",
        value: "",
        height: "",
        width: "space1"
    },
    {
        keycode: "blank",
        value: "",
        height: "",
        width: "space1"
    },
    {
        keycode: "blank",
        value: "",
        height: "",
        width: "space1"
    },
    {
        keycode: "blank",
        value: "",
        height: "",
        width: "space3"
    },
    {
        keycode: "Numpad4",
        value: "4<br>←",
        height: "",
        width: ""
    },
    {
        keycode: "Numpad5",
        value: "5",
        height: "",
        width: ""
    },
    {
        keycode: "Numpad6",
        value: "6<br>→",
        height: "",
        width: ""
    },
    {
        keycode: "ShiftLeft",
        value: "Shift",
        height: "",
        width: "u225"
    },
    {
        keycode: "",
        value: "",
        height: "",
        width: ""
    },
    {
        keycode: "",
        value: "",
        height: "",
        width: ""
    },
    {
        keycode: "",
        value: "",
        height: "",
        width: ""
    },
    {
        keycode: "",
        value: "",
        height: "",
        width: ""
    },
    {
        keycode: "",
        value: "",
        height: "",
        width: ""
    },
    {
        keycode: "",
        value: "",
        height: "",
        width: ""
    },
    {
        keycode: "",
        value: "",
        height: "",
        width: ""
    },
    {
        keycode: "",
        value: "",
        height: "",
        width: ""
    },
    {
        keycode: "",
        value: "",
        height: "",
        width: ""
    },
    {
        keycode: "",
        value: "",
        height: "",
        width: ""
    },
    {
        keycode: "ShiftRight",
        value: "Shift",
        height: "",
        width: "u275"
    },
    {
        keycode: "blank",
        value: "",
        height: "",
        width: "space3"
    },
    {
        keycode: "blank",
        value: "",
        height: "",
        width: "space1"
    },
    {
        keycode: "ArrowUp",
        value: "↑",
        height: "",
        width: ""
    },
    {
        keycode: "blank",
        value: "",
        height: "",
        width: "space1"
    },
    {
        keycode: "blank",
        value: "",
        height: "",
        width: "space3"
    },
    {
        keycode: "Numpad1",
        value: "1<br>End",
        height: "",
        width: ""
    },
    {
        keycode: "Numpad2",
        value: "2<br>↓",
        height: "",
        width: ""
    },
    {
        keycode: "Numpad3",
        value: "3<br>PgDn",
        height: "",
        width: ""
    },
    {
        keycode: "Enter",
        value: "enter",
        height: "h2",
        width: ""
    },
    {
        keycode: "ControlLeft",
        value: "Ctrl",
        height: "",
        width: "u125"
    },
    {
        keycode: "MetaLeft",
        value: "Win",
        height: "",
        width: "u125"
    },
    {
        keycode: "AltLeft",
        value: "Alt",
        height: "",
        width: "u125"
    },
    {
        keycode: "Space",
        value: "Space",
        height: "",
        width: "u625"
    },
    {
        keycode: "AltRight",
        value: "Alt",
        height: "",
        width: "u125"
    },
    {
        keycode: "MetaRight",
        value: "Win",
        height: "",
        width: "u125"
    },
    {
        keycode: "ContextMenu",
        value: "Menu",
        height: "",
        width: "u125"
    },
    {
        keycode: "ControlRight",
        value: "Ctrl",
        height: "",
        width: "u125"
    },
    {
        keycode: "blank",
        value: "",
        height: "",
        width: "space3"
    },
    {
        keycode: "ArrowLeft",
        value: "←",
        height: "",
        width: ""
    },
    {
        keycode: "ArrowDown",
        value: "↓",
        height: "",
        width: ""
    },
    {
        keycode: "ArrowRight",
        value: "→",
        height: "",
        width: ""
    },
    {
        keycode: "blank",
        value: "",
        height: "",
        width: "space3"
    },
    {
        keycode: "Numpad0",
        value: "0<br>Ins",
        height: "",
        width: "u2"
    },
    {
        keycode: "NumpadDecimal",
        value: ".<br>Del",
        height: "",
        width: ""
    }
]