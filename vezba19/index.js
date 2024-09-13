const apiKey = "146ebbd2e0e3372876138c9ed29fc9d5";

async function dataDisplay() {
  const daysWeatherData = await get5DayWeatherData("kraljevo");
  display5DaysWeatherInfo(daysWeatherData);
}

async function get5DayWeatherData(city) {
  const daysWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
  const response = await fetch(daysWeatherUrl);

  if (!response.ok) {
    throw new Error("Could not fetch a weather data");
  } else {
    const p = await response.json();
    console.log(p);

    return p;
  }
}

function display5DaysWeatherInfo(data) {
  // const day = data.list[i].dt_txt;

  const groupedData = data.list.reduce((acc, curr) => {
    const date = new Date(curr.dt_txt).toISOString().split("T")[0];
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push({ ...curr, date }); // Spread operator to copy the entire object
    return acc;
  }, {});
  console.log(groupedData);

  const namesArray = Object.values(groupedData).flat();

  console.log(namesArray);
  const groupedNames = Object.entries(groupedData).map(([date, names]) => ({
    date,
    names: names.sort(),
  }));

  console.log(groupedNames);
}

dataDisplay();

// function filterByDateRange(data, startDate, endDate) {
//   return data.filter((item) => {
//     const itemDate = new Date(item.dt_txt);
//     return itemDate >= startDate && itemDate <= endDate;
//   });
// }

// const jsonData = [
//   {
//     id: 1,
//     name: "Event A",
//     date: "2024-09-01T21:00:00Z",
//   },
//   {
//     id: 2,
//     name: "Event B",
//     date: "2024-09-10T21:00:00Z",
//   },
//   {
//     id: 3,
//     name: "Event C",
//     date: "2024-09-15T21:00:00Z",
//   },
//   {
//     id: 4,
//     name: "Event D",
//     date: "2024-09-20T21:00:00Z",
//   },
//   {
//     id: 5,
//     name: "Event D2",
//     date: "2024-09-20T21:00:00Z",
//   },
//   {
//     id: 6,
//     name: "Event E",
//     date: "2024-09-30T21:00:00Z",
//   },
// ];

// function display5DaysWeatherInfo() {
//   const groupedData = jsonData.reduce((acc, curr) => {
//     const date = new Date(curr.date).toISOString().split("T")[0];
//     if (!acc[date]) {
//       acc[date] = [];
//     }
//     acc[date].push({ ...curr, date }); // Spread operator to copy the entire object
//     return acc;
//   }, {});
//   console.log(groupedData);
// }
// dataDisplay();

// function filterByDateRange(data, startDate, endDate) {
//   return data.filter((item) => {
//     const itemDate = new Date(item.date);
//     return itemDate >= startDate && itemDate <= endDate;
//   });
// }
