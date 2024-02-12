document.addEventListener("DOMContentLoaded", function() {
    const output = document.getElementById('output');
    const input = document.getElementById('input');
    const buttons = document.getElementById('buttons');

    // Function to enable the input field
    function enableInput() {
        input.disabled = false;
        input.focus();
    }

    // Function to disable the input field
    function disableInput() {
        input.disabled = true;
    }

    // Function to reveal the button UI after the boot sequence
    function showButtons() {
        buttons.style.visibility = 'visible';
    }

    // Function to handle the end of the boot sequence
    function onBootComplete() {
        enableInput(); // Re-enable input for further commands
        showButtons(); // Show the interactive buttons
    }

    // Start the boot sequence when the user types "start" and presses Enter
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const command = input.value.trim().toLowerCase();
            input.value = ''; // Clear the input field

            if (command === 'start' && input.disabled === false) {
                disableInput(); // Optionally disable the input field during the boot sequence
                // Assuming startBootSequence is defined in bootSequence.js
                startBootSequence(output, input, onBootComplete);
            }
        }
    });

    // Initially enable the input field to allow "start" command
    enableInput();
});
