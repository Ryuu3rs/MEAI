// utils.js
function displayMessage(output, message, callback) {
    let i = 0;
    const interval = setInterval(() => {
        if (i < message.length) {
            output.innerHTML += message.charAt(i);
            i++;
        } else {
            clearInterval(interval);
            output.innerHTML += '\n';
            if (callback) callback();
        }
        output.scrollTop = output.scrollHeight;
    }, 30);
}
