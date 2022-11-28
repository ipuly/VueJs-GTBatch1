<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white px-5 py-3">
    <img src="../assets/images/logo.png" alt="logo">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul class="navbar-nav ">
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">Showcase</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">Catalog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">Delivery</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">Rewards</a>
        </li>
        <li class="nav-item">
          <div>
            <a href="#" class="nav-link badge-notif"><img src="../assets/images/cart-icon.svg" alt="cart"></a>
          </div>
        </li>
      </ul>
    </div>
  
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
