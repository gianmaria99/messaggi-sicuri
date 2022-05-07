let socket = io();
socket.on('new_message',msg=>{
    addMessageLeft(msg);
})
document.querySelector('button#send_msg').addEventListener('click',e=>{
    let msg = document.querySelector('input#input_chat').value;
    document.querySelector('input#input_chat').value = '';
    socket.emit('message',msg);
    addMessageRight(msg)
})

function addMessageLeft(msg){
    let div = document.createElement('div');
    div.setAttribute('class','message-left')
    div.textContent = msg;
    document.querySelector('div#display').appendChild(div)
}
function addMessageRight(msg){
    let div = document.createElement('div');
    div.setAttribute('class','message-right')
    div.textContent = msg;
    document.querySelector('div#display').appendChild(div)
}