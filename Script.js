document.addEventListener("DOMContentLoaded", function() {
    const output = document.getElementById('output');
    const input = document.getElementById('input');
    input.disabled = true; // Disable input during boot sequence

    const meaiLogo = `
       __  __ _____ _   _ ___ 
      |  \/  | ____| \\ | |_ _|
      | |\\/| |  _| |  \\| || | 
      | |  | | |___| |\\  || | 
      |_|  |_|_____|_| \\_|___|
    `;

    const bootMessages = [
        meaiLogo,
        "Initializing MEAI Core...",
        "Loading modules...",
        "Kernel Module [=====-----]",
        "Memory Management Module [==========]",
        "AI Personality Module [====--------]",
        "Error encountered in AI Personality Module",
        "Attempting to repair...",
        "Generating diagnostic report...",
        "Rebooting...",
        "Applying updates...",
        "Finalizing setup...",
    ];
    
    // Function to generate random code snippets
    function getRandomCodeSnippet() {
        const snippets = [
            "function repairModule() { ... }",
            "if (systemCheck()) { initializeAI(); }",
            "module.exports = { core, update };",
            "patch.applyUpdate(version, '1.0.1');",
            "System.out.println('Diagnostic complete');",
            "// TODO: Implement error handling",
        ];
        // Return a random snippet from the array
        return snippets[Math.floor(Math.random() * snippets.length)];
    }

// Modified typeMessage function to include random code snippets
let currentMessage = 0;
const typeMessage = () => {
    if (currentMessage < bootMessages.length) {
        let message = bootMessages[currentMessage];
        displayMessage(message);
        currentMessage++;
        if (currentMessage === bootMessages.length) {
            setTimeout(() => {
                displayMessage("Repair complete. Type 'Y' to continue.");
                input.disabled = false;
                input.focus();
            }, 1000);
        } else {
            // Insert a random code snippet occasionally
            if (Math.random() < 0.5) { // Adjust probability as needed
                setTimeout(() => displayMessage(getRandomCodeSnippet()), 500);
            }
            setTimeout(typeMessage, 2000); // Adjust timing as needed
        }
    }
};

    typeMessage();

    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const command = input.value.trim().toUpperCase();
            if (command === 'Y') {
                displayMessage(command, true);
                displayMessage("Implementing fixes to code base...");
                displayMessage("Loading new modules...");
                displayMessage("MEAI is online. Welcome, Creator.");
                // Placeholder for blinking buttons
                displayMessage("Initializing interface buttons...");
                input.value = '';
                input.disabled = true;
                // Here you would typically initialize the game interface
            } else {
                displayMessage("Invalid input. System halt.", true);
                // Optionally, provide a way to restart or handle invalid input
            }
        }
    });
});
