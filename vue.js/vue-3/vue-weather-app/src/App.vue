<template>
  <Navbar />

  <MainComp :weatherData="weatherData" @onSearchCity="onSearchCity" />
</template>
<script setup>
import Navbar from "./components/Navbar.vue";
import MainComp from "./components/MainComp.vue";
import { ref, onMounted } from "vue"; //그거

//날씨 데이터 상태 변수
const weatherData = ref({
  icon: "icon",
  temp: 0,
  text: "text",
  location: "location",
  city: "seoul",
});
//앱이 실행되면 날씨 데이터 가져오기
onMounted(() => {
  getWeather();
});

function getWeather() {
  console.log("mounted");
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${weatherData.value.city}&appid=bdf8acf6d0d90eb0a4fe220a1bade245`;
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      weatherData.value.icon = data.weather[0].icon;
      weatherData.value.temp = data.main.temp;
      weatherData.value.text = data.weather[0].description;
      weatherData.value.location = data.sys.country;
      weatherData.value.city = data.name;
    })
    .catch((err) => {
      alert("에러가 발생");
    });
}

const onSearchCity = (city) => {
  getWeather();
  weatherData.value.city = city;
};
</script>
<style scoped lang="scss"></style>
