async function fetchDrinks(type = 'search.php?s=') {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/${type}`);
  const data = await response.json();
  return data.drinks;
}
  
export default fetchDrinks;