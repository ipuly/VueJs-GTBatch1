<template>
    <div id="SectionTop">
        <div class="d-flex px-5 py-4 bg-light">
            <router-link to="/home" class="text-dark mr-3 font-weight-bold" v-show="routeName == 'home'">Home</router-link>
            <router-link to="/home" class="text-dark mr-3" v-show="routeName != 'home'">Home</router-link>
            <span class="text-secondary mr-3" v-show="routeName != 'home'">/</span>
            <router-link to="/detail" class="text-dark mr-3 font-weight-bold" v-show="routeName == 'detail'" >Details</router-link>
            <router-link to="/detail" class="text-dark mr-3" v-show="routeName == 'shipping'">Details</router-link>
            <span class="text-secondary mr-3" v-show="routeName == 'shipping'"  >/</span>
            <router-link to="/shipping" class="text-dark mr-3 font-weight-bold" v-show="routeName == 'shipping'">Shipping</router-link>
            <router-link to="/shippinglist" class="text-dark mr-3 font-weight-bold"
                v-show="routeName == 'shippinglist'">Shipping List</router-link>
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
