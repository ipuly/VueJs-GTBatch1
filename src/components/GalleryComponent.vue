<template>
    <div>
        <div class="d-flex justify-content-center p-5">
            <div class="d-flex flex-column justify-content-between">
                <a href="#" class="side"><img src="../assets/images/side-1.png" alt="side-1"
                        class="side border-rounded"></a>
                <a href="#" class="side"><img src="../assets/images/side-2.png" alt="side-2"
                        class="side border-rounded"></a>
                <a href="#" class="side"><img src="../assets/images/side-3.png" alt="side-3"
                        class="side border-rounded"></a>
                <a href="#" class="side"><img src="../assets/images/side-1.png" alt="side-4"
                        class="side border-rounded"></a>
                <a href="#" class="side"><img src="../assets/images/side-2.png" alt="side-5"
                        class="side border-rounded"></a>
            </div>
            <div class="mr-5 ml-3">
                <img id="preview" src="../assets/images/chair.png" alt="chair" class="border-rounded">
            </div>
            <div class="mr-5">
                <h2 id="name">Chair Thatty</h2>
                <p id="price">IDR 12.000.000</p>
                <a href="shipping.html"><button type="button"
                        class="btn border-rounded mb-3 bg-pink border-0 px-4 py-2 d-flex align-items-center">
                        <img src="../assets/images/cart-icon.svg" alt="button-cart"> Add to
                        Chart</button>
                </a>
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
