document.addEventListener("DOMContentLoaded", () => {
  const batteryLevelDiv = document.getElementById("battery-level");
  const chargingIndicator = document.getElementById("charging-indicator");

  navigator.getBattery().then((battery) => {
    function updateBatteryStatus() {
      // Update battery level
      const level = battery.level * 100;
      batteryLevelDiv.style.width = `${level}%`;

      // Show charging icon and update styles
      if (battery.charging) {
        chargingIndicator.style.display = "flex"; // Make charging indicator visible
        chargingIndicator.textContent = `⚡ ${level.toFixed(0)}%`;
        batteryLevelDiv.style.backgroundColor = "lightgreen"; // Lighter green when charging
        chargingIndicator.style.color = "darkgreen"; // Dark green text for charging
      } else {
        chargingIndicator.style.display = "flex"; // Show percentage even when not charging
        chargingIndicator.textContent = `${level.toFixed(0)}%`;
        batteryLevelDiv.style.backgroundColor = "lightgreen"; // Standard green for battery
        chargingIndicator.style.color = "darkgreen"; // White text when not charging
      }
    }

    // Initial update
    updateBatteryStatus();

    // Add event listeners for updates
    battery.addEventListener("levelchange", updateBatteryStatus);
    battery.addEventListener("chargingchange", updateBatteryStatus);
  });
});
