async function fetchdata() {
  try {
    const key = "f172e7973f7f3bc3af10abdc5beb0709";
    const City = document.getElementById("location").value;
    const report = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${key}&units=metric`
    );
    if (report.status == 404) {
      throw new Error("Unable to fetch data");
    }
    const data = await report.json();
    document.querySelector(".weather").style.display = "block";
    document.getElementById("invalid").style.display = "none";
    document.getElementById(
      "img-weather"
    ).src = `./images/${data.weather[0].main.toLowerCase()}.png`;
    document.getElementById("City").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    document.getElementById("temp").innerText =
      Math.round(data.main.temp) + "°C";
  } catch (err) {
    document.getElementById("invalid").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }
}
