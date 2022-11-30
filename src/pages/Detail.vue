<template>
    <div>
        <NavbarComponentVue />
        <BreadcumbComponentVue />
        <GalleryComponentVue :mainImageProps="mainImage" :mainTitleProps="mainTitle" :mainPriceProps="mainPrice"
            :stylingProps="styling" />
        <SliderComponentVue @changePicture="changePictureFunc" />
        <FooterComponentVue />
        <CopyrightComponentVue />
    </div>
</template>

<script>
import NavbarComponentVue from '../components/NavbarComponent.vue'
import BreadcumbComponentVue from '../components/BreadcumbComponent.vue'
import GalleryComponentVue from '../components/GalleryComponent.vue'
import SliderComponentVue from '../components/SliderComponent.vue'
import FooterComponentVue from '../components/FooterComponent.vue'
import CopyrightComponentVue from '../components/CopyrightComponent.vue'

export default {
    name: 'DetailPage',

    components: {
        NavbarComponentVue,
        BreadcumbComponentVue,
        GalleryComponentVue,
        SliderComponentVue,
        FooterComponentVue,
        CopyrightComponentVue,
    },

    methods: {
        changePictureFunc(cardImage, cardTitle, cardPrice) {
            this.mainImage = cardImage
            this.mainTitle = cardTitle
            this.mainPrice = cardPrice
            this.styling = {
                width: 560 + "px",
                height: 609 + "px"
            }
            // alert(cardImage)
        }
    },

    data() {
        return {
            mainImage: "chair",
            mainTitle: "Chair Thatty",
            mainPrice: "12.000.000",
            styling: null
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
