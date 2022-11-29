<template>
    <div>
        <div class="align-items-center mt-5 p-5 bg-light">
            <div class="my-5 ml-3">
                <h3>Complete Your Room</h3>
                <h3>With What We Designed</h3> 
            </div>
            <div class="d-flex justify-content-around">
                <CardComponentVue 
                    v-for="(item, index) in arrCardTitle"
                    :key="index"
                    :cardTitle="item"
                    :cardPrice="arrCardPrice[index]"
                    :cardImage="arrCardImages[index]"
                    @changePicture="changePictureFunc"
                ></CardComponentVue>

                <!-- <CardComponentVue cardTitle="Cangkir Mauttie" cardPrice="89.300.000" cardImage="chair-1"></CardComponentVue>
                <CardComponentVue cardTitle="Samman Kakka" cardPrice="14.500.00" cardImage="chair-2"></CardComponentVue>
                <CardComponentVue cardTitle="Lino Dino" cardPrice="22.000.000" cardImage="chair-3"></CardComponentVue>
                <CardComponentVue cardTitle="Syail Ammeno" cardPrice="12.000.000" cardImage="chair-4"></CardComponentVue> -->

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
    },

    data() {
        return  {
            arrCardTitle: [
                "Cangkir Mauttie",
                "Samman Kakka",
                "Lino Dino",
                "Syail Ammeno",
            ],
            arrCardImages: [
                "chair-1",
                "chair-2",
                "chair-3",
                "chair-4",
            ],
            arrCardPrice: [
                "89.300.000",
                "14.500.00",
                "22.000.000",
                "12.000.000",
            ]
        }
    },

    methods: {
        changePictureFunc : function (cardImage,cardTitle,cardPrice) {
            // alert(cardImage +cardTitle+cardPrice)
            this.$emit("changePicture", cardImage,cardTitle,cardPrice)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
