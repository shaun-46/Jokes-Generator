const btn = document.getElementById("get-joke");
const setupText = document.getElementById("setup");
const punchlineText = document.getElementById("punchline");

btn.addEventListener("click", async () => {
  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const joke = await response.json();

    setupText.textContent = `Setup: ${joke.setup}`;
    punchlineText.textContent = `Punchline: ${joke.punchline}`;
  } catch (error) {
    setupText.textContent = "Oops! Couldn't fetch a joke.";
    punchlineText.textContent = "";
    console.error("Error fetching joke:", error);
  }
});