// main.js
document.addEventListener("DOMContentLoaded", function() {
    const output = document.getElementById('output');
    const input = document.getElementById('input');
    input.disabled = true;

    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const command = input.value.trim().toLowerCase();
            input.value = '';
            if (command === 'start') {
                output.innerHTML = '';
                input.disabled = true;
                startBootSequence(output, input, () => {
                    input.disabled = false;
                    input.focus();
                    // Additional logic after boot sequence
                });
            }
        }
    });
});
