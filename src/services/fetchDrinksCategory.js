function fetchDrinksCategory() {
  return fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
    .then((response) => response.json());
}

export default fetchDrinksCategory;