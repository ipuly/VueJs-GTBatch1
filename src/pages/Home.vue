<template>
    <div>
        <NavbarComponentVue />
        <BreadcumbComponentVue />
        <HomeComponentVue />
        <CopyrightComponentVue />
    </div>
</template>

<script>
import NavbarComponentVue from '../components/NavbarComponent.vue'
import BreadcumbComponentVue from '../components/BreadcumbComponent.vue'
import HomeComponentVue from '@/components/HomeComponent.vue'
import CopyrightComponentVue from '../components/CopyrightComponent.vue'

export default {
    name: 'HomePage',

    components: {
        NavbarComponentVue,
        BreadcumbComponentVue,
        HomeComponentVue,
        CopyrightComponentVue,
    },
}
</script>

<style>
.box-shadow {
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.202);
    padding: 10px;
    border: 1px grey;
}

.border-rounded {
    border-radius: 20px;
    box-shadow: 5px;
}

.bg-pink {
    background-color: pink;
}

.border-pink {
    border: 2px solid pink;
}

.bg-grey {
    background-color: darkgrey;
}
</style>
