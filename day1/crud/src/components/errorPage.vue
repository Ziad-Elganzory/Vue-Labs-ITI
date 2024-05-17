<template>
        <router-link class="btn btn-outline-dark mt-5" to="/">Back to Home</router-link>
    <div>
        <img src="https://voidcoders.com/wp-content/uploads/2018/09/featured-404-error-image.png" alt="error" class="err">
    </div>
</template>

<script>
    export default {
        name: 'ErrorPage',
    }
</script>

<style lang="scss" scoped>
.err {
    width: 100%;
    height: 80vh;
}
</style>