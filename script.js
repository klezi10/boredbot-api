let activityBtn = document.getElementById('activity-btn');
let apiUrl = 'https://apis.scrimba.com/bored/api/activity';
let displayActivity = document.getElementById('activity-name');

activityBtn.addEventListener('click', () => {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      displayActivity.textContent = data.activity;
      displayActivity.classList.add('activity-colored');

      if (data.price > 0) {
        displayActivity.textContent += ' ($)';
      } else {
        return null;
      }
    });
});
