function filterDrinks(type) {
    const drinks = document.querySelectorAll('.drink');

    drinks.forEach(drink => {
      if (type === 'all') {
        drink.classList.remove('hidden');
      } else {
        if (drink.classList.contains(type)) {
          drink.classList.remove('hidden');
        } else {
          drink.classList.add('hidden');
        }
      }
    });
  }


  const allDrinks = document.querySelectorAll('.drink');

  allDrinks.forEach(drink => {
    drink.addEventListener('click', () => {
      drink.style.backgroundColor = "#d4af37";
      drink.style.color = "black";

      setTimeout(() => {
        drink.style.backgroundColor = "";
        drink.style.color = "";
      }, 300);
    });
  });