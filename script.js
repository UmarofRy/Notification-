
function Xabar(rang, Text) {
    const div = document.querySelector("#Notifactiona");
    

    const notification = document.createElement('div');
    notification.className = rang; 
    notification.innerHTML = `<h1>${Text}</h1> <span onClick="this.parentElement.remove()">❌</span>`;

    div.appendChild(notification);
    

    setTimeout(() => {
        notification.remove(); 
    }, 3000);
}
