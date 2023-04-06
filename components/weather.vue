<template>
  <div class="weatherwidget mr-4 mb-4 border rounded-3xl inline-block p-6">
    <div class="weather-temp flex items-center justify-center">
      <img v-bind:src="weatherIcon(this.$store.getters.weatherData[1].condition.icon)" alt="" srcset="">
      <h1 class="text-3xl"> {{ parseInt(weatherData[1].temp_c) }}&deg; </h1>
    </div>
    <div class="weather-location-time text-center">
      <h1 class="text-xl"> {{ weatherData[0].name }} </h1>
      <p> {{ weatherData[0].localtime.slice(11) }} </p>
    </div>
    <div class="weather-condition text-center">
      <p> {{ weatherData[1].condition.text }} </p>
    </div>

    <div class="weather-forecast flex">
      <div class="weather-day m-4 text-sm text-center" v-for="data in weatherData[2].forecastday">
        <h1>{{ data.date }}</h1>
        <div class="flex justify-center">
          <img v-bind:src="weatherIcon(data.day.condition.icon)" alt="" srcset="">
        </div>
        <div class="weather-temp text-sm flex justify-center">
          <h1> {{ parseInt(data.day.maxtemp_c) }}&deg; &nbsp;</h1>
          <h1> {{ parseInt(data.day.mintemp_c) }}&deg; </h1>
        </div>
        <!-- <div class="weather-day-condition">
          <p> {{ data.day.condition.text }} </p>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    weatherData ()
    {
      if ( process.client )
      {

        console.log( this.$store.getters.weatherData )
      }
      return this.$store.getters.weatherData
    },

  },
  methods: {
    weatherIcon ( icon )
    {
      // console.log( this.$store.getters.weatherData[ 2 ].forecastday )
      return 'https://' + icon;
    }
  }
}
</script>
