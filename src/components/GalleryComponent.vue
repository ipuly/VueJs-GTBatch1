<template>
    <div id="galery" >
        <div class="d-flex justify-content-center p-5">
            <div class="d-flex flex-column justify-content-between">
                <a 
                href="" class="side"
                v-for="(side,index) in arrSideProps" :key="index" @click.prevent="arrSideProps=index"
                >
                <img 
                :src="require('@/assets/images/'+ side +'.png')" alt="side" class="side border-rounded"
                >
            </a>
            </div>
            <div class="mr-5 ml-3">
                <img id="preview" 
                :src="require('@/assets/images/' + mainImageProps + '.png')" 
                :style="stylingProps"
                alt="chair" 
                class="border-rounded">
            </div>
            <div class="mr-5">
                <h2 id="name">{{ mainTitleProps }}</h2>
                <p id="price">IDR {{ mainPriceProps }}</p>
                <router-link to="/shipping"><button type="button"
                        class="btn border-rounded mb-3 bg-pink border-0 px-4 py-2 d-flex align-items-center">
                        <img src="../assets/images/cart-icon.svg" alt="button-cart"> Add to
                        Chart</button>
                </router-link>
                <hr>
                <h6 class="mt-4 mb-2">About the product:</h6>
                <p>Tailored to a level of perfection synonymous with that
                    of a Savile Row suit and with understated quality in the
                    detail, Jetty has been influenced by timeless 1950s style.</p>

                <p>Providing a subtle nod to the past, Jetty also provides
                    a perfect solution for the way we work today.
                    A comprehensive product family, Jetty features a variety
                    of elegant chairs and sofas.</p>
                <br>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'GalleryComponent',

    props: [
        "mainImageProps",
        "mainTitleProps",
        "mainPriceProps",
        "stylingProps",
        "sideProps"
    ],

    data() {
        return {
            arrSideProps: [
                "side-1",
                "side-2",
                "side-3",
                "side-1",
                "side-2"
            ],
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
