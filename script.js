let activityBtn = document.getElementById('activity-btn');
let title = document.getElementById('title');
let apiUrl = 'https://apis.scrimba.com/bored/api/activity';
let displayActivity = document.getElementById('activity-name');
let emoji = document.querySelector('.emoji');

activityBtn.addEventListener('click', () => {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      displayActivity.textContent = data.activity;

      title.textContent = 'BrightIdea Bot';

      displayActivity.classList.add('activity-colored');

      if (data.price > 0) {
        displayActivity.textContent += ' ($)';
        emoji.classList.add('animate');
      } else {
        emoji.classList.add('animate');
      }
    });
  emoji.classList.remove('animate');
});
