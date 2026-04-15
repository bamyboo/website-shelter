//Scroll functions animal page

function GoToMainPage() {
    window.location.href = 'index.html';
}

function ScrollToSelection() {
    window.location.href = 'index.html#animals-list';
}

function ScrollToMainPageFooter() {
    window.location.href = 'index.html#footer';
}

function ScrollToKontaktForm() {
    document.getElementById('KontaktSection').scrollIntoView({ behavior: 'smooth' })
}

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
