<template>
    <div>
        <NavbarComponentVue />
        <BreadcumbComponentVue />
        <ListTableComponentVue v-show="!viewForm" @shippingFunc="updateShippingFunc"></ListTableComponentVue>
        <FormComponentVue v-show="viewForm" :shippingDataProps="shippingData"></FormComponentVue>
        <FooterComponentVue />
        <CopyrightComponentVue />
    </div>
</template>

<script>
import NavbarComponentVue from '../components/NavbarComponent.vue'
import BreadcumbComponentVue from '../components/BreadcumbComponent.vue'
import ListTableComponentVue from '../components/ListTableComponent.vue'
import FormComponentVue from '../components/FormComponent.vue'
import FooterComponentVue from '../components/FooterComponent.vue'
import CopyrightComponentVue from '../components/CopyrightComponent.vue'

export default {
    name: 'ShippingListPage',

    components: {
        NavbarComponentVue,
        BreadcumbComponentVue,
        ListTableComponentVue,
        FormComponentVue,
        FooterComponentVue,
        CopyrightComponentVue,
    },
    methods: {
        updateShippingFunc(item) {
            this.shippingData = item;
            this.viewForm = true;
        }
    },
    data() {
        return {
            viewForm: false,
            shippingData: null
        }
    }
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
