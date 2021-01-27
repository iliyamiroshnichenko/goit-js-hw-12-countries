export default function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

  return fetch(url)
    .then(res => res.json())
    .then(data => {
      return data;
    })
    .catch(err => console.log(err));
}
