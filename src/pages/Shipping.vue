<template>
    <div>
        <NavbarComponentVue />
        <BreadcumbComponentVue />
        <FormComponentVue />
        <FooterComponentVue />
        <CopyrightComponentVue />
    </div>
</template>

<script>
import NavbarComponentVue from '../components/NavbarComponent.vue'
import BreadcumbComponentVue from '../components/BreadcumbComponent.vue'
import FormComponentVue from '@/components/FormComponent.vue'
import FooterComponentVue from '../components/FooterComponent.vue'
import CopyrightComponentVue from '../components/CopyrightComponent.vue'

export default {
    name: 'ShippingPage',

    components: {
        NavbarComponentVue,
        BreadcumbComponentVue,
        FormComponentVue,
        FooterComponentVue,
        CopyrightComponentVue,
    },
}
</script>

<style>
.border-rounded {
    border-radius: 20px;
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
