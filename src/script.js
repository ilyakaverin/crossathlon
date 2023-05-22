import axios from 'axios';
import onChange from 'on-change';

setInterval(() => {
  const participation = document.querySelector('.participation');
  const text = document.querySelector('.participation p');
  const price = document.querySelector('.price');
  const team = document.querySelector('.team');

  if (participation.classList.contains('solo')) {
    participation.classList.remove('solo');
    participation.classList.add('party');
    text.textContent = 'В команде!';
    price.textContent = '1400 ₽';
    team.classList.remove('hidden');
    team.classList.add('opened');
  } else {
    participation.classList.remove('party');
    participation.classList.add('solo');
    text.textContent = 'Индивидуально!';
    price.textContent = '1650 ₽';
    team.classList.remove('opened');
    team.classList.add('hidden');
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

const sendForm = document.getElementById('sendForm');
const modalSendForm = document.getElementById('modalSendForm');

const state = {
  loading: false,
  data: null,
  currentButton: null,
};

const observer = onChange(state, async (path, value) => {
  if (path === 'data') {
    try {
      await axios.post('send.php', state.data);
      observer.loading = false;
    } catch (e) {
      observer.loading = false;
      console.log('check your network');
    }
  }

  if (path === 'loading') {
    switch (value) {
      case true:
        state.currentButton.textContent = 'Отправка';
        state.currentButton.setAttribute('disabled', true);
        break;
      case false:
        state.currentButton.textContent = 'Отправлено!';
    }
  }
});

const modals = [sendForm, modalSendForm];

const forbidden = ['+', '-', ' '];

modals.forEach((modal) => {
  modal.addEventListener('keydown', (event) => {
    if (forbidden.includes(event.key)) {
      event.preventDefault();
    }
  });

  modal.addEventListener('submit', (e) => {
    e.preventDefault();
    const button = modal.querySelector('button');
    observer.currentButton = button;
    const inputData = new FormData(e.target);
    const phone = inputData.get('phone');
    const name = inputData.get('name');
    const surname = inputData.get('surname');
    const eventType = inputData.get('event_type');

    const str = `Новая запись на кроссатлон \n Имя: ${name}\n Фамилия:${surname}\n Телефон${phone}\n Формат участия: ${eventType} `;

    observer.loading = true;
    observer.data = {
      data: str,
    };
  });
});

const regButton = document.getElementById('register');
const regMobileButton = document.getElementById('register_mobile');
const closeButton = document.querySelector('.close');

const openModalButtons = [regButton, regMobileButton];

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const element = document.querySelector('.modal');
    element.classList.add('opened');
  });
});

closeButton.addEventListener('click', () => {
  const element = document.querySelector('.modal');
  element.classList.remove('opened');
});

