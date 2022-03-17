async function fetchFoods(type = 'search.php?s=') {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/${type}`);
    const data = await response.json();
    return data.meals;
}
  
export default fetchFoods;