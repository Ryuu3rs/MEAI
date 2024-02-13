/**
 * bootSequence.js
 * Version 1.1.1
 * Implements a detailed boot sequence for an AI system, including system initialization,
 * dynamic loading bars, simulated error detection, and user interaction for error fixing.
 */

/**
 * ASCII Art for MEAI.
 */
const MEAI_ASCII = `
   __  __ _____ ___ ___ _   _ ___ 
  |  \/  | ____|_ _/ _ \\ | | |_ _|
  | |\/| |  _|  | | | | | | | | | 
  | |  | | |___ | | |_| | |_| | | 
  |_|  |_|_____|___\\___/ \\___/___|
`;

/**
 * Displays a message in the output area, simulating typing effect.
 * @param {HTMLElement} output - The output element where messages are displayed.
 * @param {string} message - The message to display.
 * @param {Function} callback - Optional callback to execute after the message is displayed.
 */
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
    }, 20);
}

/**
 * Simulates the loading of a system with a dynamic progress bar.
 * @param {HTMLElement} output - The output element where the loading bar is displayed.
 * @param {string} label - The name of the system being loaded.
 * @param {number} duration - The duration for the loading simulation in milliseconds.
 * @param {Function} callback - Callback to execute after loading is complete.
 */
function displayLoadingBar(output, label, duration, callback) {
    output.innerHTML += label + " [";
    let progress = 0;
    const intervalTime = duration / 100;
    const interval = setInterval(() => {
        if (progress <= 100) {
            let bar = '='.repeat(progress / 2) + '-'.repeat((100 - progress) / 2);
            output.innerHTML = output.innerHTML.replace(/\[=*\-*\] \d*%?/, `[${bar}] ${progress}%`);
            progress++;
        } else {
            clearInterval(interval);
            output.innerHTML += "]\n";
            if (callback) callback();
        }
        output.scrollTop = output.scrollHeight;
    }, intervalTime);
}

/**
 * Simulates an error and prompts the user for a decision to fix it.
 * @param {HTMLElement} output - The output element where messages are displayed.
 * @param {HTMLElement} input - The input element to be enabled for user response.
 */
function simulateErrorAndFix(output, input, onSuccess, onFailure) {
    // Enable input for user interaction
    input.disabled = false;
    input.focus(); // Focus on the input field for user response

    // Display the simulated error and prompt for user interaction
    displayMessage(output, "ERROR: Module integrity compromised.", () => {
        displayMessage(output, "Attempting automatic repair...", () => {
            displayMessage(output, "Critical failure detected. AUTO repair needed. Apply fix? [Y/N]", () => {
                // Wait for user input in main.js, not here
            });
        });
    });

    // Listen for user input in main.js to decide onSuccess or onFailure actions


/**
 * Initiates the boot sequence, including system initializations and error simulation.
 * @param {HTMLElement} output - The output element where the boot sequence is displayed.
 * @param {HTMLElement} input - The input element for user responses.
 */
function startBootSequence(output, input) {
    // Temporarily disable input to prevent user interaction during the sequence
    input.disabled = true;

    displayMessage(output, MEAI_ASCII, () => {
        const systems = [
            "Boot Loader Initialization",
            "Kernel Module Loading",
            "Security Protocols Establishing",
            "Memory Management Configuration",
            "AI Personality Module Activation",
            "Network Interface Configuration",
            "Data Encryption Protocols Loading",
            "Sensory Input Systems Calibration",
            "Cloud Sync Capabilities Establishing",
            "User Interface Components Initialization",
            "Power Management Systems Check",
            "External Device Connections Setup",
            "Diagnostic Tools Loading",
            "Virtual Reality Interface Setup",
            "Machine Learning Core Activation",
            "Quantum Encryption Module Boot",
            "Interstellar Navigation Systems Online",
            "Temporal Anomaly Detectors Calibration",
        ];

        let currentSystemIndex = 0;

        // Function to load the next system in the sequence
        const loadNextSystem = () => {
            if (currentSystemIndex < systems.length) {
                const system = systems[currentSystemIndex];
                displayMessage(output, `${system}...`, () => {
                    displayLoadingBar(output, system, 1000, () => {
                        currentSystemIndex++;
                        // Check if it's time to simulate the error
                        if (currentSystemIndex === Math.floor(systems.length / 2)) {
                            simulateErrorAndPromptForFix();
                        } else {
                            loadNextSystem();
                        }
                    });
                });
            } else {
                // All systems loaded successfully, or continue after fixing the error
                displayMessage(output, "System Boot Complete. MEAI Operational.");
                input.disabled = false; // Re-enable input after the sequence
            }
        };

        // Function to simulate an error and prompt the user for a fix
        const simulateErrorAndPromptForFix = () => {
            displayMessage(output, "ERROR: Module integrity compromised. Attempting automatic repair...", () => {
                displayMessage(output, "Critical failure detected. AUTO repair needed. Apply fix? [Y/N]", () => {
                    input.disabled = false; // Enable input for user decision
                    input.focus();
                    // User response handling is expected to be set up in main.js
                });
            });
        };

        loadNextSystem(); // Start loading systems
    });
}

