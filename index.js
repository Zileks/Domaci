const translateToEnglish = () => {
  document.getElementById('label-name').innerText = 'Name:';
  document.getElementById('label-surname').innerText = 'Surname:';
  document.getElementById('label-dob').innerText = 'Date of birth:';
};

const translateToSerbian = () => {
  document.getElementById('label-name').innerText = 'Ime:';
  document.getElementById('label-surname').innerText = 'Prezime:';
  document.getElementById('label-dob').innerText = 'Datum rodjenja:';
};

// ----------------------------QUOTES----------------------------------//

quote1 = createQuote(
  ['Some people feel the rain, others just get wet'],
  ['- Bob Marley']
);

quote2 = createQuote(
  ['Not all those who wander are lost'],
  ['- J.R.R. Tolkien']
);

quote3 = createQuote(
  [
    'Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.',
  ],
  ['- J. K. Rowling']
);

let quotes = [quote1, quote2, quote3];
console.log(quotes);

function createQuote(quote, author) {
  return {
    quote,
    author,
  };
}

function delay(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}

const showQuote = (quotes) => {
  loading = document.getElementById('loading');
  delay(2000).then(() => {
    loading.style.display = 'none';
    let quote = document.getElementById('quote');
    let author = document.getElementById('quote-cite');
    let data = quotes;
    let quoteNum = Math.floor(Math.random() * data.length);
    let randomQuote = data[quoteNum];
    quote.innerText = randomQuote.quote;
    author.innerText = randomQuote.author;
  });
};

showQuote(quotes);

//-------------------------COOKIE FUNCTIONS --------------------//

const findCookie = (cookie) => {
  return document.cookie
    .split(';')
    .filter((x) => x.trim().split('=')[0] === cookie);
};

const getCookieValue = (cookie) => {
  let cookieValue = findCookie(cookie);
  if (!cookieValue.length == 0) {
    return findCookie(cookie)[0].split('=')[1];
  }
  return null;
};

const saveCookie = (cookie, ctr) => {
  return (document.cookie = `${cookie}=${ctr}`);
};
console.log(getCookieValue('language'));
const checkLanguage = () => {
  let langCookieValue = getCookieValue('language');
  console.log(langCookieValue);
  if (langCookieValue !== null) {
    langCookieValue === 'sr' ? translateToSerbian() : translateToEnglish();
  } else {
    navigator.language === 'sr' ? translateToSerbian() : translateToEnglish();
  }
};
checkLanguage();

const counterCookie = () => {
  let cookieValue = getCookieValue('counter');
  if (cookieValue === null) {
    // document.cookie = 'counter=1';
    saveCookie('counter', 1);
  } else {
    ctr = cookieValue;
    ctr++;
    saveCookie('counter', ctr);
    // document.cookie = 'counter=' + ctr;
  }
};

// -------------------------EVENT LISTENERS --------------------------//

const setLocation = (name, surname, dob) => {
  query = new URLSearchParams();
  query.set('name', name);
  query.set('surname', surname);
  query.set('dob', dob);

  return query;
};

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  let name = document.getElementById('name').value;
  let surname = document.getElementById('surname').value;
  let dob = document.getElementById('dob').value;
  counterCookie();
  let query = setLocation(name, surname, dob);
  location = `newPage.html?${query}`;
});

document.getElementById('sr').addEventListener('click', () => {
  document.cookie = 'language=sr';
  translateToSerbian();
  styleToSerbian();
});
document.getElementById('en').addEventListener('click', () => {
  document.cookie = 'language=en-US';
  translateToEnglish();
  styleToEnglish();
});

function styleToSerbian() {
  let buttonSR = document.getElementById('sr');
  let buttonEN = document.getElementById('en');
  buttonSR.style.color = 'white';
  buttonEN.style.color = 'black';
}

function styleToEnglish() {
  let buttonSR = document.getElementById('sr');
  let buttonEN = document.getElementById('en');
  buttonSR.style.color = 'black';
  buttonEN.style.color = 'white';
}
