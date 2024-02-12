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
// Assuming this is part of your boot sequence completion logic
document.querySelector('.buttons').style.visibility = 'visible';

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
    displayMessage(output, "ERROR: Module integrity compromised.", () => {
        displayMessage(output, "Attempting automatic repair...", () => {
            displayMessage(output, "Diff found in AI_Core.js:", () => {
                displayMessage(output, "- corruptedLineOfCode();", () => {
                    displayMessage(output, "+ repairedLineOfCode();", () => {
                        // Ensure the input field is enabled before asking the user to apply the fix
                        input.disabled = false;
                        displayMessage(output, "Apply fix? [Y/N]", () => {
                            input.focus(); // Optionally set focus to the input field
                            // The event listener for handling the response should already be set up
                            // Ensure it checks for the input being enabled if necessary
                        });
                    });
                });
            });
        });
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
            // Add more systems as needed
        ];

        let systemIndex = 0;
        const loadSystem = () => {
            if (systemIndex < systems.length) {
                const system = systems[systemIndex];
                const duration = 1000 + Math.random() * 2000; // Random duration between 1s and 3s
                displayLoadingBar(output, system, duration, () => {
                    systemIndex++;
                    if (systemIndex === systems.length) {
                        simulateErrorAndFix(output, () => {
                            input.addEventListener('keydown', (event) => {
                                if (event.key === 'Enter') {
                                    const command = input.value.toUpperCase();
                                    input.value = ''; // Clear input
                                    if (command === 'Y') {
                                        displayMessage(output, "Fix applied. System integrity restored.", () => {
                                            // Continue with boot or finalize
                                            displayMessage(output, "System Boot Complete. MEAI Operational.");
                                        });
                                    } else if (command === 'N') {
                                        displayMessage(output, "Fix rejected. Critical error remains.");
                                    }
                                }
                            });
                        });
                    } else {
                        loadSystem(); // Load the next system
                    }
                });
            }
        };

        loadSystem(); // Start loading systems
    });
}
