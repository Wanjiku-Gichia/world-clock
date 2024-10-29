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
