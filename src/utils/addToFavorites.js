export const addMealToFavorites = (item) => {
  const favoritesStr = localStorage.getItem('favoritesMeals');
  if (!favoritesStr) {
    localStorage.setItem('favoritesMeals', JSON.stringify([item]));
  } else {
    const favorites = JSON.parse(favoritesStr);
    const exist = favorites.some((e) => e.idMeal === item.idMeal);
    if (!exist) {
      favorites.unshift(item);
    }
    localStorage.setItem('favoritesMeals', JSON.stringify(favorites));
  }
}

export const addDrinkToFavorites = (item) => {
  const favoritesStr = localStorage.getItem('favoritesDrinks');
  if (!favoritesStr) {
    localStorage.setItem('favoritesDrinks', JSON.stringify([item]));
  } else {
    const favorites = JSON.parse(favoritesStr);
    const exist = favorites.some((e) => e.idDrink === item.idDrink);
    if (!exist) {
      favorites.unshift(item);
    }
    localStorage.setItem('favoritesDrinks', JSON.stringify(favorites));
  }
}
