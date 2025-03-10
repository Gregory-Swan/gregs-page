// Function to apply the theme based on the current date
function applyDateBasedTheme() {
    const today = new Date();
    const day = today.getDate(); // Get the day of the month (1-31)
    
    // If the day is even, use the light theme; if odd, use the dark theme
    const theme = (day % 2 === 0) ? "style-godly.css" : "style-ungodly.css";

    document.getElementById("themeStylesheet").href = theme;
}

// Apply theme when the page loads
window.onload = applyDateBasedTheme;
