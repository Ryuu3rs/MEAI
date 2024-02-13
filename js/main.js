/**
 * @file main.js
 * @version 1.0.0
 * Handles the interactive boot sequence for an AI system, including user input for error fixing.
 */

/**
 * Wait for the DOM to fully load before executing any scripts.
 */
document.addEventListener("DOMContentLoaded", function() {
    const output = document.getElementById('output');
    const input = document.getElementById('input');
    const buttons = document.querySelector('.buttons'); // Assuming buttons are initially hidden.

    /**
     * Appends messages to the output area and auto-scrolls to the bottom.
     * @param {string} message - The message to be displayed in the output area.
     */
    function displayMessage(message) {
        output.innerHTML += `${message}\n`; // Add the message and a newline character.
        output.scrollTop = output.scrollHeight; // Scroll to the bottom of the output area.
    }

    /**
     * Enables the input field and sets focus on it.
     */
    function enableInput() {
        input.disabled = false; // Enable the input field.
        input.focus(); // Set focus to the input field.
    }

    /**
     * Disables the input field to prevent user input.
     */
    function disableInput() {
        input.disabled = true; // Disable the input field.
    }

    /**
     * Makes the interactive buttons visible after the boot sequence.
     */
    function showButtons() {
        buttons.style.visibility = 'visible'; // Change CSS visibility property to make buttons visible.
    }

    /**
     * Handles the completion of the boot sequence successfully.
     */
    function handleBootCompletion() {
        displayMessage("System Boot Complete. MEAI Operational.");
        enableInput(); // Re-enable input for further commands.
        showButtons(); // Optionally show buttons for further actions.
    }

    /**
     * Handles the scenario where the boot sequence fails or the system becomes corrupted.
     */
    function handleBootFailure() {
        displayMessage("System Boot Failed. AI Corrupted. Please restart.");
        enableInput(); // Allow the user to try restarting the boot sequence.
    }

    /**
     * Initiates the boot sequence, including handling a mid-sequence error that requires user interaction.
     */
    function startBootSequence() {
        disableInput(); // Prevent input during the initial part of the boot sequence.
        displayMessage("Boot sequence initiated...");

        // Simulate the first part of the boot sequence.
        setTimeout(() => {
            // Simulate an error and prompt for user decision.
            displayMessage("ERROR: Module integrity compromised. Attempting automatic repair...");
            displayMessage("Critical failure detected. AUTO repair needed. Apply fix? [Y/N]");
            enableInput(); // Enable input for user decision.
        }, 2000); // Adjust timing as needed for simulation.
    }

    /**
     * Event listener for the 'Enter' key to process commands and responses.
     */
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' && !input.disabled) {
            const command = input.value.trim().toUpperCase();
            input.value = ''; // Clear the input field after processing the command.

            // Handle the START command to initiate the boot sequence.
            if (command === 'START') {
                startBootSequence();
            } else if (command === 'Y') {
                // User agrees to apply the fix.
                displayMessage("Applying AUTO repair...");
                setTimeout(handleBootCompletion, 2000); // Simulate time to apply the fix and complete the boot.
            } else if (command === 'N') {
                // User declines the fix, leading to system corruption.
                handleBootFailure();
            }
        }
    });

    enableInput(); // Ensure the input field is enabled when the page loads.
});
