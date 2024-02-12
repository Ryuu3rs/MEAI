// bootSequence.js

// Example ASCII Art for MEAI
const MEAI_ASCII = `
   __  __ _____ ___ ___ _   _ ___ 
  |  \/  | ____|_ _/ _ \\ | | |_ _|
  | |\/| |  _|  | | | | | | | | | 
  | |  | | |___ | | |_| | |_| | | 
  |_|  |_|_____|___\\___/ \\___/___|
`;

// Utility function to display messages letter by letter
function displayMessage(output, message, callback) {
    let i = 0;
    const interval = setInterval(() => {
        if (i < message.length) {
            output.innerHTML += message.charAt(i);
            i++;
        } else {
            clearInterval(interval);
            output.innerHTML += '\n'; // Move to the next line after the message is complete
            if (callback) callback(); // Proceed to the next function if provided
        }
        output.scrollTop = output.scrollHeight; // Keep scrolling to the bottom
    }, 20); // Speed of text appearance
}

// Function to display a loading bar with a percentage
function displayLoadingBar(output, label, duration, callback) {
    output.innerHTML += label + " [";
    let progress = 0;
    const intervalTime = duration / 100; // Duration divided by 100 to increment every 1%
    const interval = setInterval(() => {
        if (progress <= 100) {
            let bar = '='.repeat(progress / 2) + '-'.repeat((100 - progress) / 2); // Simplified loading bar
            output.innerHTML = output.innerHTML.replace(/\[=*\-*\] \d*%?/, `[${bar}] ${progress}%`);
            progress++;
        } else {
            clearInterval(interval);
            output.innerHTML += "]\n"; // Close the loading bar
            if (callback) callback(); // Call the next step
        }
        output.scrollTop = output.scrollHeight;
    }, intervalTime);
}

// Simulates an error and prompts for a fix
function simulateErrorAndFix(output, input, callback) {
    // Ensure the input field is enabled before asking the user to apply the fix
    input.disabled = false;
    displayMessage(output, "Apply fix? [Y/N]", () => {
        input.focus(); // Optionally set focus to the input field
        // The event listener for handling the response should already be set up
        // Ensure it checks for the input being enabled if necessary
        if (callback) callback();
    });
}

// Starts the detailed boot sequence
function startBootSequence(output, input) {
    displayMessage(output, MEAI_ASCII, () => { // Display ASCII art
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
            "Temporal Anomaly Detectors Calibration"
        ];
        
        // Function to simulate the loading of each system with a progress bar
        function loadSystem(output, systemIndex, callback) {
            if (systemIndex < systems.length) {
                const system = systems[systemIndex];
                const duration = Math.random() * (5000 - 1000) + 1000; // Random duration between 1s and 5s for variety
                displayLoadingBar(output, system, duration, () => {
                    // Show corresponding button for the system once it's loaded
                    showButtonForSystem(systemIndex);
                    systemIndex++;
                    if (systemIndex < systems.length) {
                        loadSystem(output, systemIndex, callback); // Load the next system
                    } else {
                        callback(); // All systems loaded, proceed to next step
                    }
                });
            }
        }
        
        // Function to show a specific button based on the system index
        function showButtonForSystem(systemIndex) {
            // Assuming you have a predefined list of buttons corresponding to each system
            const buttons = document.querySelectorAll('.buttons button');
            if (systemIndex < buttons.length) {
                buttons[systemIndex].style.visibility = 'visible';
            }
        }
        
        // Starts the detailed boot sequence
        function startBootSequence(output, input) {
            displayMessage(output, MEAI_ASCII, () => { // Display ASCII art
                loadSystem(output, 0, () => {
                    // Once all systems are loaded, simulate an error and prompt for a fix
                    simulateErrorAndFix(output, input, () => {
                        // Callback after error fix simulation, if needed
                        displayMessage(output, "System Boot Complete. MEAI Operational.");
                        // Optionally, enable input or proceed with additional game logic here
                    });
                });
            });
        }
