<template>
    <div class="blog  mr-4 border rounded-3xl inline-block p-6 h-max">
        <div class="blog-title">
            <h1 class="text-center text-xl mb-8">Blog Posts</h1>
        </div>

        <div class="blog-create py-4 flex justify-center ">
            <button class="py-2 px-8 border-2 rounded hover:bg-gray-800 hover:text-gray-200">
                <NuxtLink to="/post/create">
                    Create Post
                </NuxtLink>
            </button>
        </div>


        <NuxtLink :to="'/post/' + index" v-for="(blog, index) in blogs" :key="index">
            <div class="blogs border-b my-8">
                <img v-bind:src="blog.img" alt="">
                <h1 class="font-bold text-xl py-2"> {{ blog.title }} </h1>
                <div class="font-light text-sm">
                    <p class="inline-block font-normal"> {{ blog.author }}, &nbsp;</p>
                    <p class="inline-block"> {{ formatDate(blog.publishedAt) }} </p>
                </div>
                <p class="my-4"> {{ blog.preview }}</p>
            </div>
        </NuxtLink>

    </div>
</template>

<script>
import axios from 'axios'

export default {
    computed: {
        blogs ()
        {
            return this.$store.getters.blogData;
        },

    },
    methods: {
        formatDate ( dateString )
        {
            const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true }
            const dateObj = new Date( dateString )
            return dateObj.toLocaleString( 'en-US', options )
        },
        setType ()
        {
            localStorage.setItem( 'type', 'blog' )
        },
        async fetchBlogs ()
        {
            let USER_API = 'https://user-feed-6041f-default-rtdb.asia-southeast1.firebasedatabase.app/user-posts.json'

            try
            {
                const res = await axios.get( USER_API )

                const postsArray = []
                for ( const key in res.data )
                {
                    postsArray.push( { ...res.data[ key ], id: key } )
                }
                this.$store.commit( 'setBlogs', postsArray )

            } catch ( error )
            {
                console.log( error );
            }
        }
    },

    async mounted ()
    {
        await this.fetchBlogs()
    }

}
</script>

<style scoped>
.blog {
    width: 44rem;
}

.blogs:hover {
    background-color: lightgray;
    padding: 2%;
    opacity: 0.8;
}

button {
    font-weight: 600;
}
</style>