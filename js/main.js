document.addEventListener("DOMContentLoaded", function() {
    const output = document.getElementById('output');
    const input = document.getElementById('input');
    const buttons = document.querySelector('.buttons'); // Assuming buttons are hidden initially

    // Function to display messages in the output area
    function displayMessage(message) {
        output.innerHTML += message + '\n';
        output.scrollTop = output.scrollHeight; // Auto-scroll to the bottom
    }

    // Function to enable the input field and focus on it
    function enableInput() {
        input.disabled = false;
        input.focus();
    }

    // Function to disable the input field
    function disableInput() {
        input.disabled = true;
    }

    // Function to show the interactive buttons after the boot sequence
    function showButtons() {
        buttons.style.visibility = 'visible';
    }

    // Function to start the boot sequence
    function startBootSequence() {
        disableInput(); // Disable input to prevent typing during the sequence
        // Simulate the boot sequence, for example, with messages
        displayMessage("Starting boot sequence...");
        // Placeholder for boot sequence logic, replace with actual function call if defined elsewhere
        setTimeout(() => {
            displayMessage("Boot sequence complete. Type 'Y' to apply patch, 'N' to skip.");
            enableInput(); // Re-enable input for user response
        }, 2000); // Simulate delay for boot sequence, adjust as needed
    }

    // Event listener for the input field to handle commands and responses
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const command = input.value.trim().toUpperCase();
            input.value = ''; // Clear the input field after processing the command

            if (command === 'START' && input.disabled === false) {
                startBootSequence();
            } else if (command === 'Y' || command === 'N') {
                if (command === 'Y') {
                    displayMessage("Patch applied successfully.");
                    // Additional logic for applying the patch
                } else {
                    displayMessage("Patch not applied.");
                    // Additional logic for skipping the patch
                }
                showButtons(); // Show buttons after handling the patch decision
                // Optionally, proceed with additional game logic here
            }
        }
    });

    enableInput(); // Ensure input is enabled when the page loads
});
