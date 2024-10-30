function updateTime() {
  let nairobiDateElement = document.querySelector("#nairobi .date");
  nairobiDateElement.innerHTML = moment()
    .tz("Africa/Nairobi")
    .format("MMMM Do YYYY ");
  let gothernburgDateElement = document.querySelector("#gothenburg .date");
  gothernburgDateElement.innerHTML = moment()
    .tz("Europe/Stockholm")
    .format("MMMM Do YYYY ");
  let nairobiTimeElement = document.querySelector("#nairobi .time");
  nairobiTimeElement.innerHTML = moment()
    .tz("Africa/Nairobi")
    .format("H: mm: ss [<small>]A[</small>]");
  let gothernburgTimeElement = document.querySelector("#gothenburg .time");
  gothernburgTimeElement.innerHTML = moment()
    .tz("Europe/Stockholm")
    .format("H: mm: ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
function updateCity(event) {
  let currentCity = event.target.value;
  if (currentCity === "current") {
    currentCity = moment.tz.guess();
  }
  let currentCityName = currentCity.split("/")[1].replace("_", " ");
  let currentCityTime = moment().tz(currentCity);
  let updatedCity = document.querySelector("#city");
  updatedCity.innerHTML = `<div class="city">
    <div>
      <h2>${currentCityName}</h2>
      <div class="date">${currentCityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${currentCityTime.format(
      "h:mm:ss"
    )} <small>${currentCityTime.format("A")}</small></div>
  </div>
<a href="index.html">All cities</a>
  `;
}

let changeCity = document.querySelector("#cities");

changeCity.addEventListener("change", updateCity);
