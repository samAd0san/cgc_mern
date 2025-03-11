// Simple asynchronous Node.js program
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchData() {
    console.log("Starting to fetch data...");
    await delay(2000); // Simulate a 2-second delay (e.g., like waiting for an API response)
    console.log("Data fetched successfully!");
    return "Sample Data";
}

async function main() {
    console.log("Program started.");
    const data = await fetchData(); // Wait for the async task to complete
    console.log(`Received: ${data}`);
    console.log("Program finished.");
}

// Run the async function
main();
