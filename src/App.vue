<template>
  <div id="app" :class="{'overflow-true': $route.meta.overFlow === true}">
    <GlobalNav v-if="$route.meta.hiddenHeader !== true"></GlobalNav>
    <router-view />
    <Footer v-if="$route.meta.hiddenFooter !==true"></Footer>
  </div>
</template>

<script>
import GlobalNav from "./components/GlobalNav/index"
import Footer from "@/components/Footer/index"
export default {
  name: 'App',
  components: {
    GlobalNav, Footer
  }
}
</script>
<style>
  #app {
    height: 100%;
    width: 100%;
  }

  .overflow-true {
    overflow: hidden;
  }
  #main{
    min-height:500px;
  }
</style>
