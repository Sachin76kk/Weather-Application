const btn = document.getElementById("submitbtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector(".middle");
const getInfo = async (e) => {
  e.preventDefault();
  let city = cityName.value;
  if (city === "") {
    city_name.innerHTML = "please write the name before search";

    datahide.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1103ef8702220c94867469ea3c478fa1`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];
      //   console.log(arrData[0]);

      city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
      let tempData = arrData[0].main.temp / 10;
      let roundTempData = tempData.toFixed(2);
      temp.innerHTML = `${roundTempData}<sup>o</sup>C`;

      let tempStats = arrData[0].weather[0].main;
      if (tempStats === "Clouds") {
        temp_status.innerHTML =
          '<i class="fa fa-cloud" aria-hidden="true"></i>';
      } else if (tempStats === "Clear") {
        temp_status.innerHTML =
          '<i class="fas fa-sun" style="color: #eccc68;"></i>';
      } else if (tempStats === "Rain") {
        temp_status.innerHTML =
          '<i class="fas fa-cloud-rain" style="color: #a4b0be;"></i>';
      } else {
        temp_status.innerHTML =
          '<i class="fas fa-cloud" style="color: #f1f2f6;"></i>';
      }

      datahide.classList.remove("data_hide");

    } catch {
      city_name.innerText = "please enter the correct city name";
      datahide.classList.add("data_hide");
    }
  }
};
btn.addEventListener("click", getInfo);
