function fetchMealsCategory() {
  return fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
    .then((response) => response.json());
}

export default fetchMealsCategory;