// const BASE_URL = 'https://restcountries.eu/rest/v2';
// function fetchCountry(searchQuery) {
//   return fetch(`${BASE_URL}/name/${searchQuery}`).then(response =>
//     response.json(),
//   );
// };
// export default { fetchPokemon };
const BASE_URL = "https://restcountries.eu/rest/v2/name";

export default function fetchCountries(searchQuery) {
  return fetch(`${BASE_URL}/${searchQuery}`).then((r) => r.json());
}