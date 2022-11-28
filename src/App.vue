<template>
  <div id="app">
    <NavbarComponentVue/>
    <BreadcumbComponentVue/>
    <GalleryComponentVue/>
    <SliderComponentVue/>
    <FooterComponentVue/>
    <CopyrightComponentVue/>
  </div>
</template>

<script>
import NavbarComponentVue from './components/NavbarComponent.vue'
import BreadcumbComponentVue from './components/BreadcumbComponent.vue'
import GalleryComponentVue from './components/GalleryComponent.vue'
import SliderComponentVue from './components/SliderComponent.vue'
import FooterComponentVue from './components/FooterComponent.vue'
import CopyrightComponentVue from './components/CopyrightComponent.vue'

export default {
  name: 'App',
  
  components: {
    NavbarComponentVue,
    BreadcumbComponentVue,
    GalleryComponentVue,
    SliderComponentVue,
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

.badge-notif {
  position: relative;
}

.badge-notif[data-badge]:after {
  content: attr(data-badge);
  position: absolute;
  top: 10px;
  right: 5px;
  font-size: .7em;
  background: pink;
  color: white;
  width: 10px;
  height: 10px;
  text-align: center;
  line-height: 10px;
  border-radius: 50%;
}

.bg-grey {
  background-color: darkgrey;
}
</style>
