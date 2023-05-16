setInterval(() => {
  const participation = document.querySelector('.participation');
  const text = document.querySelector('.participation p');

  if (participation.classList.contains('solo')) {
    participation.classList.remove('solo');
    participation.classList.add('party');
    text.textContent = 'В команде!';
  } else {
    participation.classList.remove('party');
    participation.classList.add('solo');
    text.textContent = 'Индивидуально!';
  }
}, 3000);

const countDownDate = new Date('June 23, 2023 00:00:00').getTime();

// Run myfunc every second
const myfunc = setInterval(() => {
  const now = new Date().getTime();
  const timeleft = countDownDate - now;

  // Calculating the days, hours, minutes and seconds left
  const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  // Result is output to the specific element
  document.getElementById('days').innerHTML = `${days}`;
  document.getElementById('hours').innerHTML = `${hours}`;
  document.getElementById('mins').innerHTML = `${minutes}`;
  document.getElementById('secs').innerHTML = `${seconds}`;

  // Display the message when countdown is over
  if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById('days').innerHTML = '';
    document.getElementById('hours').innerHTML = '';
    document.getElementById('mins').innerHTML = '';
    document.getElementById('secs').innerHTML = '';
    document.getElementById('end').innerHTML = 'TIME UP!!';
  }
}, 1000);
