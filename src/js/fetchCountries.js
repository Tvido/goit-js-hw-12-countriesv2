

const BASE_URL = "https://restcountries.eu/rest/v2/name";

export default function API(searchQuery) {
  return fetch(`${BASE_URL}/${searchQuery}`).then((r) => r.json());
}