<template>
    <div>
        <footer class="d-flex flex-column bg-white px-5 pt-5">
            <div class="d-flex justify-content-center py-5">
                <img src="../assets/images/logo.png" alt="logo">
            </div>
        
            <div class="links d-flex flex-row justify-content-around pb-5">
                <div class="d-flex flex-column">
                    <a href="#" class="text-dark nav-link"><b>Overview</b></a>
                    <a href="shipping.html" class="text-dark nav-link">Shipping</a>
                    <a href="#" class="text-dark nav-link">Refund</a>
                    <a href="#" class="text-dark nav-link">Promotion</a>
                </div>
                <div class="d-flex flex-column">
                    <a href="#" class="text-dark nav-link"><b>Company</b></a>
                    <a href="#" class="text-dark nav-link">About</a>
                    <a href="#" class="text-dark nav-link">Career</a>
                    <a href="#" class="text-dark nav-link">Contact Us</a>
                </div>
                <div class="d-flex flex-column">
                    <a href="#" class="text-dark nav-link"><b>Explore</b></a>
                    <a href="#" class="text-dark nav-link">Terms & Conds</a>
                    <a href="#" class="text-dark nav-link">Privacy Policy</a>
                    <a href="#" class="text-dark nav-link">For Developer</a>
                </div>
                <div>
                    <p class="font-weight-bold">Special Letter</p>
                    <div class="input-group mb-3">
                        <form action="" class="d-flex" id="alertForm">
                            <input type="email" class="form-control border-0 bg-light" id="alertInput"
                                placeholder="Your email address" required />
                            <button type="submit" class="btn bg-pink">
                                <img src="../assets/images/tele-icon.png" alt="" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>

export default {
    name: 'FooterComponent',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
