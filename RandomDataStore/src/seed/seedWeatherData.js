import dotenv from "dotenv";
import Weather from "../models/weather.js";
import { cities } from "./cities.js";
import { cityClimateProfiles } from "./climateProfiles.js";
import connectDB from "../db/index.js";

dotenv.config();

const rand = (min, max) =>
  Number((Math.random() * (max - min) + min).toFixed(2));

// ---------------------------------------------------------
// Weather conditions list
// ---------------------------------------------------------
const weatherConditions = [
  { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
  { id: 801, main: "Clouds", description: "few clouds", icon: "02d" },
  { id: 802, main: "Clouds", description: "scattered clouds", icon: "03d" },
  { id: 500, main: "Rain", description: "light rain", icon: "10d" },
  { id: 501, main: "Rain", description: "moderate rain", icon: "10d" },
  { id: 211, main: "Thunderstorm", description: "thunderstorm", icon: "11d" },
  { id: 701, main: "Mist", description: "mist", icon: "50d" },
  { id: 721, main: "Haze", description: "haze", icon: "50d" },
  { id: 731, main: "Dust", description: "dust storm", icon: "50d" },
  { id: 762, main: "Heat Wave", description: "extreme heat", icon: "01d" },
  { id: 771, main: "Cold Wave", description: "severe cold", icon: "13d" },
];

// ---------------------------------------------------------
// Weather condition picker (month-wise + city-wise logic)
// ---------------------------------------------------------
const getWeatherCondition = (cityName, month) => {
  const northCities = [
    "Delhi",
    "Jaipur",
    "Lucknow",
    "Kanpur",
    "Patna",
    "Varanasi",
  ];

  const coastalCities = [
    "Mumbai",
    "Goa",
    "Kochi",
    "Chennai",
    "Visakhapatnam",
    "Surat",
  ];

  const hotCities = ["Delhi", "Jaipur", "Ahmedabad", "Nagpur", "Bhopal"];

  // ---------- January - February (month 0,1) ----------
  if (month <= 1) {
    if (northCities.includes(cityName)) {
      const roll = Math.random();

      if (roll < 0.35)
        return weatherConditions.find((c) => c.main === "Mist");

      if (roll < 0.45)
        return weatherConditions.find((c) => c.main === "Cold Wave");

      if (roll < 0.75)
        return weatherConditions.find((c) => c.main === "Clear");

      return weatherConditions.find((c) => c.main === "Clouds");
    }

    return weatherConditions.find((c) => c.main === "Clear");
  }

  // ---------- March (month 2) ----------
  if (month === 2) {
    const roll = Math.random();

    if (roll < 0.60)
      return weatherConditions.find((c) => c.main === "Clear");

    if (roll < 0.90)
      return weatherConditions.find((c) => c.main === "Clouds");

    return weatherConditions.find((c) => c.main === "Rain");
  }

  // ---------- April - May (month 3,4) ----------
  if (month === 3 || month === 4) {
    const roll = Math.random();

    if (hotCities.includes(cityName) && roll < 0.20) {
      return weatherConditions.find((c) => c.main === "Heat Wave");
    }

    if (["Delhi", "Jaipur", "Ahmedabad"].includes(cityName) && roll < 0.30) {
      return weatherConditions.find((c) => c.main === "Dust");
    }

    if (roll < 0.60)
      return weatherConditions.find((c) => c.main === "Clear");

    if (roll < 0.90)
      return weatherConditions.find((c) => c.main === "Clouds");

    return weatherConditions.find((c) => c.main === "Thunderstorm");
  }

  // ---------- June - Early Monsoon (month 5) ----------
  if (month === 5) {
    const roll = Math.random();

    if (coastalCities.includes(cityName)) {
      if (roll < 0.50)
        return weatherConditions.find((c) => c.main === "Rain");

      if (roll < 0.75)
        return weatherConditions.find((c) => c.main === "Thunderstorm");

      if (roll < 0.90)
        return weatherConditions.find((c) => c.main === "Clouds");

      return weatherConditions.find((c) => c.main === "Mist");
    }

    if (roll < 0.35)
      return weatherConditions.find((c) => c.main === "Rain");

    if (roll < 0.55)
      return weatherConditions.find((c) => c.main === "Thunderstorm");

    if (roll < 0.85)
      return weatherConditions.find((c) => c.main === "Clouds");

    return weatherConditions.find((c) => c.main === "Clear");
  }

  // ---------- July - August Peak Monsoon (month 6,7) ----------
  if (month === 6 || month === 7) {
    const roll = Math.random();

    if (roll < 0.50)
      return weatherConditions.find((c) => c.main === "Rain");

    if (roll < 0.75)
      return weatherConditions.find((c) => c.main === "Thunderstorm");

    if (roll < 0.95)
      return weatherConditions.find((c) => c.main === "Clouds");

    return weatherConditions.find((c) => c.main === "Mist");
  }

  // ---------- September - Withdrawing Monsoon (month 8) ----------
  if (month === 8) {
    const roll = Math.random();

    if (roll < 0.35)
      return weatherConditions.find((c) => c.main === "Rain");

    if (roll < 0.55)
      return weatherConditions.find((c) => c.main === "Thunderstorm");

    if (roll < 0.85)
      return weatherConditions.find((c) => c.main === "Clouds");

    return weatherConditions.find((c) => c.main === "Clear");
  }

  // ---------- October - Post Monsoon (month 9) ----------
  if (month === 9) {
    const roll = Math.random();

    if (
      ["Chennai", "Kochi", "Visakhapatnam"].includes(cityName) &&
      roll < 0.30
    ) {
      return weatherConditions.find((c) => c.main === "Rain");
    }

    if (roll < 0.55)
      return weatherConditions.find((c) => c.main === "Clear");

    if (roll < 0.85)
      return weatherConditions.find((c) => c.main === "Clouds");

    return weatherConditions.find((c) => c.main === "Haze");
  }

  // ---------- November - Early Winter (month 10) ----------
  if (month === 10) {
    const roll = Math.random();

    if (northCities.includes(cityName)) {
      if (roll < 0.35)
        return weatherConditions.find((c) => c.main === "Mist");

      if (roll < 0.40)
        return weatherConditions.find((c) => c.main === "Haze");

      if (roll < 0.75)
        return weatherConditions.find((c) => c.main === "Clear");

      return weatherConditions.find((c) => c.main === "Clouds");
    }

    if (roll < 0.65)
      return weatherConditions.find((c) => c.main === "Clear");

    if (roll < 0.90)
      return weatherConditions.find((c) => c.main === "Clouds");

    return weatherConditions.find((c) => c.main === "Haze");
  }

  // ---------- December - Winter (month 11) ----------
  if (month === 11) {
    const roll = Math.random();

    if (northCities.includes(cityName)) {
      if (roll < 0.40)
        return weatherConditions.find((c) => c.main === "Mist");

      if (roll < 0.55)
        return weatherConditions.find((c) => c.main === "Cold Wave");

      if (roll < 0.85)
        return weatherConditions.find((c) => c.main === "Clear");

      return weatherConditions.find((c) => c.main === "Clouds");
    }

    if (roll < 0.60)
      return weatherConditions.find((c) => c.main === "Clear");

    if (roll < 0.90)
      return weatherConditions.find((c) => c.main === "Clouds");

    return weatherConditions.find((c) => c.main === "Haze");
  }

  // ---------- Fallback ----------
  return weatherConditions.find((c) => c.main === "Clear");
};

// ---------------------------------------------------------
// Helper: build a single Weather document for a city + date
// ---------------------------------------------------------
const buildWeatherRecord = (city, date) => {
  const profile = cityClimateProfiles[city.name];
  if (!profile) return null;

  const month = date.getMonth();

  // fallback: jodi 12 mas er data na thake, 6 mas er data reuse hobe
  const idx = month % profile.temp.length;

  const [tempMin, tempMax] = profile.temp[idx];
  const [humMin, humMax] = profile.humidity[idx];
  const [aqiMin, aqiMax] = profile.aqi[idx];

  const temp = rand(tempMin, tempMax);
  const humidity = Math.round(rand(humMin, humMax));
  const aqi = Math.round(rand(aqiMin, aqiMax));

  const condition = getWeatherCondition(city.name, month);

  // cloud cover condition er upor base kore
  let cloudsAll;
  if (condition.main === "Clear") cloudsAll = Math.round(rand(0, 15));
  else if (condition.main === "Clouds") cloudsAll = Math.round(rand(20, 90));
  else cloudsAll = Math.round(rand(60, 100));

  // visibility - mist/haze/dust hole kom
  let visibility;
  if (["Mist", "Haze", "Dust"].includes(condition.main)) {
    visibility = Math.round(rand(500, 4000));
  } else {
    visibility = Math.round(rand(4000, 10000));
  }

  // pollution components - aqi r proportion e rough breakdown
  const pm2_5 = Number((aqi * rand(0.4, 0.6)).toFixed(2));
  const pm10 = Number((pm2_5 * rand(1.2, 1.6)).toFixed(2));

  return new Weather({
    location: {
      country: { code: "IN", name: "India" },
      state: { name: city.state, code: city.code },
      city: { id: city.id, name: city.name },
    },
    coord: { lat: city.lat, lon: city.lon },
    weather: [
      {
        id: condition.id,
        main: condition.main,
        description: condition.description,
        icon: condition.icon,
      },
    ],
    mainWeather: {
      temp,
      feels_like: Number((temp + rand(-2, 2)).toFixed(2)),
      temp_min: tempMin,
      temp_max: tempMax,
      pressure: Math.round(rand(995, 1025)),
      humidity,
      sea_level: Math.round(rand(1000, 1020)),
      grnd_level: Math.round(rand(990, 1015)),
    },
    visibility,
    wind: {
      speed: rand(0.5, 8),
      deg: Math.round(rand(0, 360)),
      gust: rand(1, 12),
    },
    clouds: { all: cloudsAll },
    sys: {
      country: "IN",
      sunrise: Math.floor(new Date(date).setHours(6, 0, 0, 0) / 1000),
      sunset: Math.floor(new Date(date).setHours(18, 0, 0, 0) / 1000),
    },
    timezone: 19800, // IST = UTC+5:30
    pollution: {
      aqi,
      components: {
        co: Number(rand(200, 1500).toFixed(2)),
        no: Number(rand(0, 20).toFixed(2)),
        no2: Number(rand(5, 60).toFixed(2)),
        o3: Number(rand(10, 80).toFixed(2)),
        so2: Number(rand(2, 30).toFixed(2)),
        pm2_5: pm2_5,
        pm10: pm10,
        nh3: Number(rand(1, 15).toFixed(2)),
      },
      dt: Math.floor(date.getTime() / 1000),
    },
   createdAt: date,
    updatedAt: date,
    source: "OpenWeather",
  });
};

// ---------------------------------------------------------
// Main seeding function
// ---------------------------------------------------------
const seedWeatherData = async () => {
  await connectDB();

  // console.log("🗑️  Clearing old weather data...");
  // await Weather.deleteMany({});

  // Date range - eta change kore tomar dorkar moto din set koro
  const startDate = new Date("2026-07-14");
  const endDate = new Date("2026-07-19");

  const records = [];

  for (
    let d = new Date(startDate);
    d <= endDate;
    d.setDate(d.getDate() + 1)
  ) {
    for (const city of cities) {
      // notun Date object banai, karon buildWeatherRecord er moddhe
      // sunrise/sunset set korar somoy date object mutate hoy
      const recordDate = new Date(d);
      recordDate.setHours(12, 0, 0, 0);
      const record = buildWeatherRecord(city, recordDate);

      if (record) records.push(record);
    }
  }

  console.log(`📦 Total records to insert: ${records.length}`);

  // Batch insert - 1000 ta kore
  const BATCH_SIZE = 1000;
  for (let i = 0; i < records.length; i += BATCH_SIZE) {
    const batch = records.slice(i, i + BATCH_SIZE);
    await Weather.insertMany(batch);
    console.log(
      `✅ Inserted ${Math.min(i + BATCH_SIZE, records.length)} / ${records.length}`
    );
  }

  console.log("🎉 Seeding complete!");
  process.exit(0);
};

seedWeatherData().catch((err) => {
  console.error("❌ Seeding failed:", err);
  process.exit(1);
});

// import dotenv from "dotenv";
// import Weather from "../models/weather.js";
// import { cities } from "./cities.js";
// import {
//   climateProfiles,
//   cityZoneMap,
// } from "./climateProfiles.js";
// import connectDB from "../db/index.js";

// dotenv.config();

// const rand = (min, max) =>
//   Number((Math.random() * (max - min) + min).toFixed(2));

// const weatherConditions = [
//   {
//     id: 800,
//     main: "Clear",
//     description: "clear sky",
//     icon: "01d",
//   },
//   {
//     id: 801,
//     main: "Clouds",
//     description: "few clouds",
//     icon: "02d",
//   },
//   {
//     id: 500,
//     main: "Rain",
//     description: "light rain",
//     icon: "10d",
//   },
//   {
//     id: 701,
//     main: "Mist",
//     description: "mist",
//     icon: "50d",
//   },
//   {
//     id: 802,
//     main: "Clouds",
//     description: "scattered clouds",
//     icon: "03d",
//   },
// ];

// const generateWeatherData = async () => {
//   try {
//     await connectDB();

//     const documents = [];

//     const startDate = new Date("2026-01-01");
//     const endDate = new Date("2026-06-15");

//     for (
//       let date = new Date(startDate);
//       date <= endDate;
//       date.setDate(date.getDate() + 1)
//     ) {
//       for (const city of cities) {
//         const currentDate = new Date(date);

//         currentDate.setHours(12, 0, 0, 0);

//         const month = currentDate.getMonth();

//         const zone = cityZoneMap[city.name];

//         const profile =
//           climateProfiles[zone] ||
//           climateProfiles.Central;

//         const [tempMin, tempMax] =
//           profile.temp[month];

//         const [humidityMin, humidityMax] =
//           profile.humidity[month];

//         const condition =
//           weatherConditions[
//           Math.floor(
//             Math.random() *
//             weatherConditions.length
//           )
//           ];

//         const temp = rand(
//           tempMin,
//           tempMax
//         );

//         const humidity = rand(
//           humidityMin,
//           humidityMax
//         );

//         const aqi = Math.floor(
//           rand(
//             profile.aqi[0],
//             profile.aqi[1]
//           )
//         );

//         const unixTime = Math.floor(
//           currentDate.getTime() / 1000
//         );

//         documents.push({
//           location: {
//             country: {
//               code: "IN",
//               name: "India",
//             },

//             state: {
//               name: city.state,
//               code: city.code,
//             },

//             city: {
//               id: city.id,
//               name: city.name,
//             },
//           },

//           coord: {
//             lat: city.lat,
//             lon: city.lon,
//           },

//           weather: [condition],

//           mainWeather: {
//             temp,

//             feels_like:
//               temp + rand(1, 4),

//             temp_min:
//               temp - rand(1, 3),

//             temp_max:
//               temp + rand(1, 5),

//             pressure: rand(
//               998,
//               1025
//             ),

//             humidity,

//             sea_level: rand(
//               1005,
//               1025
//             ),

//             grnd_level: rand(
//               995,
//               1020
//             ),
//           },

//           visibility: Math.floor(
//             rand(7000, 10000)
//           ),

//           wind: {
//             speed: rand(1, 12),

//             deg: Math.floor(
//               rand(0, 360)
//             ),

//             gust: rand(2, 18),
//           },

//           clouds: {
//             all: Math.floor(
//               rand(0, 100)
//             ),
//           },

//           sys: {
//             country: "IN",

//             sunrise:
//               unixTime - 18000,

//             sunset:
//               unixTime + 18000,
//           },

//           timezone: 19800,

//           pollution: {
//             aqi,

//             components: {
//               co: rand(100, 1200),

//               no: rand(0, 30),

//               no2: rand(5, 100),

//               o3: rand(20, 150),

//               so2: rand(2, 50),

//               pm2_5: rand(10, 120),

//               pm10: rand(15, 180),

//               nh3: rand(1, 20),
//             },

//             dt: unixTime,
//           },

//           weatherTimestamp:
//             currentDate,

//           source: "SeedData",
//         });
//       }
//     }

//     const result = await Weather.insertMany(
//       documents
//     );
    
//     console.log(`Inserted documents: ${result.length}`);
//     process.exit(0);
//   } catch (error) {
//     console.error(
//       "Seed Error:",
//       error
//     );
//     process.exit(1);
//   }
// };

// generateWeatherData();