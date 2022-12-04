<template>
    <div class="row justify-content-center mt-5 mb-3">
        <div class="jumbotron p-5 bg-light box-shadow">
            <h1 class="display-4 text-center mb-3">Welcome to Luxspace !</h1>
            <p class="lead text-center">Browse The Room
            That We Designed For You</p>
            <hr class="my-4">
            <p class="lead text-center">
                <router-link class="btn bg-pink text-dark btn-lg mr-3" to="/detail" role="button">Products</router-link>
                <router-link class="btn bg-pink text-dark btn-lg" to="/shippinglist" role="button">Shipping List</router-link>
            </p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'HomeComponent',
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
