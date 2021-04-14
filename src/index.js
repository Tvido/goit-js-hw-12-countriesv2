// import countryCardTpl from './templates/items.hbs';
// import countryList from './templates/list.hbs'

import "./css/common.css";
import refs from "./js/getRefs";
import API from "./js/fetchCountries";
import { renderCountryList, renderCountryCard } from "./js/render";
// import "./js/pnotify";
import { error } from "@pnotify/core";
import debounce from "lodash.debounce";

refs.searchForm.addEventListener("input", debounce(onSearch, 1500));

function onSearch(e) {
  e.preventDefault();
  const searchQuery = refs.searchForm.elements.query.value;
  refs.cardContainer.innerHTML = "";
  if (!searchQuery) return;
  API(searchQuery).then(onFetchSuccess).catch(onFetchError);
}

function onFetchSuccess(data) {
  if (data.length === 1) {
    renderCountryCard(data);
    return;
  }
  if (data.length <= 10) {
    renderCountryList(data);
    return;
  }
  error("Please enter a more specific query!");
}

function onFetchError(error) {
  console.log(error);
}