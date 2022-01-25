const getData = api => {
  return fetch(api)
    .then(response => response.json())
    .then(result => result)
    .catch(error => error);
};
export default getData;
