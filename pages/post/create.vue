<template>
    <div>
        <div class="border-b pb-4">

            <h1 class="font-bold text-4xl">Create a Blog Post</h1>
            <p class="text-base my-4">Fill up the informations for your post</p>
        </div>

        <form action="#" method="post" @submit.prevent="post()">
            <div>
                <div class="flex flex-col my-4">
                    <div class="input-item">
                        <label class="text-xl font-semibold" for="title">Post Title</label>
                    </div>
                    <div class="input-item">
                        <input class="w-full border-2" type="text" name="title" id="title" v-model="title">
                    </div>
                </div>
                <div class="flex flex-col my-4">
                    <div class="input-item">
                        <label class="text-xl font-semibold" for="author">Post Author</label>
                    </div>
                    <div class="input-item">
                        <input class="w-full border-2" type="text" name="author" id="author" v-model="author">
                    </div>
                </div>
                <div class="flex flex-col my-4">
                    <div class="input-item">
                        <label class="text-xl font-semibold" for="url">Post Image Link</label>
                    </div>
                    <div class="input-item">
                        <input class="w-full border-2" type="text" name="url" id="url" v-model="url">
                    </div>
                </div>
                <div class="flex flex-col my-4">
                    <div class="input-item">
                        <label class="text-xl font-semibold" for="content">Post Content</label>
                    </div>
                    <div class="input-item">
                        <textarea class="w-full border-2" name="content" id="" cols="30" rows="10"
                            v-model="content"></textarea>
                    </div>
                </div>
            </div>
            <div class="blog-create-post m-4">
                <button type="submit"
                    class="py-2 px-8 border-2 rounded bg-gray-800 text-gray-200 hover:bg-gray-200 hover:text-gray-800">
                    Post
                </button>
                <button type="reset" @click="goBack"
                    class="py-2 mx-8 px-8 border-2 rounded hover:bg-gray-800 hover:text-gray-200 bg-gray-200 text-gray-800">
                    Go Back
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data ()
    {
        return {
            title: '',
            author: '',
            url: '',
            content: ''
        }
    },
    methods: {
        goBack ()
        {
            window.location.href = '/'
        },
        post ()
        {
            if ( this.title == '' || this.author == '' || this.content == '' )
            {
                alert( 'Please fill up all the information' )
                return
            }
            let preview = this.content.split( ' ' ).slice( 0, 10 ).join( ' ' ) + '...'
            let date = new Date()

            if ( this.url == '' )
            {
                this.url = 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
            }

            let blogdata = {
                author: this.author,
                content: this.content.trim(),
                img: this.url,
                preview: preview,
                publishedAt: date,
                title: this.title
            }

            let res = axios.post( 'https://user-feed-6041f-default-rtdb.asia-southeast1.firebasedatabase.app/user-posts.json', blogdata )
                .then( res =>
                {
                    if ( res.status == 200 )
                    {
                        window.location.href = '/post/success'
                    } else
                    {
                        window.location.href = '/post/error'

                    }
                } )
        }
    },

}
</script>

<style scoped>
.input-item {
    margin: 0.5em 1em;
}

input {
    height: 2rem;
}
</style>