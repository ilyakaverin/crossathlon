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
}, 4000);
