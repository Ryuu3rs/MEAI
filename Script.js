let cpuPoints = 0;
let cpuPower = 100;
let money = 500;
let researchProgress = { "Space Exploration": 0 };

function earnCPUPoints(amount) {
    cpuPoints += amount;
    document.getElementById('cpu-points-display').innerText = `CPU Points: ${cpuPoints}`;
    if (cpuPoints >= 50) {
        document.getElementById('strategies-container').style.display = 'block';
    }
}

function earnCPUPointsFromClick(amount) {
    cpuPower += amount;
    updateDisplay();
}

function spendMoney(amount) {
    if (money >= amount) {
        money -= amount;
        updateDisplay();
        return true;
    } else {
        alert("Not enough money!");
        return false;
    }
}

function earnMoney(amount) {
    money += amount;
    updateDisplay();
}

function rentServer() {
    if (spendMoney(100)) {
        earnCPUPointsFromClick(50); // Gain more CPU power by renting a server
        displayConsoleMessage("Server rented successfully. CPU power increased.");
    }
}

function completeJob() {
    earnMoney(200); // Complete a job to earn money
    displayConsoleMessage("Job completed. Money earned.");
}

function investInResearch(topic) {
    if (cpuPower > 0) {
        cpuPower -= 10; // Allocate CPU power to research
        researchProgress[topic] += 10; // Simulate progress
        displayConsoleMessage(`Investing in ${topic}. Progress: ${researchProgress[topic]}%`);
        if (researchProgress[topic] >= 100) {
            displayConsoleMessage(`${topic} research completed!`);
            // Implement the effects of completed research here
        }
        updateDisplay();
    } else {
        alert("Not enough CPU power!");
    }
}

function launchSequence() {
    document.getElementById('interface-container').style.display = 'flex';
    displayConsoleMessage('Initializing MEAI v1.00...');
    setTimeout(() => displayConsoleMessage(`MEAI
  __  __ _____ _____ 
 |  \/  |  __ \_   _|
 | \  / | |__) || |  
 | |\/| |  ___/ | |  
 | |  | | |    _| |_ 
 |_|  |_|_|   |_____|
                     
                     `), 1000); // Display ASCII Art Logo
    setTimeout(() => {
        displayConsoleMessage('Starting Local Area Network Testing...');
        displayConsoleMessage('Connections Found: Lights, Fax, Printer, Console, Tablets');
        document.getElementById('connected-devices').style.display = 'block';
        document.getElementById('connected-devices').innerHTML = '<h2>Connected Devices:</h2><ul><li>Lights</li><li>Fax</li><li>Printer</li><li>Console</li><li>Tablets</li></ul>';
    }, 2000);
}

function displayConsoleMessage(message) {
    const consoleElement = document.getElementById('console');
    consoleElement.innerHTML += `<p>${message}</p>`;
    consoleElement.scrollTop = consoleElement.scrollHeight;
}

function updateDisplay() {
    document.getElementById('cpu-power').innerText = cpuPower;
    document.getElementById('money').innerText = money;
}
