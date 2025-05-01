const fs = require('fs');
const path = require('path')

async function fetchSensorsList() {
    // Log
    console.warn(":::::::::: Fetching sensors list...::::::::::");
    // Sensors List URL
    const url = "https://airquality.aqi.in/public/sensors-meta-json-v2/sensors-meta.json";

    // Try fetching from the API
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        updateSensorsFile(data);
    } catch (backupError) {
        console.error(':::::::::: ❌ Failed to read backup file:', backupError.message);
        process.exit(1);
    }
}

// Function to update sensors.ts
function updateSensorsFile(data) {
    // Get path to src/config/sensors.ts
    const filePath = path.resolve('src/config/sensors.ts');
    // content of sensors.ts
    const content = `export const sensors = ${JSON.stringify(data, null, 2)};
    `;

    // write to sensors.ts
    fs.writeFileSync(filePath, content, 'utf-8');
    console.warn(':::::::::: ✅ sensors.ts updated successfully ::::::::::');
}

fetchSensorsList();
