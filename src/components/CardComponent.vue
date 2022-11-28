<template>
    <div>
            <div class="d-flex justify-content-around">
                <div class="card border-rounded border-0" style="width: 18rem;">
                    <img class="card-1 border-rounded px-3 pt-3" :src="require( '@/assets/images/' + cardImage + '.png')" alt="chair-1">
                    <div class="card-body">
                        <h5 class="card-title" id="name">{{ cardTitle }}</h5>
                        <p class="card-text" id="price">IDR {{ cardPrice }}</p>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>

export default {
    name: 'CardComponent',
    props: [
        "cardTitle", "cardPrice", "cardImage"
    ],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
