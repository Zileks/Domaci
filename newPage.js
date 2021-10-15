const params = new URLSearchParams(location.search);

const translateToEnglish = () => {
  document.getElementById('label-name').innerText = 'Name :';
  document.getElementById('label-surname').innerText = 'Surname :';
  document.getElementById('label-dob').innerText = 'Date of birth :';
  document.getElementById('label-cookies').innerText =
    'Number of contacts saved :';
};

const translateToSerbian = () => {
  document.getElementById('label-name').innerText = 'Ime :';
  document.getElementById('label-surname').innerText = 'Prezime : ';
  document.getElementById('label-dob').innerText = 'Datum rodjenja :';
  document.getElementById('label-cookies').innerText =
    'Broj snimljenih kontakata :';
};

const findCookie = (cookie) => {
  return document.cookie
    .split(';')
    .filter((x) => x.trim().split('=')[0] === cookie);
};

let langCookie = findCookie('language');
let counterCookie = findCookie('counter');

const checkLanguage = () => {
  if (!langCookie === undefined || !langCookie.length == 0) {
    langCookie[0].split('=')[1] === 'sr'
      ? translateToSerbian()
      : translateToEnglish();
  } else {
    navigator.language === 'sr' ? translateToSerbian() : translateToEnglish();
  }
};

checkLanguage();

document.getElementById('name').innerText = params.get('name');
document.getElementById('surname').innerText = params.get('surname');
document.getElementById('dob').innerText = params.get('dob');
document.getElementById('cookies').innerText = counterCookie[0].split('=')[1];
console.log(document.cookie);
