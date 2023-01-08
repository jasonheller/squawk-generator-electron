const ipc = require('electron').ipcRenderer;
var exitb = document.getElementById('quitb');
var gsb = document.getElementById('gsb');
var sqwk = document.getElementById('sqwk');

exitb.addEventListener('click', ()=>{
    ipc.send('close');
});

gsb.addEventListener('click',()=>{sqwk.innerText = generateSquawk()});

function generateSquawk(){
    var squawk = [0, 0, 0, 0];
    squawk[0] = Math.floor(Math.random() * 7) + 1; 
    squawk[1] = Math.floor(Math.random() * 7) + 1; 
    squawk[2] = Math.floor(Math.random() * 7) + 1; 
    squawk[3] = Math.floor(Math.random() * 7) + 1; 
    let final_squawk = squawk.join(" ");
    return final_squawk
}
