// Fetch data from json and render cards
function createAnimalCard(animal) {
  return `
    <article class="animal-card">
      <img src="${animal.image}" alt="${animal.name}" />
      <h3>${animal.name}</h3>
      <p>${animal.sex}</p>
      <p>${animal.age}</p>
      <button  class="MehrErfahrenBtn" onclick="openAnimal('${animal.id}')">Mehr erfahren</button>
    </article>
  `
}

let animals = []
let visibleAnimals = 9
fetch('./animals.json')
  .then(res => res.json())
  .then(data => {
    animals = data
    renderAnimals(animals)
  })
  .catch(err => console.error('Error:', err))

function renderAnimals(list) {
  const container = document.getElementById('animals-list')
  container.innerHTML = list
    .slice(0, visibleAnimals)
    .map(animal => createAnimalCard(animal))
    .join('')

  const loadMoreBtn = document.getElementById('LoadMoreBtn')
  if (list.length <= visibleAnimals) {
    loadMoreBtn.style.display = 'none'
  } else {
    loadMoreBtn.style.display = 'block'
  }
}

function loadMore() {
  visibleAnimals += 9
  renderAnimals(animals)
}

//Filter functions
function showCats() {
  const cats = animals.filter(a => a.type === 'Katzen')
  renderAnimals(cats)
}

function showDogs() {
  const dogs = animals.filter(a => a.type === 'Hunden')
  renderAnimals(dogs)
}

function ShowRodents() {
  const rodents = animals.filter(a => a.type === 'Nagetieren')
  renderAnimals(rodents)
}

function showAll() {
  visibleAnimals = 9
  renderAnimals(animals)
}

//Scroll functions
function showAnimalsByPhoto() {
  document.getElementById('Tieren').scrollIntoView({
    behavior: "smooth"
  });
}

function showFooter() {
  document.getElementById('footer').scrollIntoView({
    behavior: "smooth"
  });
}

function goHome() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function scrollToAnimals() {
  document.getElementById('animals-list').scrollIntoView({
    behavior: "smooth"
  })
}

window.openAnimal = function () {
  window.location.href = `animal.html`
}

window.onload = function () {
  const hash = window.location.hash;

  if (hash) {
    window.scrollTo(0, 0);

    setTimeout(() => {
      const el = document.querySelector(hash);

      if (el) {
        el.scrollIntoView({
          behavior: "smooth"
        });
        history.replaceState(null, null, 'index.html');
      }
    }, 200);
  }
};

const burger = document.querySelector('.burger');
const nav = document.querySelector('.MainButton');
const CloseBurger = document.querySelector('.CloseBurger');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  BurgerChange();
});

nav.addEventListener('click', (e) => {
  if (window.innerWidth <= 480) {
    nav.classList.remove('active');
    BurgerChange();
}
});

function BurgerChange() {
  if (nav.classList.contains('active')) {
    CloseBurger.style.display = 'block';
    burger.style.display = 'none';
  } else {
    CloseBurger.style.display = 'none';
    burger.style.display = 'block';
  }
}

function Cross() {
  const CrossImg = document.querySelector('.CloseBurger');

  if (CrossImg.style.display === 'block') {
    nav.classList.remove('active');
    BurgerChange();
  }
}


const kontaktHeader = document.querySelector('.KontaktierenLinks h1');
const kontaktInfo = document.querySelector('.KontaktInfo');

kontaktHeader.addEventListener('click', () => { 
  kontaktInfo.style.display = 'block';
  kontaktHeader.style.pointerEvents = 'none';
  kontaktHeader.style.animation = 'none';
});


const KontaktHeader = document.getElementById('KontaktHeader');
const KontaktImg = document.getElementById('KontaktImage');

KontaktHeader.addEventListener('click', () => {
  if (KontaktImg.style.display === 'block' || KontaktImg.style.display === '') {
    KontaktImg.style.display = 'none'}
})
