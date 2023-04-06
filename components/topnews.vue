<template>
    <div class="topnews w-1/4 ml-auto mb-4 border rounded-3xl inline-block p-6 h-max">
        <h1 class="text-xl text-center mb-4">Latest Top News</h1>
        <div @click="gotoURL(news.url)" v-if="news != 'articles'" v-for="news in topnews[2]" class="top-news my-8 border-b">
            <img v-bind:src="news.urlToImage" alt="">
            <h1 class="font-bold text-xl py-2"> {{ news.title }} </h1>
            <div class="font-light text-sm">
                <p class="inline-block font-normal"> {{ news.author }}, &nbsp; </p>
                <p class="inline-block"> {{ formatDate(news.publishedAt) }} </p>
            </div>
            <p class="my-4"> {{ news.description }}... </p>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        topnews ()
        {
            // console.log( this.$store.getters.topnewsData[ 2 ] );
            return this.$store.getters.topnewsData;
        },

    },
    methods: {
        formatDate ( dateString )
        {
            const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true }
            const dateObj = new Date( dateString )
            return dateObj.toLocaleString( 'en-US', options )
        },
        gotoURL ( url )
        {
            window.location.href = url
        },
    },
    async mounted ()
    {
        await this.$store.dispatch( 'fetchNews' );
    },
}
</script>

<style>
.top-news:hover {
    background-color: lightgray;
    user-select: none;
    padding: 2%;
    opacity: 0.8;
}
</style>