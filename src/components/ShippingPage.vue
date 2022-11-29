<template>
    <div>
        <NavbarComponentVue/>
        <BreadcumbComponentVue />
        <FooterComponentVue />
        <CopyrightComponentVue />
    </div>
</template>

<script>
import NavbarComponentVue from './components/NavbarComponent.vue'
import BreadcumbComponentVue from './components/BreadcumbComponent.vue'
import FooterComponentVue from './components/FooterComponent.vue'
import CopyrightComponentVue from './components/CopyrightComponent.vue'

export default {
    name: 'ShippingPage',

    components: {
        NavbarComponentVue,
        BreadcumbComponentVue,
        FooterComponentVue,
        CopyrightComponentVue,
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>