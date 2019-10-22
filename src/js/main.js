"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


console.log(`Hello world!`);

console.log('siema')
const name = 'Krzysiek';
const age = 35;
console.log(name);
console.log(age);

console.log(`Nazywam się ${name} i mam ${age} lat`);
console.log('witaj przybyszu 😂');

const about = document.querySelector('.about__paragraph--js');
about.innerHTML = `Nazywam się ${name} i mam ${age} lat`;

const paragraphs = document.querySelectorAll('p');

console.log(paragraphs);
console.log(paragraphs[3]);

if ('javascript' != 'java') {
    console.log('to prawda!')
}

if (age < 20) {
    console.log('masz mniej niz 20 lat');
} else if ((age >= 20) && (age <= 30)) {
    console.log('masz wiecej niz 20 lat ale mniej niz 30');
} else {
    console.log('jestes 30+');
}

switch (age) {
    case 20:
        console.log('masz równo 20 lat');
        break;
    case 30:
        console.log('masz równo 30 lat');
        break;
    default:
        console.log(`masz ${age} lat`);
        break;

}

const amIOld = (age > 70) ? 'yes' : 'no';
console.log(amIOld);


function calculate(x) {
    x = x + 3;
    console.log(`tradycyjnie ${x}`);
    return x * 7
}

console.log(calculate(2));
const zmienna = 'hura';

console.log(zmienna)

const calculateFat = x => (x+3)*7;
   

console.log(calculateFat(2));


const welcome = (name, age) => {
    console.log(`Witaj ${name}, masz ${age} lat!`);
}

// welcome ('Krzysiek', 26);

const myName = 'Krzysiek';
const myAge = 26;

welcome (myName, myAge);
welcome ('Krzysiek', 26);

const button = document.querySelector('.header__button--js');
console.log(button)


button.addEventListener('click', (e) => {
    const header = document.querySelector('.header__title--js');
    header.innerHTML = 'klik, klik';
    header.classList.add('header__title--red');
    
});

const navigationSwitcher = document.querySelector('.navigation__switcher--js')

navigationSwitcher.addEventListener('click', (e) => {
    const navigationList = document.querySelector('.navgation__list--js');
    navigationList.classList.toggle('navigation__list--visible');
});


