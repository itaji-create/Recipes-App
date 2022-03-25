export function ingredients(details) {
  return Object.keys(details)
    .filter((e) => e.includes('strIngredient'));
}
export function measures(details) {
  return Object.keys(details).filter((e) => e.includes('strMeasure'));
}
  