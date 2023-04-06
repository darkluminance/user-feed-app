<template>
  <div class="container ">
    <div class="title text-center text-4xl font-light tracking-wider p-8 m-12 mt-4 border-b">
      <h1>WELCOME</h1>
    </div>
    <div class="items flex">
      <div class="flex w-1/4 flex-wrap">
        <weather></weather>
        <technews></technews>
      </div>
      <blog></blog>
      <topnews></topnews>
    </div>
  </div>
</template>

<script>
import weather from '@/components/weather.vue';
import technews from '@/components/technews.vue';
import topnews from '@/components/topnews.vue';
import blog from '@/components/blog.vue';
export default {
  name: 'IndexPage',
  components: {
    weather, technews, topnews, blog
  },
}
</script>
