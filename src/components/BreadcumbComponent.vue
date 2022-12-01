<template>
    <div id="SectionTop">
        <div class="d-flex px-5 py-4 bg-light">
            <a href="#" class="text-dark mr-3">Home</a>
            <span class="text-secondary mr-3">/</span>
            <a href="#" class="text-dark mr-3">Office Room</a>
            <span class="text-secondary mr-3">/</span>
            <router-link to="/detail" class="text-dark mr-3 font-weight-bold" v-show="routeName == 'detail'" >Details</router-link>
            <router-link to="/detail" class="text-dark mr-3" v-show="routeName == 'shipping'">Details</router-link>
            <span class="text-secondary mr-3" v-show="routeName == 'shipping'"  >/</span>
            <router-link to="/shipping" class="text-dark mr-3 font-weight-bold" v-show="routeName == 'shipping'">Shipping</router-link>
        </div>
    </div>
</template>

<script>

export default {
    name: 'BreadcumbComponent',
    computed: {
        routeName() {
            return this.$route.name
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
