'use strict';

document
  .querySelector('#buttonRegister')
  .addEventListener('click', function () {
    messageLogin('A regisztrációs rész még nincsen lefejlesztve.');
    messageLoginColor('black');
  });
document.querySelector('#help1').addEventListener('click', function () {
  messageLogin('Dániel, a felhasználóneved az, mint szinte mindenhol.');
  messageLoginColor('black');
});
document.querySelector('#help2').addEventListener('click', function () {
  messageLogin('Erre sem emlékszel? Mikor születtél? (yyyy-mm-dd)');
  messageLoginColor('black');
});
document.querySelector('#help3').addEventListener('click', function () {
  messageLogin('Robot ellenőrzés. Oldd meg a feladatot!');
  messageLoginColor('black');
});

document.querySelector('#buttonLogin').addEventListener('click', function () {
  let typedUsername = document.querySelector('#username').value;
  let typedPassword = document.querySelector('#password').value;
  let answerMath = document.querySelector('#answerMath').value;

  if (typedUsername !== username && typedPassword !== password) {
    messageLogin('Nem megfelelő felhasználónév és jelszó!');
    messageLoginColor('red');
    clearUsernameField();
    clearPasswordField();
  } else if (typedUsername !== username) {
    messageLogin('Nem megfelelő felhasználónév!');
    messageLoginColor('red');
    clearUsernameField();
  } else if (typedPassword !== password) {
    messageLogin('Nem megfelelő jelszó!');
    messageLoginColor('red');
    clearPasswordField();
  } else if (answerMath != questionMath) {
    messageLogin('Nem jó az összeadás eredménye!');
    messageLoginColor('red');
    clearAnswerField();
  } else {
    titleText('Admin oldal');
    messageLogin('Sikeres bejelentkezés!');
    messageLoginColor('green');
    document.getElementById('statusLogin').innerHTML =
      'Felhasználó: <span class="bold">MrDanielHarka</span> (<a href=".">kijelentkezés</a>)';
    document.getElementById('module').innerHTML =
      '<h2>Szenzitív információk</h2> <details open> <summary><b>Jó honlapok</b></summary> <ul> <li><a href="https://harka.com" target="_blank">harka.com</a></li><li> <a href="https://freecodecamp.org/MrDanielHarka" rel="noreferrer noopener nofollow" target="_blank" >freeCodeCamp</a > </li><li> <a href="https://codecademy.com/profiles/MrDanielHarka" rel="noreferrer noopener nofollow" target="_blank" >Codecademy</a > </li></ul> </details> <i>Szuper honlapok listája</i> <br/><br/> <details> <summary><b>Privát jegyzeteim</b></summary> <ul> <li> Crush-om: <a href="https://facebook.com/MrsSaraHarka" rel="noreferrer noopener nofollow" target="_blank" >Sara <3</a > </li><li>Kitartóan kell tanulnom, hogy okos legyek!</li><li> "Csak rengeteg gyakorlással válhat valakiből programozó!" - <a href="https://hips.hearstapps.com/esq.h-cdn.co/assets/17/17/980x490/landscape-1493413857-the-matrix.jpg?resize=500:*" rel="noreferrer noopener nofollow" target="_blank" >Neo</a > <li>192.168.0.1 | 255.255.255.192</li></li></ul> </details> <i>Szuper titkos jegyzeteim</i> <br/><br/> <details> <ul> <li> <a href="https://instagram.com/p/ByuXrMqnTv3" rel="noreferrer noopener nofollow" target="_blank" >img.jpg</a > </li><li> <a href="https://instagram.com/p/B1OQi9qnuJs" rel="noreferrer noopener nofollow" target="_blank" >img2.jpg</a > </li><li> <a href="https://instagram.com/p/B0x9yBrH1Ff" rel="noreferrer noopener nofollow" target="_blank" >img3.jpg</a > </li><li> <a href="https://instagram.com/p/CDoYyzEHnXq" rel="noreferrer noopener nofollow" target="_blank" >img4.jpg</a > </li><li> <a href="https://instagram.com/p/CR7ATEUsei7" rel="noreferrer noopener nofollow" target="_blank" >img5.jpg</a > </li><li> <a href="https://instagram.com/p/CTcPw7rsthe" rel="noreferrer noopener nofollow" target="_blank" >img6.jpg</a > </li></ul> <summary><b>Csini fotók</b></summary> </details> <i>Szuper szexi képek</i> <br/><br/> <details> <summary><b>Saját info</b></summary> <ul> <li>Név: Harka Dániel</li><li>Születési dátum: 1993.02.09.</li><li>Születési hely: Kecskemét</li><li>Hivatalos lakcím: 2610 Nőtincs</li><li>Tartózkodási hely: 1191 Budapest</li><li>Telefonszám: +36 30 555 2520</li><li>Email cím: daniel@harka.com</li><li> Honlap: <a href="https://daniel.harka.com" target="_blank" >daniel.harka.com</a > </li><li> LinkedIn: <a href="https://linkedin.com/in/mrdanielharka" rel="noreferrer noopener nofollow" target="_blank" >linkedin.com/in/MrDanielHarka</a > </li><li> GitHub: <a href="https://github.com/MrDanielHarka" rel="noreferrer noopener nofollow" target="_blank" >github.com/MrDanielHarka</a > </li></ul> </details> <i>Szuper személyes adatok</i>';
  }
});

function clearUsernameField() {
  document.querySelector('#username').value = '';
}
function clearPasswordField() {
  document.querySelector('#password').value = '';
}
function clearAnswerField() {
  document.querySelector('#answerMath').value = '';
}
const messageLogin = function (message) {
  document.querySelector('#messageLogin').textContent = message;
};

const messageLoginColor = function (color) {
  document.querySelector('#messageLogin').style.color = color;
};
const titleText = function (text) {
  document.querySelector('#title').textContent = text;
};

titleText('Admin belépés');
messageLogin('Jelentkezz be!');

let username = 'DanielHarka';
let password = '19930521';
let number1 = Math.trunc(Math.random() * 10 + 1);
let number2 = Math.trunc(Math.random() * 10 + 1);
username = 'MrDaniel';
password = '199302';
let questionMath = number1 + number2;
let questionText = `${number1}+${number2}`;
username += 'Harka';
password += '0' + Math.pow(3, 2);

document.querySelector('#questionText').textContent = questionText;
