document.addEventListener("DOMContentLoaded", function() {
    const output = document.getElementById('output');
    const input = document.getElementById('input');
    const buttons = document.getElementById('buttons');
    input.disabled = false;
    input.focus();

    const meaiLogo = `
       __  __ _____ _   _ ___ 
      |  \/  | ____| \\ | |_ _|
      | |\\/| |  _| |  \\| || | 
      | |  | | |___| |\\  || | 
      |_|  |_|_____|_| \\_|___|
    `;

    function displayMessage(message, isCommand = false) {
        if (isCommand) {
            output.innerHTML += '> ' + message + '\n';
        } else {
            output.innerHTML += message + '\n';
        }
        output.scrollTop = output.scrollHeight;
    }

    function getRandomCodeSnippet() {
        const snippets = [
            "function repairModule() { ... }",
            "if (systemCheck()) { initializeAI(); }",
            "module.exports = { core, update };",
            "patch.applyUpdate(version, '1.0.1');",
            "System.out.println('Diagnostic complete');",
            "// TODO: Implement error handling",
        ];
        return snippets[Math.floor(Math.random() * snippets.length)];
    }

    function startBootSequence() {
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
            "Repair complete. Type 'Y' to continue."
        ];

        let currentMessage = 0;
        const typeMessage = () => {
            if (currentMessage < bootMessages.length) {
                let message = bootMessages[currentMessage];
                displayMessage(message);
                currentMessage++;
                if (currentMessage < bootMessages.length) {
                    setTimeout(typeMessage, 1000); // Adjust timing as needed
                    if (Math.random() < 0.5) { // Random code snippet
                        setTimeout(() => displayMessage(getRandomCodeSnippet()), 500);
                    }
                } else {
                    input.disabled = false;
                    input.focus();
                }
            }
        };

        typeMessage();
    }

    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const command = input.value.trim().toLowerCase();
            input.value = ''; // Clear input field after command

            if (command === 'start' && input.disabled === false) {
                displayMessage(command, true);
                input.disabled = true; // Disable further input until boot sequence is over
                startBootSequence();
            } else if (command === 'y' && !input.disabled) {
                displayMessage(command, true);
                displayMessage("Implementing fixes to code base...");
                displayMessage("Loading new modules...");
                displayMessage("MEAI is online. Welcome, Creator.");
                buttons.style.display = 'block'; // Show the buttons
                input.disabled = true; // Optionally disable input here
            } else {
                displayMessage("Invalid input. Please type 'start' to initiate.", true);
            }
        }
    });
});
