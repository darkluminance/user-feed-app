<template>
    <div class="container">
        <div class="title tracking-wider p-8 m-12 mt-4 border-b">
            <h1 class="text-4xl py-4">{{ post.title }}</h1>
            <p class="text-2xl font-light">{{ post.author }}</p>
            <p class="text-xl font-extralight"> {{ formatDate(post.publishedAt) }}</p>
        </div>

        <div class="content w-4/5  p-8 m-12 mt-4 ">
            <img v-bind:src="post.img" alt="">
            <p class="my-8 text-base">{{ post.content }}</p>
        </div>

    </div>
</template>

<script>
export default {
    computed: {
        post ()
        {
            let Data = this.$store.getters.blogData

            return Data[ this.$route.params.id ]
        }
    },
    methods: {
        formatDate ( dateString )
        {
            const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true }
            const dateObj = new Date( dateString )
            return dateObj.toLocaleString( 'en-US', options )
        }
    },


}
</script>

<style scoped></style>