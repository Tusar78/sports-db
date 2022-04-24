// Base Url
const BASE_URL = "https://www.thesportsdb.com/api/v1/json/2/all_sports.php";

const loadData = () => {
  fetch(`${BASE_URL}`)
    .then(res => res.json())
    .then(data => displayData(data.sports))
}

loadData()

const displayData = sports => {
  const sportContainer = document.getElementById('sports'); 
  sports.forEach(sport => {
    const div = document.createElement('div');
    div.classList.add('sport')
    div.innerHTML = `
      <img src=${sport.strSportThumb}>
      <h2><img src=${sport.strSportIconGreen}> ${sport.strSport}</h2>
      <p>${(sport.strSportDescription).slice(0, 150)}</p>
    `
    sportContainer.appendChild(div)
  });
}