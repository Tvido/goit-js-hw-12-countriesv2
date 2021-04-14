// import countryCardTpl from './templates/items.hbs';
// import countryList from './templates/list.hbs'

import "./css/common.css";
import getRefs  from "./js/getRefs";
import API from "./js/fetchCountries";
import { renderCountryList, renderCountryCard } from "./js/render";
import "./js/pnotify";
import { error } from "@pnotify/core";
import debounce from "lodash.debounce";

const refs = getRefs ();

refs.searchForm.addEventListener("input", debounce(onSearch, 1500));

function onSearch(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const searchQuery = form.searchForm.elements.query.value;
  refs.cardContainer.innerHTML = "";
  if (!searchQuery)
    return;
  API(searchQuery)
    .then(onFetchSuccess)
    .catch(onFetchError)
    .finally(() => form.reset());
}

function onFetchSuccess(country) {
  if (data.length === 1) {
    renderCountryCard(country);
    return;
  }
  if (country.length <= 10) {
    renderCountryList(country);
    return;
  }
  error("Please enter a more specific query!");
}

function onFetchError(error) {
  console.log(error);
}