import refs from "../js/getRefs";
import countryItemTpl from "../templates/items.hbs";
import countryListTpl from "../templates/list.hbs";

export function renderCountryList(list) {
  const markup = countryListTpl(list);
  refs.cardContainer.innerHTML = markup;
}

export function renderCountryCard(country) {
  const markup = countryItemTpl(country);
  refs.cardContainer.innerHTML = markup;
}