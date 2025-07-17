const setupEl = document.getElementById('setup');
const punchlineEl = document.getElementById('punchline');
const loader = document.getElementById('loader');
const jokeBox = document.getElementById('joke-box');

const showLoader = () => {
  loader.classList.remove('hidden');
  jokeBox.classList.add('hidden');
};

const hideLoader = () => {
  loader.classList.add('hidden');
  jokeBox.classList.remove('hidden');
};

const getJoke = async () => {
  showLoader();
  try {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await response.json();

    setupEl.textContent = data.setup;
    punchlineEl.textContent = data.punchline;
  } catch (err) {
    setupEl.textContent = 'Oops! Failed to fetch joke.';
    punchlineEl.textContent = '';
    console.error('Error:', err.message);
  }
  hideLoader();
};
