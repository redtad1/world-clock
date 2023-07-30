function updateTime() {
  //LA
  let angelElement = document.querySelector("#angel");
  let angelDateElement = angelElement.querySelector(".date");
  let angelTimeElement = angelElement.querySelector(".time");
  let angelTime = moment().tz("America/Los_Angeles");

  angelDateElement.innerHTML = moment().format("MMMM Do YYYY");
  angelTimeElement.innerHTML = angelTime.format("h:mm:ss [<small>]A[</small>]");

  //addis
  let addisElement = document.querySelector("#addis");
  let addisDateElement = addisElement.querySelector(".date");
  let addisTimeElement = addisElement.querySelector(".time");
  let addisTime = moment().tz("Africa/Addis_Ababa");

  addisDateElement.innerHTML = moment().format("MMMM Do YYYY");
  addisTimeElement.innerHTML = addisTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
