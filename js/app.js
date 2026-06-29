// Load saved data from browser
let adsWatched = localStorage.getItem("adsWatched") || 0;
let points = localStorage.getItem("points") || 0;

// Get UI elements
const adsWatchedEl = document.getElementById("adsWatched");
const pointsEl = document.getElementById("points");
const watchAdsBtn = document.getElementById("watchAdsBtn");

// Display initial values
adsWatchedEl.innerText = adsWatched;
pointsEl.innerText = points;

// WATCH ADS BUTTON ACTION
watchAdsBtn.addEventListener("click", function () {

  // Simulate watching an ad
  alert("Watching ad... (simulated)");

  // Increase values
  adsWatched++;
  points += 10; // each ad = 10 points

  // Save to localStorage (persists after refresh)
  localStorage.setItem("adsWatched", adsWatched);
  localStorage.setItem("points", points);

  // Update UI
  adsWatchedEl.innerText = adsWatched;
  pointsEl.innerText = points;

  // Feedback
  watchAdsBtn.innerText = "✔ Ad Completed (+10 pts)";

  setTimeout(() => {
    watchAdsBtn.innerText = "🟢 WATCH ADS";
  }, 1500);
});
