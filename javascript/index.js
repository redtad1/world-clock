function updateTime() {
  //LA
  let angelElement = document.querySelector("#angel");
  if (angelElement) {
    let angelDateElement = angelElement.querySelector(".date");
    let angelTimeElement = angelElement.querySelector(".time");
    let angelTime = moment().tz("America/Los_Angeles");

    angelDateElement.innerHTML = moment().format("MMMM Do YYYY");
    angelTimeElement.innerHTML = angelTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  //addis
  let addisElement = document.querySelector("#addis");
  if (addisElement) {
    let addisDateElement = addisElement.querySelector(".date");
    let addisTimeElement = addisElement.querySelector(".time");
    let addisTime = moment().tz("Africa/Addis_Ababa");

    addisDateElement.innerHTML = moment().format("MMMM Do YYYY");
    addisTimeElement.innerHTML = addisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss")}
          ${cityTime.format("A")}</small>
          </div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);
//select
let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
