<template>
  <div class="weatherwidget mr-4 mb-4 border rounded-3xl inline-block p-6">
    <div v-if="data">

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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data ()
  {
    return {
      data: false
    }
  },
  computed: {
    weatherData ()
    {
      return this.$store.getters.weatherData
    },

  },
  methods: {
    weatherIcon ( icon )
    {
      return 'https://' + icon;
    },
    async fetchWeather ()
    {
      const WEATHER_API = 'https://api.weatherapi.com/v1/forecast.json?key=d20764e093a0499a8c370116232303&q=Dhaka&days=3&aqi=yes&alerts=no'
      try
      {
        const res = await this.$axios.get( WEATHER_API )

        // console.log( res );
        const postsArray = []
        for ( const key in res.data )
        {
          postsArray.push( { ...res.data[ key ], id: key } )
        }
        this.$store.commit( 'setWeather', postsArray )
        this.data = true;

      } catch ( error )
      {
        console.log( error );
      }
    }
  },
  async mounted ()
  {
    await this.fetchWeather()
  },
}
</script>
