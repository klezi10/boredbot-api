document.getElementById('activity-btn').addEventListener('click', () => {
  fetch('https://apis.scrimba.com/bored/api/activity')
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('activity-name').textContent = data.activity;
    });
});
