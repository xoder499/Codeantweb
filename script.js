// Select all login buttons
const loginButtons = document.querySelectorAll('.login-btn');

// Simulated API endpoint
const API_URL = "https://example.com/api/login";

// Add a click event listener to each button
loginButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Simulate user information based on the button clicked
        const provider = button.textContent.split(" ")[2]; // Extract provider name
        const userData = {
            username: "test_user",
            provider: provider
        };

        // Display a loading message
        button.textContent = "Signing in...";
        button.disabled = true;

        // Simulate an API call using fetch
        fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Login failed");
                }
            })
            .then((data) => {
                // Display success message (you can redirect or update UI)
                alert(`Successfully logged in with ${provider}!`);
                console.log(data); // Log API response
            })
            .catch((error) => {
                // Display error message
                alert(`Error: ${error.message}`);
                console.error(error);
            })
            .finally(() => {
                // Reset button state
                button.textContent = `Sign in with ${provider}`;
                button.disabled = false;
            });
    });
});