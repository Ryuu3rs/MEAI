let points = 0;
let unlockedStrategies = [];

function earnPoints(amount) {
    points += amount;
    document.getElementById('points-display').innerText = `Points: ${points}`;
}

function unlockStrategy(strategyId) {
    const strategyCost = 10; // Example cost
    if (points >= strategyCost && !unlockedStrategies.includes(strategyId)) {
        points -= strategyCost;
        unlockedStrategies.push(strategyId);
        document.getElementById('active-strategies').innerHTML += `<div>${strategyId} activated!</div>`;
        document.getElementById('points-display').innerText = `Points: ${points}`;
    }
}

setInterval(() => {
    earnPoints(1);
}, 1000);
