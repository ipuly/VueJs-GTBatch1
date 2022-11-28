<template>
    <div>
        <div class="align-items-center mt-5 p-5 bg-light">
            <div class="my-5 ml-3">
                <h3>Complete Your Room</h3>
                <h3>With What We Designed</h3>
            </div>
            <div class="d-flex justify-content-around">
                <CardComponentVue cardTitle="Cangkir Mauttie" cardPrice="89.300.000" cardImage="chair-1"></CardComponentVue>
                <CardComponentVue cardTitle="Samman Kakka" cardPrice="14.500.00" cardImage="chair-2"></CardComponentVue>
                <CardComponentVue cardTitle="Lino Dino" cardPrice="22.000.000" cardImage="chair-3"></CardComponentVue>
                <CardComponentVue cardTitle="Syail Ammeno" cardPrice="12.000.000" cardImage="chair-4"></CardComponentVue>
            </div>
        </div>
    </div>
</template>

<script>
import CardComponentVue from './CardComponent.vue';

export default {
    name: 'SliderComponent',

    components: {
        CardComponentVue
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
