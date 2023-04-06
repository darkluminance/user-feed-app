<template>
    <div class="">
        <div class="text-center text-2xl font-bold text-red-500">
            Could not post. Please try again later.
        </div>

        <div class="my-8 flex justify-center ">
            <button @click="returnHome"
                class="w-1/5 py-2 px-8 border-2 rounded hover:bg-gray-800 hover:text-gray-200 bg-gray-200 text-gray-800">
                Return Home
            </button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        returnHome ()
        {
            window.location.href = '/'
        }
    },

}
</script>

<style scoped></style>