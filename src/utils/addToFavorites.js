export const addMealToFavorites = (item) => {
  const favoritesStr = localStorage.getItem('favoritesMeals');
  if (!favoritesStr) {
    localStorage.setItem('favoritesMeals', JSON.stringify([item]));
  } else {
    const favorites = JSON.parse(favoritesStr);
    const exist = favorites.some((e) => e.idMeal === item.idMeal);
    if (!exist) {
      favorites.unshift(item);
      localStorage.setItem('favoritesMeals', JSON.stringify(favorites));
    } else {
      const indexOf = favorites.findIndex((e) => e.idMeal === item.idMeal);
      const favUpdated = [
        ...favorites.slice(0, indexOf),
        ...favorites.slice(indexOf + 1)
      ];
      localStorage.setItem('favoritesMeals', JSON.stringify(favUpdated));
    }
  }
};

export const addDrinkToFavorites = (item) => {
  const favoritesStr = localStorage.getItem('favoritesDrinks');
  if (!favoritesStr) {
    localStorage.setItem('favoritesDrinks', JSON.stringify([item]));
  } else {
    const favorites = JSON.parse(favoritesStr);
    const exist = favorites.some((e) => e.idDrink === item.idDrink);
    if (!exist) {
      favorites.unshift(item);
      localStorage.setItem('favoritesDrinks', JSON.stringify(favorites));
    } else {
      const indexOf = favorites.findIndex((e) => e.idDrink === item.idDrink);
      const favUpdated = [
        ...favorites.slice(0, indexOf),
        ...favorites.slice(indexOf + 1)
      ];
      localStorage.setItem('favoritesDrinks', JSON.stringify(favUpdated));
    }
  }
};
